import CartWidget from './CartWidget'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link, NavLink } from 'react-router-dom';


function NavBar () {
  return (
    <>
        <Navbar expand="lg" className="bg-body-tertiary">
          <Container fluid>
            <Navbar.Brand href="#">World-KpopTemuco</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
              >
                <NavLink className={({isActive})=> isActive? 'btn btn-primary' : 'btn'} to="/home">
                  Home
                </NavLink>
                <NavLink className={({isActive})=> isActive? 'btn btn-primary' : 'btn'} to="/about">
                  Nosotros
                </NavLink>
                <NavDropdown title="Tienda" id="navbarScrollingDropdown">
                  <NavLink className={({isActive})=> isActive? 'btn btn-primary' : 'btn'} to="/category/album">
                    Album
                  </NavLink>
                  <NavLink className={({isActive})=> isActive? 'btn btn-primary' : 'btn'} to="/category/photocard">
                    Photocard
                  </NavLink>
                  <NavLink className={({isActive})=> isActive? 'btn btn-primary' : 'btn'} to="/category/photobook">
                    Photobook
                  </NavLink>
                  <NavLink className={({isActive})=> isActive? 'btn btn-primary' : 'btn'} to="/category/papeleria">
                    Papeleria
                  </NavLink>
                  <NavLink className={({isActive})=> isActive? 'btn btn-primary' : 'btn'} to="/category/accesorios">
                    Accesorios
                  </NavLink>
                  <NavLink className={({isActive})=> isActive? 'btn btn-primary' : 'btn'} to="/category/fanmode">
                    FanMode
                  </NavLink>
                  <NavLink className={({isActive})=> isActive? 'btn btn-primary' : 'btn'} to="/category/kfood">
                    K-Food
                  </NavLink>
                </NavDropdown>
                <NavLink className={({isActive})=> isActive? 'btn btn-primary' : 'btn'} to="/ubicacion">
                  Ubicacion
                </NavLink>
              </Nav>
              <NavLink className={({isActive})=> isActive? 'btn btn-primary' : 'btn'}>
                {/* carrito */}
                <CartWidget />
              </NavLink>
                
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
    </>
  )
}

export default NavBar