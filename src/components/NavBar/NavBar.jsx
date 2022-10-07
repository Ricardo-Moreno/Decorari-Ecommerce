import '../NavBar/NavBar.scss';
//import CartWidget from '../CartWidget/CartWidget';
import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link, NavLink } from 'react-router-dom';
import Logo from '../Logo/Logo';
import CartWidget from '../CartWidget/CartWidget';

function NavBar() {



  return (
    <>
    <Navbar bg="danger" expand="lg">
     <Container>
       <Navbar.Brand href="#home"><Logo/></Navbar.Brand>
       <Navbar.Toggle aria-controls="basic-navbar-nav" />
       <Navbar.Collapse id="basic-navbar-nav">
         <Nav className="me-auto">
           <NavLink to='/'>Home</NavLink>
           <NavLink>Encargos</NavLink>
           <NavDropdown title="Catalogo" id="basic-nav-dropdown">
             <NavDropdown.Item >
              <Link to='/category/boxAniversario'>
              Arreglos Aniversario
              </Link></NavDropdown.Item>
             <NavDropdown.Item >
              <Link to='/category/boxCumpleaños'>
              Arreglos de Cumplaeños
              </Link></NavDropdown.Item>
             <NavDropdown.Item>Otros</NavDropdown.Item>
           </NavDropdown>
         </Nav>
       </Navbar.Collapse>
       <Link to={`/Cart`}>
       <CartWidget />
          </Link>
     </Container>
   </Navbar>
   </>
  )
}

export default NavBar