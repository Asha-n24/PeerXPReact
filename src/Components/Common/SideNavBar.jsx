import React from "react"
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from "@trendmicro/react-sidenav"
import "@trendmicro/react-sidenav/dist/react-sidenav.css"
import { HiOutlineHome } from "react-icons/hi"
import { FiUser, FiList, FiBook } from "react-icons/fi"
import "../Common//Sidebar.scss"
import { FaBloggerB, FaUser, FaList } from "react-icons/fa"
import { Link } from "react-router-dom"
import { BiPhotoAlbum } from "react-icons/bi"

class Sidebar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            selected: "Dassboard",
        }
    }
    componentDidMount = async () => {
        console.log(this.props, "admin nav")
        this.forceUpdate()
    }
    getTitle = async (data) => {
        localStorage.setItem("title", data)
        this.forceUpdate()
    }
    render() {
        return (
            <SideNav expanded className="sidebar_class">
                <SideNav.Nav defaultSelected="Dashboard">
                    <div
                        className="logo2"
                    >
                        <FaBloggerB size="21px" style={{ marginRight: "5px", marginTop: "1px" }} /> Blogs
                    </div>
                    <NavItem eventKey="Dashboard">
                        <NavIcon style={{ marginTop: "4%" }}>
                            <HiOutlineHome size="1.75rem" />
                        </NavIcon>
                        <NavText onClick={() => this.getTitle("Dashboard")}>
                            <Link to="/dashboard">Dashboard</Link>
                        </NavText>
                    </NavItem>


                    <NavItem eventKey="Post">
                        <NavIcon style={{ marginTop: "4%" }}>
                            <BiPhotoAlbum size="1.75rem" />
                        </NavIcon>
                        <NavText onClick={() => this.getTitle("Posts")}>
                            <Link to="/post">Posts</Link>
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="Pages">
                        <NavIcon style={{ marginTop: "2%" }}>
                            <FaList size="1.25rem" />
                        </NavIcon>
                        <NavText onClick={() => this.getTitle("Pages")}>
                            <Link to="/page">Pages</Link>
                        </NavText>
                    </NavItem>


                </SideNav.Nav>
            </SideNav>
        )
    }
}

export default Sidebar
