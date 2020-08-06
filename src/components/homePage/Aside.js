import React from "react";
import {
  ProSidebar,
  Menu,
  MenuItem,
  SubMenu,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from "react-pro-sidebar";
import { FaList, FaSignOutAlt, FaFileExcel, FaIndustry } from "react-icons/fa";
//import {  FaTachometerAlt, FaGem, FaList, FaGithub, FaRegLaughWink, FaHeart } from "@fortawesome/free-solid-svg-icons";
import sidebarBg from "./assets/home_slide_2.jpg";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import * as sideBarMenuActions from "../../redux/actions/sideBarMenuActions";

const Aside = ({
  image,
  collapsed,
  rtl,
  toggled,
  handleToggleSidebar,
  handleCollapsedChange,
}) => {
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
          YILDIZ DEMİR ÇELİK
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
            title={"Production Functions"}
            icon={<FaIndustry />}
          >
            <MenuItem>
              Schedules List Mangements
              <Link  to="" onClick={handleClickSchedules} />
            </MenuItem>

            <MenuItem>
              Input Coil Management
              <Link to="" onClick={handleClickInput} />
            </MenuItem>

            <MenuItem>
              Produced Coil Management
              <Link to="" onClick={handleClickProduced} />
            </MenuItem>

            <MenuItem>
              Line Stoppages
              <Link to="" onClick={handleClickLineStoppage} />
            </MenuItem>
          </SubMenu>
          <SubMenu
            // prefix={<span className="badge gray">3</span>}
            title={"Report Print Out"}
            icon={<FaFileExcel />}
          >
            {/* <MenuItem>{intl.formatMessage({ id: "submenu" })} 1</MenuItem>
            <MenuItem>{intl.formatMessage({ id: "submenu" })} 2</MenuItem>
            <MenuItem>{intl.formatMessage({ id: "submenu" })} 3</MenuItem> */}
          </SubMenu>
          <SubMenu title={"System Functions"} icon={<FaList />}>
            <MenuItem>User Configrations</MenuItem>
            <MenuItem>Settings </MenuItem>
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
          <div>
            <FaSignOutAlt />
            <span> Logout</span>
          </div>
        </div>
      </SidebarFooter>
    </ProSidebar>
  );
};

export default Aside;
