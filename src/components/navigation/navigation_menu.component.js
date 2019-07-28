import React from "react";
import { withRouter } from "react-router-dom";
import { inject } from "mobx-react";
import { Nav, Navbar, NavDropdown, Button } from "react-bootstrap";

const NavMenu = ({isAuthenticatedUser, loginStore}) => (
  <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect >
    <Navbar.Brand href="/">Credit/Debit</Navbar.Brand>

    <Navbar.Toggle aria-controls="basic-navbar-nav" />

    {
      isAuthenticatedUser && <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/" eventKey={1}>Home</Nav.Link>
          <Nav.Link href="#link" eventKey={2}>Link</Nav.Link>
          <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Nav>
          <Button variant="outline-info" onClick={loginStore.logout}>Log out</Button>
        </Nav>
      </Navbar.Collapse>
    }
  </Navbar>
);

const NavigationMenu = inject("loginStore")(withRouter(NavMenu));

export default NavigationMenu;