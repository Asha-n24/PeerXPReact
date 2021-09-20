import React, { Component } from "react"

import { Row, Col, Button } from "reactstrap"
import "../Common/Navbar.scss"
// import "../antdstyles/antd.css"
import { BrowserRouter as Router, Switch, Route ,Redirect} from "react-router-dom"
import SideBar from "../Common/SideNavBar"
import Dashboard from "../Dashboard/Dashboard"
import PostList from "../PostList/PostList"
import PageList from "../PageList/PageList"
import { RiAdminFill } from "react-icons/ri";
export class NavBar extends Component {
    constructor(props) {
        super(props)

        this.state = {
            title: localStorage.getItem("title")
        }
    }

    componentDidMount = async () => {
        console.log(localStorage.getItem("title"), document.URL, window.location.pathname)
        await this.setState({ title: localStorage.getItem("title") })

    }

    render() {
        console.log("menuo", this.props)
      
        return (
            <>
                <div className="navbarbase">
                    <Row style={{ width: "100%", margin: "0" }}>
                        <Col md={2}>

                            <SideBar />

                        </Col>
                        <Col md={10}>
                            <div className="dashboard_container">
                                <div>
                                    <div className="dashboard_header">
                                        <div className="dashboardheader_content">
                                        </div>
                                    </div>
                                </div>

                                <div className="">
                                    <Switch>
                                        <div>
                                            {console.log("dept route", this.props)}
                                            <Route path="/dashboard" exact component={Dashboard} />
                                            <Route path="/page"  component={PageList} />
                                            <Route path="/post"  component={PostList} />
                                            <Redirect to="/dashboard"/>

                                        </div>
                                    </Switch>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </>
        )
    }
}

export default NavBar
