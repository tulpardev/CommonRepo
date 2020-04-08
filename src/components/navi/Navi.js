import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  //NavItem,
  NavbarText
} from "reactstrap";
import { Link } from "react-router-dom";

const Navi = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand> <Link to="/">Customer-App</Link></NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            {/* <NavItem>
            </NavItem> */}
          </Nav>
          <NavbarText>App</NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Navi;
