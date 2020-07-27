import React, { useState } from "react";
import { Form, Navbar, Button, Collapse } from "react-bootstrap";
import FilterBar from "./FilterBar";
import { useSelector } from "react-redux";

function NavBar() {
  const [open, setOpen] = useState(false);
  const sideBarLink = useSelector((state) => state.sideBarMenuReducer);

  let NavbarBrand = "";
  if (sideBarLink === "scheduleListLink") {
    NavbarBrand = "Schedule List Management";
  } else if (sideBarLink === "inputCoilLink") {
    NavbarBrand = "Input Coil Management";
  } else if (sideBarLink === "producedCoilLink") {
    NavbarBrand = "Produced Coil Management";
  } else if (sideBarLink === "lineStoppageLink") {
    NavbarBrand = "Line Stoppage Management";
  }
  return (
    <div>
      <div>
        <Navbar bg="dark" variant="dark" className=" justify-content-between">
          <Navbar.Brand href="">HDGL-2 - {NavbarBrand}</Navbar.Brand>
          <Form inline>
            <Button
              variant="outline-info"
              onClick={() => setOpen(!open)}
              aria-controls="example-collapse-text"
              aria-expanded={open}
            >
              Filter
            </Button>
          </Form>
        </Navbar>
      </div>
      <div>
        <Collapse in={open}>
          <div id="example-collapse-text">
            <FilterBar sideBarLink={sideBarLink} />
          </div>
        </Collapse>
      </div>
    </div>
  );
}
export default NavBar;
