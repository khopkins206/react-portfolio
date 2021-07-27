import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import logo from "./kh-logo.png";

function Header() {
  return (
    <Navbar bg="light" variant="light">
      <Container>
        <Navbar.Brand href="/">
          <img
            alt="Logo"
            src={logo}
            width="30"
            height="30"
            className="align-top"
          />{" "}
        </Navbar.Brand>

        <Nav>
          <Nav.Link href="https://github.com/kjackson206">Github</Nav.Link>
          <Nav.Link
            eventKey={2}
            href="https://www.linkedin.com/in/katherine-hopkins206/"
          >
            Linkedin
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}
export default Header;
