import React, { useEffect } from "react";
import UserLogin from "../userloginPage/UserLogin";
import HomePage from "../homePage/HomePage";
import Register from "../../components/registerPage/Register";

import * as alertActions from "../../redux/actions/alertActions";
import { history } from "../../utils/history";
import { PrivateRoute } from "../userloginPage/PrivateRoute";
import { Router, Route, Switch, Redirect } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";

function App() {
  const alert = useSelector((state) => state.alertReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    history.listen((location, action) => {
      dispatch(alertActions.clear());
    });
  }, []);

  return (
    <div
      className="jumbotron jumbotron-fluid"
      style={{ background: "#86BBD8" }}
    >
      <div className="container">
        <div className="col-md-8 offset-md-2">
          {alert.message && (
            <div className={`alert ${alert.type}`}>{alert.message}</div>
          )}
          <Router history={history}>
            <Switch>
              <PrivateRoute exact path="/" component={HomePage} />
              <Route path="/login" component={UserLogin} />
              <Route path="/register" component={Register} />
              <Redirect from="*" to="/" />
            </Switch>
          </Router>
        </div>
      </div>
    </div>
  );
}

export default App;
