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
         <Nav className="me-auto">
           <Link to='/'>Home</Link>
           <Link>Encargos</Link>
           <NavDropdown title="Catalogo" id="basic-nav-dropdown">
             <NavDropdown.Item >
              Arreglos Aniversario
              </NavDropdown.Item>
             <NavDropdown.Item >
              Arreglos de Cumplaeños
              </NavDropdown.Item>
             <NavDropdown.Item>Otros</NavDropdown.Item>
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