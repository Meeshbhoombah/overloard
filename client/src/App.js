import './App.css';
import React, { Component } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import Home from './Components/Home.js';


class App extends Component {
  render() {
    return (
      <Router>
        <Routes>
            <Route exact path="/" component={Home} />
        </Routes>
      </Router>
    );
  }
}


export default App;
