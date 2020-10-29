import React from 'react';
import { Navbar, Nav, Form } from 'react-bootstrap';

const Topbar = () => (
  <Navbar bg="light" expand="lg">
    <Navbar.Brand href="#home">Random Card Viewer</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto" />
      <Form inline>
        <Form.Check type="switch" id="custom-switch" label="Light Theme" />
      </Form>
    </Navbar.Collapse>
  </Navbar>
);

export default Topbar;
