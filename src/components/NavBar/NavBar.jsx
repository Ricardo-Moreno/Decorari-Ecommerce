import './NavBar.scss';
import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import Logo from '../Logo/Logo';
import CartWidget from '../CartWidget/CartWidget';

function NavBar() {



  return (
    <>
      <Navbar bg="danger" expand="lg">
        <Container>
        <Navbar.Brand><Logo/></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse  className='justify-content-around' id="basic-navbar-nav">
                <div>
                  <Link className='text-decoration-none text-dark' to={'/'}>Home</Link>
                </div>
                <div>
                  <Link className='text-decoration-none text-dark' to={'/'}>Contacto</Link>
                </div>
                <div>
                  <Link className='text-decoration-none text-dark' to={'/'}>Acerca de Nosotros</Link>
                </div>
              <Nav className="my-2 my-lg-0">
                  <NavDropdown  title="Catalogo">
                    <div>
                      <Link className='text-decoration-none text-dark m-2' to={'/category/1'}>Arreglos Aniversario</Link>
                    </div>
                      <div>
                        <Link className='text-decoration-none text-dark m-2' to={'/category/2'}>Arreglos de Cumplaeños</Link>
                      </div>
                  </NavDropdown>
              </Nav>
            </Navbar.Collapse>
        <CartWidget />
        </Container>
      </Navbar>
    </>
  )
}

export default NavBar