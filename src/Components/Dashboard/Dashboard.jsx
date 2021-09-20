
import React, { Component } from "react";
import { Row, Col, Button } from "reactstrap"
import { Breadcrumb } from "antd";
import "./Dashboard.scss"
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import { getTotalPosts, getTotalPages, getTotalAuthors, getTotalTags } from "../../Service/BlogService"

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            PostList: [],
            PageList: [],
            AuthorList: [],
            TagList: [],
            PostData: []
        };
    }
    componentDidMount = async () => {
        await this.getTotalPostsList()
        await this.getTotalPagesList()
        await this.getTotalAuthorsList()
        await this.getTotalTagsList()
    }
    getTotalPostsList = async () => {
        const res = await getTotalPosts()
        console.log(res, "response")
        if (res.data.posts.length > 0) {
            await this.setState({ PostList: res.data.posts })
        }

        const monthNames = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];
        let PostData = [], months = []
        let counts = {}

        this.state.PostList.map((post, index) => {
            months.push(monthNames[new Date(post.published_at).getMonth()])
            PostData.push({
                name: monthNames[new Date(post.published_at).getMonth()],
            })
            this.setState({ PostData: PostData })

        })

        months.forEach(function (x) { counts[x] = (counts[x] || 0) + 1; });
        console.log(counts)
        PostData.map((data, k) => {
            data.y = counts[data.name]
            console.log(data, counts[data.name])
        })
        this.setState({ PostData: PostData })

    }
    getTotalPagesList = async () => {
        const res = await getTotalPages()
        console.log(res, "response")
        if (res.data.pages.length > 0) {
            await this.setState({ PageList: res.data.pages })
        }
    }
    getTotalAuthorsList = async () => {
        const res = await getTotalAuthors()
        console.log(res, "response")
        if (res.data.authors.length > 0) {
            await this.setState({ AuthorList: res.data.authors })
        }
    }
    getTotalTagsList = async () => {
        const res = await getTotalTags()
        console.log(res, "response")
        if (res.data.tags.length > 0) {
            await this.setState({ TagList: res.data.tags })
        }
    }
    render() {
        const { PostData, PostList, PageList, AuthorList, TagList } = this.state
        console.log(this.state, "stateee", PostList.length)

        const postoptions = {
            chart: {
                type: 'column'
            },
            title: {
                text: 'Posts per month Chart'
            },
            // subtitle: {
            //     text: 'Source: <a href="http://en.wikipedia.org/wiki/List_of_cities_proper_by_population">Wikipedia</a>'
            // },
            accessibility: {
                announceNewData: {
                    enabled: true
                }
            },
            xAxis: {
                type: 'category',
                title: {
                    text: 'Posts per month Chart'
                }
            },
            yAxis: {
                // title: {
                //     text: 'Total percent market share'
                // }

            },
            legend: {
                enabled: false
            },
            plotOptions: {
                series: {
                    borderWidth: 0,
                    dataLabels: {
                        enabled: true,
                        format: '{point.y:.1f}%'
                    }
                }
            },

            tooltip: {
                headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
                pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>'
            },

            series: [
                {
                    name: "Months",
                    colorByPoint: true,
                    data: PostData

                }
            ],

        }
        return (
            <div className="dashboarddiv">
                <div className="Breadblock crumb2">
                    <Breadcrumb className="breadfont">
                        <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
                    </Breadcrumb>
                </div>
                <div >
                    <Row className="divdisplay">
                        <Col md={3} className="divcol" >
                            <div className="blogcard">
                                <div className="posttitle">Total Posts</div>
                                <div className="countdiv">{PostList.length} </div>
                            </div>
                        </Col>
                        <Col md={3} className="divcol">
                            <div className="blogcard">
                                <div className="posttitle">Total Pages</div>
                                <div className="countdiv">{PageList.length} </div>
                            </div>
                        </Col>
                        <Col md={3} className="divcol">
                            <div className="blogcard">
                                <div className="posttitle">Total Authors</div>
                                <div className="countdiv">{AuthorList.length} </div>
                            </div>
                        </Col>
                        <Col md={3} className="divcol">
                            <div className="blogcard">
                                <div className="posttitle">Total Tags</div>
                                <div className="countdiv">{TagList.length} </div>
                            </div>
                        </Col>
                    </Row>

                    <Row className="divdisplay chartmargin">
                        {/* <HighchartsReact
                            highcharts={Highcharts}
                            options={options}
                        /> */}
                        <Col md={5} className="listdiv">
                            <div>
                                <div class="ribbon-wrapper"><div class="glow">&nbsp;</div>
                                    <div class="ribbon-front">
                                        Latest Published Posts
                                    </div>
                                    <div class="ribbon-edge-topleft"></div>
                                    <div class="ribbon-edge-topright"></div>
                                    <div class="ribbon-edge-bottomleft"></div>
                                    <div class="ribbon-edge-bottomright"></div>
                                </div>
                                {this.state.PostList.slice(0, 5).map((post, index) => {
                                    return <div className="latestlist"><a href={post.url} > {post.title} </a></div>
                                })}
                            </div>
                        </Col>
                        <Col md={7}>
                            <HighchartsReact
                                highcharts={Highcharts}
                                options={postoptions}
                            />
                        </Col>

                    </Row>

                </div>
            </div>
        );
    }
}

export default Dashboard;












