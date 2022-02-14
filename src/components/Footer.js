import React from "react";
import { Navbar, Button } from "react-bootstrap";
import { IoMdSettings } from "react-icons/io";

function Footer() {
  return (
    <div className="fixed-bottom">
      <Navbar bg="light" expand="lg">
        <Navbar.Brand className="mx-3">© Seritha</Navbar.Brand>
        <Button className=" mx-3 ms-auto" variant="link">
          Settings<IoMdSettings/> 
        </Button>
      </Navbar>
    </div>
  );
}

export default Footer;
