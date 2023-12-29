import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function header() {
  return (
    <>
      <div>
        <Navbar bg="dark" variant="dark">
          <Nav className="mr-auto navbar_wrapper">
            {localStorage.getItem("User.Info") ? (
              <>
                <Link to="/add">Add Products</Link><br />
                <Link to="/update">Update Products</Link>
              </>
            ) : (
              <>
                <Link to="/login">Login </Link><br/>
                <Link to="/registration">Register</Link>
              </>
            )}
          </Nav>
        </Navbar>
        <br />
      </div>
    </>
  );
}
