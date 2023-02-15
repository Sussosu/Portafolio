import { useState, useEffect } from "react"
import { Navbar, Container } from "react-bootstrap"
import logo from '../public/img/logo.png'

export const Header = () => {
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

    retunr () => window.removeEventlistener("scroll", onScroll)

  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }


  return (
    <Navbar expand="lg" className={scrolled ? "scrolled": ""}> 
      <Container>
        <Navbar.Brand href="#home">
          <img public={} alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle arial-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.link href="#inicio" className={activeLink === 'Inicio' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('Inicio')} >Inicio</Nav.link>
            <Nav.link href="#Sobre mi" className={activeLink === 'Sobre mi' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('Sobre mi')} >Sobre mi</Nav.link>
            <Nav.link href="#Experiencia" className={activeLink === 'Experiencia' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('Experiencia')} >Experiencia</Nav.link>
            <Nav.link href="#Proyectos" className={activeLink === 'Proyectos' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('Proyectos')} >Proyectos</Nav.link>
            <Nav.link href="#Habilidades" className={activeLink === 'Habilidades' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('Habilidades')} >Habilidades</Nav.link>
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
  )
}
