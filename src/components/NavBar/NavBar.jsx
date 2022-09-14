import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from '../CartWidget/CartWidget';
import '../NavBar/NavBar.scss';



function NavBar() {
  return (
    <>
       <Navbar bg="danger" variant="blue">
        <Container>
          <Navbar.Brand href="#home">
            <CartWidget/>
             </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Inicio</Nav.Link>
            <Nav.Link href="#features">Contactos</Nav.Link>
            <Nav.Link href="#pricing">Categorias</Nav.Link>
            <NavDropdown title="Categorias" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action1">Arreglos</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action2">Decoraciones</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action3">Vnilos</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Container>
      </Navbar>
      </>
  )
}

export default NavBar