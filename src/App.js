import React, { Component } from "react";

import logo from "./logo.svg";
import "./App.css";

import Tabs from "./Components/Tab/Tabs";
require("./Components/Tab/style.css");

class App extends Component {
  render() {
    return (
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          <h1>Tabs Demo</h1>
          <Tabs>
            <div label="KuyHorm">
              Ha sue dai nai ta lat Vee la, <em>10.000</em>!
            </div>
            <div label="HoiWarn">
              HoiWarn U Laos bor me, Pai sue u<br /> <em>BarzaarBee</em>!
            </div>
          </Tabs>
        </div>
      </div>
    );
  }
}

export default App;
