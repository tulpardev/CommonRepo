import React, { useEffect } from "react";
import UserLogin from "../userloginPage/UserLogin";
import Register from "../../components/registerPage/Register";

import * as alertActions from "../../redux/actions/alertActions";
import { history } from "../../utils/history";
import { PrivateRoute } from "../userloginPage/PrivateRoute";
import { Router, Route, Switch, Redirect } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import HomePage from "../homePage/HomePage";

function App() {
  const alert = useSelector((state) => state.alertReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    history.listen((location, action) => {
      dispatch(alertActions.clear());
    });
  }, []);

  return (
    <Router history={history} style={{ backgroundColor: "#D1D5DE" }}>
      <Switch>
        <PrivateRoute path="/homepage" component={HomePage} />
        <Route path="/login" component={UserLogin} />
        <Route path="/register" component={Register} />
        <Redirect from="*" to="/homepage" />
      </Switch>
    </Router>
  );
}

export default App;
