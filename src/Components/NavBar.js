import { useState, useEffect } from "react"
import { Navbar, Container } from "react-bootstrap"

export const NavBar = () => {
  const [activeLink, setActivelink] = useState('inicio')
  const [scolled, seScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        seScrolled(true)
      } else {
        seScrolled(false)
      }
    }

    window.addEventListener("scroll", onScroll)
  }, [])

  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          <img src={} alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle arial-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.link href="#inicio">Inicio</Nav.link>
            <Nav.link href="#Sobre mi">Sobre mi</Nav.link>
            <Nav.link href="#Experiencia">Experiencia</Nav.link>
            <Nav.link href="#Proyectos">Proyectos</Nav.link>
            <Nav.link href="#Habilidades">Habilidades</Nav.link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              <a href="#"><img src={} alt="" /></a>
              <a href="#"><img src={} alt="" /></a>
              <a href="#"><img src={} alt="" /></a>
              <a href="#"><img src={} alt="" /></a>
            </div>
            <button className="vvd" onClick={() => conole.log('connect')}><span>Let's Connect</span></button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
}