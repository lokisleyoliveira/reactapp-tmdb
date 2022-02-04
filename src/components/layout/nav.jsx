import React from "react";
import { Navbar, Container } from "react-bootstrap";
import { Logo } from "../../assets/index";
import "../layout.scss";

function Nav() {
  return (
    <Navbar>
      <Container>
        <Navbar.Brand href="#home">
          <Logo />
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default Nav;
