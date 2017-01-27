import React from 'react'
import { Nav, NavItem } from 'react-bootstrap'

const NavBar = (props) => {
  return (
    <Nav bsStyle="tabs" activeKey="1">
      <NavItem eventKey="1" href="/home">Dashboard</NavItem>
      <NavItem eventKey="2" title="Item">Create Tweet</NavItem>
    </Nav>
  )
}

export default NavBar
