import React from 'react'
import {Navbar} from 'react-bootstrap'
import logo from './public/img/logo.png'

const Header = () => {
  return (
    <Navbar id='Header' expand="lg" fixed="top">
      <Container>
        <Navbar.Brand href="#Banner">
          <img
            alt=""
            src={logo}
            width=""
            height=""
            className=
          />

        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end">
          <Nav className="justify-content-end">
            <Nav.Link href="#Skills">Skills</Nav.Link>
            <Nav.Link href="#Proyects">Projects</Nav.Link>
            <Nav.Link href="#Contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header