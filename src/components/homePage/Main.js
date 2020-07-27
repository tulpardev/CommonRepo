import React from "react";
import { useIntl } from "react-intl";
import { FaHeart, FaBars } from "react-icons/fa";
//import reactLogo from './assets/logo.svg';
import ydcLogo from "../../utils/ydcLogo.svg";
import NavBar from "./NavBar";
import SchedulesListManagement from "../productionsFunctions/SchedulesListManagement";
import InputCoilManagement from "../productionsFunctions/InputCoilManagement";
import ProducedCoilManagement from "../productionsFunctions/ProducedCoilManagement";
import LineStoppage from "../productionsFunctions/LineStoppage";
import { Route, Switch, Router } from "react-router-dom";
import { history } from "../../utils/history";
const Main = ({
  collapsed,
  rtl,
  image,
  handleToggleSidebar,
  handleCollapsedChange,
  handleRtlChange,
  handleImageChange,
}) => {
  const intl = useIntl();
  return (
    <main>
      <div className="btn-toggle" onClick={() => handleToggleSidebar(true)}>
        <FaBars />
      </div>
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
          </Switch>
        </Router>
      </div>
    </main>
  );
};

export default Main;
