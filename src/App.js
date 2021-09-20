import logo from './logo.svg';
import './App.css';
import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import NavBar from "./Components/Common/NavBar"
import Dashboard from "./Components/Dashboard/Dashboard"




class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      SpecialityId: "",
      UserRole: "P",
    };
  }
  render() {
    return (
      <div>
        <NavBar />
      </div>
    );
  }
}

export default App;
