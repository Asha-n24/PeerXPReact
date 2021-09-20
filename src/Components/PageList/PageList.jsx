
import React, { Component } from "react";
import { Row, Col, Button } from "reactstrap"
import "./PageList.scss"
import { getTotalPosts } from "../../Service/BlogService"
import photo from "../../Images/photo.png"
import clapping from "../../Images/clapping.png"
import link from "../../Images/link.png"
import { BsBoxArrowUpRight } from "react-icons/bs"
import { Breadcrumb } from "antd";


class PageList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            PostList: [],
            TotalLinks: [],
            InternalLink: [],
            ExternalLink: []

        };
    }
    componentDidMount = async () => {
        await this.getTotalPostsList()
    }
    getTotalPostsList = async () => {
        const res = await getTotalPosts()
        console.log(res, "response")
        if (res.data.posts.length > 0) {
            await this.setState({ PostList: res.data.posts })
        }
        let TotalLinks = [], InternalLink = [], ExternalLink = []
        this.state.PostList.map((post, index) => {

            TotalLinks.push(post.url)
            if (post.url.includes('https://ghost-blog.ipxp.in/')) {
                InternalLink.push(post.url)
            } else {
                ExternalLink.push(post.url)
            }

        })
        await this.setState({ TotalLinks: TotalLinks, InternalLink: InternalLink, ExternalLink: ExternalLink })
    }
    render() {
        const { TotalLinks, ExternalLink, InternalLink } = this.state
        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0');
        var yyyy = today.getFullYear();

        today = dd + '/' + mm + '/' + yyyy;


        return (
            <div className="pagelistdiv">
                <div className="Breadblock crumb2">
                    <Breadcrumb className="breadfont">
                        <Breadcrumb.Item>Pages List</Breadcrumb.Item>
                    </Breadcrumb>
                </div>
                <div >
                    <h3>Links</h3>
                    <div style={{ color: "grey", fontSize: "12px" }}>Click any item to see more details</div>
                    <Row className="pagedisplay">
                        <Col md={4} className="pagecol pageimage1" >
                            <div className="pagecard">
                                <div className="pagetitlediv">Total Links With Any Issue
                                </div>
                                <div className="pagedesc">{TotalLinks.length}</div>
                                <div className="pagetitlediv">Last Check Completed At</div>

                                <div className="pagedesc">{today}</div>
                                <div className="pagetitlediv">Check Frecuency</div>

                                <div className="pagedesc">Daily</div>
                            </div>
                        </Col>

                        <Col md={4} className="pagecol pageimage1" >
                            <div className="pagecard">
                                <div className="pagetitlediv"> <img src={photo} alt="No Data" className="pageimagediv" />Broken Internal Links
                                </div>
                                {InternalLink.length > 0 ? InternalLink.map((post, index) => {
                                    return <div className="pagedesc">
                                        <div> {index + 1}. </div> <a href={post}> {post}</a>
                                        <div className="pageeditdiv"><BsBoxArrowUpRight /></div>
                                    </div>
                                }) : <div className="pagedesc">
                                    <div className="pagenodata"><img src={clapping} alt="No Data" className="pageimagediv" /> Awesome! No posts found</div>
                                </div>}
                            </div>
                        </Col>
                        <Col md={4} className="pagecol pageimage" >
                            <div className="pagecard">
                                <div className="pagetitlediv"> <img src={link} alt="No Data" className="pageimagediv" />Broken External Links
                                </div>
                                {ExternalLink.length > 0 ? ExternalLink.map((post, index) => {
                                    return <div className="pagedesc">
                                        <div> {index + 1}.</div> <a href={post}> {post}</a>
                                        <div className="pageeditdiv"><BsBoxArrowUpRight /></div>
                                    </div>
                                }) : <div className="pagedesc">
                                    <div className="pagenodata"><img src={clapping} alt="No Data" className="pageimagediv" /> Awesome! No posts found</div>
                                </div>}

                            </div>
                        </Col>




                    </Row>



                </div>
            </div>
        );
    }
}

export default PageList;












