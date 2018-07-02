import React, { Component } from 'react';
import styles from './styles.css';
// import directly from library later to load faster
// import { 
//   Navbar,
//   Nav,
//   NavItem,
//   NavDropdown,
//   MenuItem
// } from 'react-bootstrap';
// import { relative } from 'path';

//style={{background: '#FFFFFF', color: '#FFF', width: 220, height:1000}}
class NavBar extends React.Component {
  render() {
    return (
      <div id="menu" >
        <hr></hr>
        <a>About Lassie</a>
        <br></br>
        <a>FAQ</a>
        <br></br>
        <a>Settings</a>        
      </div>
    )
  }
}

export default NavBar;

{/* <Navbar fluid style={{width: 220, height: 1000 }} >
  <Navbar.Header>
    <Navbar.Brand>
      <a href="#home">Lassie</a>
    </Navbar.Brand>
  </Navbar.Header>
  <Nav >
    <NavItem eventKey={1} href="#">
      About Lassie
    </NavItem>
    <NavItem eventKey={2} href="#">
      FAQ
    </NavItem>
    <NavDropdown eventKey={3} title="Settings" id="basic-nav-dropdown">
      <MenuItem eventKey={3.1}>Users</MenuItem>
      <MenuItem eventKey={3.2}>AWS Permissions</MenuItem>
      <MenuItem divider />
      <MenuItem eventKey={3.4}>Log out</MenuItem>
    </NavDropdown>
  </Nav>
</Navbar> */}