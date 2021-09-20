
import React, { Component } from "react";
import { Row, Col, Button } from "reactstrap"
import "./PostList.scss"
import { getTotalPosts } from "../../Service/BlogService"
import scissors from "../../Images/scissors.png"
import clapping from "../../Images/clapping.png"
import cupcake from "../../Images/cupcake.png"
import image from "../../Images/image.png"
import warning from "../../Images/warning.png"
import writing from "../../Images/writing.png"
import hands from "../../Images/hands.png"
import questionmark from "../../Images/questionmark.png"
import { BsBoxArrowUpRight } from "react-icons/bs"
import {MdEdit} from "react-icons/md"
import { Breadcrumb } from "antd";


class PostList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            PostList: [],
            MetaData: [],
            FeaturedImage: [],
            ShortPosts: [],
            MetaDescription: [],
            Url: []
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
        let MetaData = [], FeaturedImage = [], ShortPosts = [], MetaDescription = [], Url = []
        this.state.PostList.map((post, index) => {
            if (post.meta_description === null) {
                MetaData.push(post)
            }
            if (post.feature_image === null) {
                FeaturedImage.push(post)
            }

            if (post.html.length <= 250) {
                ShortPosts.push(post)
            }
            if (post.meta_description != null) {
                MetaDescription.push(post)
            }
            if (post.url.length >= 100) {
                console.log(post.url.length)
                Url.push(post)
            }

        })
        await this.setState({ MetaData: MetaData, FeaturedImage: FeaturedImage, ShortPosts: ShortPosts, MetaDescription: MetaDescription })
    }
    render() {
        const { MetaData, FeaturedImage, ShortPosts, MetaDescription, Url
        } = this.state


        return (
            <div className="postdiv">
                <div className="Breadblock crumb2">
                    <Breadcrumb className="breadfont">
                        <Breadcrumb.Item>Posts List</Breadcrumb.Item>
                    </Breadcrumb>
                </div>
                <div >
                    <Row className="postdisplay">
                        <Col md={4} className="postcol postimage" >
                            <div className="postcard">
                                <div className="posttitlediv"> <img src={cupcake} alt="No Data" className="imagediv1" />Without Meta Description
                                    <img src={questionmark} alt="No Data" className="imagediv2" /></div>
                                {MetaData.length > 0 ? MetaData.map((post, index) => {
                                    return <div> <div className="desc">
                                        <div> {index + 1}.</div>  <div className="titlemargin"> {post.title}</div>
                                        <div className="editdiv"><BsBoxArrowUpRight /></div>
                                        </div>
                                        <div className="desc">
                                        <div className="subtitle">Mark As Valid</div>
                                        <div className="subeditdiv"><MdEdit /> Edit</div>
                                        </div>
                                    
                                    </div>



                                }) : <div className="desc">
                                    <div className="nodata"><img src={clapping} alt="No Data" className="imagediv" /> Awesome! No posts found</div>
                                </div>}
                            </div>
                        </Col>
                        <Col md={4} className="postcol postimage" >
                            <div className="postcard">
                                <div className="posttitlediv"> <img src={image} alt="No Data" className="imagediv1" />Without Featured Image
                                    <img src={questionmark} alt="No Data" className="imagediv2" /></div>
                                {FeaturedImage.length > 0 ? FeaturedImage.map((post, index) => {
                                    return <div><div className="desc">
                                        <div> {index + 1}.</div> <div className="titlemargin"> {post.title}</div>
                                        <div className="editdiv"><BsBoxArrowUpRight /></div>
                                        </div>
                                        <div className="desc">
                                        <div className="subtitle">Mark As Valid</div>
                                        <div className="subeditdiv"><MdEdit /> Edit</div>
                                        </div>
                                    </div>
                                }) : <div className="desc"> <div className="nodata"><img src={clapping} alt="No Data" className="imagediv" /> Awesome! No posts found</div>
                                </div>}
                            </div>
                        </Col>
                        <Col md={4} className="postcol postimage" >
                            <div className="postcard">
                                <div className="posttitlediv"><img src={writing} alt="No Data" className="imagediv1" />Too Short posts, Below 250 Words
                                    <img src={questionmark} alt="No Data" className="imagediv2" /></div>
                                {ShortPosts.length > 0 ? ShortPosts.map((post, index) => {
                                    return <div><div className="desc">
                                        <div> {index + 1}.</div> <div className="titlemargin"> {post.title}</div>
                                        <div className="editdiv"><BsBoxArrowUpRight /></div>
                                        </div>
                                        <div className="desc">
                                        <div className="subtitle">Mark As Valid</div>
                                        <div className="subeditdiv"><MdEdit /> Edit</div>
                                        </div>
                                    </div>
                                }) : <div className="desc"> <div className="nodata"><img src={clapping} alt="No Data" className="imagediv" /> Awesome! No posts found</div>
                                </div>}
                            </div>
                        </Col>


                    </Row>

                    <Row className="postdisplay">
                        <Col md={4} className="postcol postimage" >
                            <div className="postcard">
                                <div className="posttitlediv"><img src={hands} alt="No Data" className="imagediv1" />Too Long Meta Description
                                    <img src={questionmark} alt="No Data" className="imagediv2" /></div>
                                {MetaDescription.length > 0 ? MetaDescription.map((post, index) => {
                                    return <div><div className="desc">
                                        <div> {index + 1}.</div> <div className="titlemargin"> {post.title}</div>
                                        <div className="editdiv"><BsBoxArrowUpRight /></div>
                                        </div>
                                        <div className="desc">
                                        <div className="subtitle">Mark As Valid</div>
                                        <div className="subeditdiv"><MdEdit /> Edit</div>
                                        </div>
                                    </div>
                                }) : <div className="desc"> <div className="nodata"><img src={clapping} alt="No Data" className="imagediv" /> Awesome! No posts found</div>
                                </div>}
                            </div>
                        </Col>
                        <Col md={4} className="postcol postimage" >
                            <div className="postcard">
                                <div className="posttitlediv"><img src={scissors} alt="No Data" className="imagediv1" />Too Long Url, More Than 100 Chars
                                    <img src={questionmark} alt="No Data" className="imagediv2" /></div>
                                {Url.length > 0 ? Url.map((post, index) => {
                                    return <div><div className="desc">
                                        <div> {index + 1}.
                                        </div> <div><div className="titlemargin"> {post.title}</div>
                                            <div className="editdiv"><BsBoxArrowUpRight /></div></div>
                                            </div>
                                        <div className="desc">
                                        <div className="subtitle">Mark As Valid</div>
                                        <div className="subeditdiv"><MdEdit /> Edit</div>
                                        </div>
                                    </div>
                                }) : <div className="desc"> <div className="nodata"><img src={clapping} alt="No Data" className="imagediv" /> Awesome! No posts found</div>
                                </div>}
                            </div>
                        </Col>
                        <Col md={4} className="postcol postimage" >
                            <div className="postcard">
                                <div className="posttitlediv"><img src={warning} alt="No Data" className="imagediv1" />Wrong Slug
                                    <img src={questionmark} alt="No Data" className="imagediv2" /></div>
                                <div className="desc"> <div className="nodata"> <img src={clapping} alt="No Data" className="imagediv" />Awesome! No posts found</div>
                                </div>
                            </div>
                        </Col>
                    </Row>


                </div>

            </div>
        );
    }
}

export default PostList;












