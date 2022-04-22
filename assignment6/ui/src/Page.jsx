import React from 'react';


import {
  Navbar, Nav, NavItem, NavDropdown,
  MenuItem, Glyphicon, Tooltip, OverlayTrigger,
} from 'react-bootstrap';

import { LinkContainer } from 'react-router-bootstrap';


import Contents from './Contents.jsx';



function NavBar() {
  return (
    <Navbar fluid>
      <Navbar.Header>
        <Navbar.Brand>Products Inventory:</Navbar.Brand>
      </Navbar.Header>
      <Nav>
        <LinkContainer exact to="/">
          <NavItem>Home</NavItem>
        </LinkContainer>
      </Nav>
    </Navbar>
  );
}



export default function Page() {
  return (
    <div>
      <NavBar />
      <Contents />
    </div>
  );
}