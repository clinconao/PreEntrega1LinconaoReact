import CartWidget from './CartWidget'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


export const NavBar = () => {
  return (
    <>
      <nav>
        <Navbar expand="lg" className="bg-body-tertiary">
          <Container fluid>
            <Navbqar.Brand href="#">World-KpopTemuco</Navbqar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
              >
                <Nav.Link href="#action1">Home</Nav.Link>
                <Nav.Link href="#action2">Nosotros</Nav.Link>
                <NavDropdown title="Tienda" id="navbarScrollingDropdown">
                  <NavDropdown.Item href="#action3">Album</NavDropdown.Item>
                  <NavDropdown.Item href="#action4">
                    Photocard
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action5">
                    Photobook
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action6">
                    Papeleria
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action7">
                    Accesorios
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action8">
                    FanMode
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action8">
                    K-Food
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="#">
                  Ubicacion
                </Nav.Link>
              </Nav>

                {/* carrito */}
                <CartWidget />
                
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Busqueda"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-success">Buscar</Button>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </nav>
    </>
  )
}

export default NavBar