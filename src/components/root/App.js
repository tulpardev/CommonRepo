import React from "react";
import logo from "../../logo.svg";
import "../../components/root/App.css";
import { Container } from "reactstrap";
import Navi from "../navi/Navi";
import Dashboard from "./Dasboard";
import { Switch, Route } from "react-router-dom";
import Header from "./Header";
import HomePage from "../homePage/HomePage";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/dashboard" component={Dashboard} />
      </Switch>
    </div>
  );
}

export default App;
