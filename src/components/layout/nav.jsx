import React from "react";
import { Nav } from "react-bootstrap";
import { Logo } from "../../assets/index";
import { Link } from "react-router-dom";
import "./nav.scss";

function NavTMDB() {
  return (
    <Nav>
      <div className="content">
        <Link to="/">
          <Logo />
        </Link>
      </div>
    </Nav>
  );
}

export default NavTMDB;
