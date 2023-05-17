import './App.css';
import React, { Component } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import Home from './Components/Home.js';
import EmployeeDashboard from './Components/EmployeeDashboard.js';
import AdminLogin from './Components/AdminLogin.js';
import AdminDashboard from './Components/AdminDashboard.js';

class App extends Component {
  render() {
    return (
      <Router>
        <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route exact path="/me/:userId" element={<EmployeeDashboard/>}/>
            <Route exact path="/admin" element={<AdminLogin/>}/>
            <Route exact path="/admin/dashboard" element={<AdminDashboard/>}/>
        </Routes>
      </Router>
    );
  }
}


export default App;
