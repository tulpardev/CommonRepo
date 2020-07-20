import React from "react";
import ReactDOM from "react-dom";
import App from "./components/root/App";
import * as serviceWorker from "./serviceWorker";

import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import configureStore from "./redux/reducers/configureStore";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import { PrivateRoute } from "../src/components/userloginPage/PrivateRoute";

const store = configureStore();

const routes = (
  <BrowserRouter>
    <Provider store={store}>
      <Switch>
        <Route exact path="/login" component={App} />
        <PrivateRoute path="/homepage" component={HomePage} />
        <Redirect from="/" to="/login" />
      </Switch>
    </Provider>
  </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
