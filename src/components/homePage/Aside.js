import React from "react";
import { useIntl } from "react-intl";
import {
  ProSidebar,
  Menu,
  MenuItem,
  SubMenu,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from "react-pro-sidebar";
import {
  FaTachometerAlt,
  FaGem,
  FaList,
  FaGithub,
  FaRegLaughWink,
  FaHeart,
  FaSignOutAlt,
  FaServer,
  FaFileExcel,
  FaIndustry,
} from "react-icons/fa";
//import {  FaTachometerAlt, FaGem, FaList, FaGithub, FaRegLaughWink, FaHeart } from "@fortawesome/free-solid-svg-icons";
import sidebarBg from "./assets/home_slide_2.jpg";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import * as sideBarMenuActions from "../../redux/actions/sideBarMenuActions";

const Aside = ({
  image,
  collapsed,
  rtl,
  toggled,
  handleToggleSidebar,
  handleCollapsedChange,
}) => {
  const intl = useIntl();
  const dispatch = useDispatch();

  function handleClickSchedules(event) {
    event.preventDefault();
    dispatch(sideBarMenuActions.SchedulesListManagementLink());
  }
  function handleClickInput(event) {
    event.preventDefault();
    dispatch(sideBarMenuActions.InputCoilManagementLink());
  }

  function handleClickProduced(event) {
    event.preventDefault();
    dispatch(sideBarMenuActions.ProducedCoilManagementLink());
  }

  function handleClickLineStoppage(event) {
    event.preventDefault();
    dispatch(sideBarMenuActions.LineStoppageLink());
  }

  return (
    <ProSidebar
      image={image ? sidebarBg : false}
      rtl={rtl}
      collapsed={collapsed}
      toggled={toggled}
      breakPoint="md"
      onToggle={handleToggleSidebar}
    >
      <SidebarHeader>
        <div
          style={{
            padding: "0 60px",
            textTransform: "uppercase",
            fontWeight: "bold",
            fontSize: 15,
            letterSpacing: "1px",
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          }}
        >
          {intl.formatMessage({ id: "sidebarTitle" })}
        </div>
      </SidebarHeader>

      <SidebarContent>
        <Menu iconShape="circle">
          {/* <MenuItem
            icon={<FaTachometerAlt />}
            // suffix={
            //   <span className="badge red">
            //     {intl.formatMessage({ id: "new" })}
            //   </span>
            // }
          >
            {intl.formatMessage({ id: "Schedules List Mangement" })}
          </MenuItem> */}
          {/* <MenuItem icon={<FaGem />}>
            {" "}
            {intl.formatMessage({ id: "components" })}
          </MenuItem> */}
        </Menu>
        <Menu iconShape="circle">
          <SubMenu
            // suffix={<span className="badge yellow">3</span>}
            title={intl.formatMessage({ id: "Production Functions" })}
            icon={<FaIndustry />}
          >
            <MenuItem>
              {intl.formatMessage({ id: "Schedules List Mangement" })}{" "}
              <Link onClick={handleClickSchedules} />
            </MenuItem>

            <MenuItem>
              {intl.formatMessage({ id: "Input Coil Management" })}{" "}
              <Link onClick={handleClickInput} />
            </MenuItem>

            <MenuItem>
              {intl.formatMessage({ id: "Produced Coil Management" })}{" "}
              <Link onClick={handleClickProduced} />
            </MenuItem>

            <MenuItem>
              {intl.formatMessage({ id: "Line Stoppages" })}
              <Link onClick={handleClickLineStoppage} />
            </MenuItem>
          </SubMenu>
          <SubMenu
            // prefix={<span className="badge gray">3</span>}
            title={intl.formatMessage({ id: "Report Print Out" })}
            icon={<FaFileExcel />}
          >
            {/* <MenuItem>{intl.formatMessage({ id: "submenu" })} 1</MenuItem>
            <MenuItem>{intl.formatMessage({ id: "submenu" })} 2</MenuItem>
            <MenuItem>{intl.formatMessage({ id: "submenu" })} 3</MenuItem> */}
          </SubMenu>
          <SubMenu
            title={intl.formatMessage({ id: "System Functions" })}
            icon={<FaList />}
          >
            <MenuItem>
              {intl.formatMessage({ id: "User Configrations" })}{" "}
            </MenuItem>
            <MenuItem>{intl.formatMessage({ id: "Settings" })} </MenuItem>
            {/* <SubMenu title={`${intl.formatMessage({ id: "submenu" })} 3`}>
              <MenuItem>{intl.formatMessage({ id: "submenu" })} 3.1 </MenuItem>
              <MenuItem>{intl.formatMessage({ id: "submenu" })} 3.2 </MenuItem>
              <SubMenu title={`${intl.formatMessage({ id: "submenu" })} 3.3`}>
                <MenuItem>
                  {intl.formatMessage({ id: "submenu" })} 3.3.1{" "}
                </MenuItem>
                <MenuItem>
                  {intl.formatMessage({ id: "submenu" })} 3.3.2{" "}
                </MenuItem>
                <MenuItem>
                  {intl.formatMessage({ id: "submenu" })} 3.3.3{" "}
                </MenuItem>
              </SubMenu>
            </SubMenu> */}
          </SubMenu>
        </Menu>
      </SidebarContent>

      <SidebarFooter style={{ textAlign: "center" }}>
        <div className="sidebar-btn-wrapper">
          <a
            // // href="https://github.com/azouaoui-med/react-pro-sidebar"
            // target="_blank"
            className="sidebar-btn"
            rel="noopener noreferrer"
          >
            <FaSignOutAlt />
            <span> {intl.formatMessage({ id: "Logout" })}</span>
          </a>
        </div>
      </SidebarFooter>
    </ProSidebar>
  );
};

export default Aside;
