import React from 'react'
import { Navbar, Nav, NavDropdown, Container, Row, Col } from 'react-bootstrap'


const Header = () => {
    return (
        <header>
            <Navbar bg="dark" variant='dark' expand="lg" collapseOnSelect>
  <Navbar.Brand href="#home">Pro Shop</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="/cart">Cart</Nav.Link>
      <Nav.Link href="/lognin">Sign In</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
        </header>
    )
}

export default Header
