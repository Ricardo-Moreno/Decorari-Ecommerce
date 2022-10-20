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
       <Navbar.Collapse id="basic-navbar-nav">
        <Link to={'/'}>Home</Link>
         <Nav className="me-auto">
           <Link to={'/'}>Home</Link>
           <Link to={'/'}>Encargos</Link>
           <NavDropdown title="Catalogo" id="basic-nav-dropdown">
            <div>
              <Link to={'/category/1'}>
              Arreglos Aniversario
              </Link>
            </div>
            <div>
              <Link to={'/category/2'}>
              Arreglos de Cumplaeños
              </Link>
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