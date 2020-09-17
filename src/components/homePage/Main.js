import React from "react";
import NavBar from "./NavBar";
import SchedulesListManagement from "../productionsFunctions/SchedulesListManagement";
import InputCoilManagement from "../productionsFunctions/InputCoilManagement";
import ProducedCoilManagement from "../productionsFunctions/ProducedCoilManagement";
import LineStoppage from "../productionsFunctions/LineStoppage";
import { Route, Switch, Router } from "react-router-dom";
import { history } from "../../utils/history";
import FilterScreen from "../HomePage/FilterScreen"
const Main = () => {
  return (
    <main>
      <header>
        <NavBar />
      </header>
      <div>
        <Router history={history}>
          <Switch>
            <Route
              path={"/homepage/scheduleslist"}
              component={SchedulesListManagement}
            />
            <Route
              path={"/homepage/inputcoil"}
              component={InputCoilManagement}
            />
            <Route
              path={"/homepage/producedcoil"}
              component={ProducedCoilManagement}
            />
            <Route path={"/homepage/linestoppage"} component={LineStoppage} />
            <Route path={"/homepage/filter"} component={FilterScreen} />
          </Switch>
        </Router>
      </div>
    </main>
  );
};

export default Main;
