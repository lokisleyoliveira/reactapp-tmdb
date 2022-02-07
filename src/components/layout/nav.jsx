import React from "react";
import { Navbar, Container } from "react-bootstrap";
import { Logo } from "../../assets/index";
import { Link } from "react-router-dom";
import "./nav.scss";

function Nav() {
  return (
    <Navbar>
      <Container>
        <Navbar.Brand>
          <Link to="/">
            <Logo />
          </Link>
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default Nav;
