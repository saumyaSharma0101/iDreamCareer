import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from "reactstrap";
import { NavLink } from "react-router-dom";
import "./Header.css";
const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="header">
      <Navbar color="light" light expand="md">
        <div className="container" style={{ width: "65%" }}>
          <NavbarBrand href="/" className="brand-logo">
            IDreamCareer
          </NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink className="nav-link" to="/">
                  Login
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/signup" className="nav-link">
                  SignUp
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/todolist" className="nav-link">
                  To Do App
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </div>
      </Navbar>
    </div>
  );
};

export default Header;
