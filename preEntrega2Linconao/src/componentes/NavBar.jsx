import CartWidget from './CartWidget'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink } from 'react-router-dom';

const categorys = [
  { id: '1', name: 'Album', category: 'album' },
  { id: '2', name: 'Photocard', category: 'photocard' },
  { id: '3', name: 'Photobook', category: 'photobook' },
  { id: '4', name: 'Papeleria', category: 'papeleria' },
  { id: '5', name: 'Accesorios', category: 'accesorios' },
  { id: '6', name: 'Fanmode', category: 'fanmode' },
  { id: '7', name: 'Kfood', category: 'kfood' }
]

function NavBar() {
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
              <NavLink className={({ isActive }) => isActive ? 'btn btn-primary' : 'btn'} to="/home">
                Home
              </NavLink>
              <NavLink className={({ isActive }) => isActive ? 'btn btn-primary' : 'btn'} to="/about">
                Nosotros
              </NavLink>
              <NavDropdown title="Tienda" id="navbarScrollingDropdown">
                {categorys.map(category =>
                  <NavLink
                    key={category.id}
                    className={({ isActive }) => isActive ? 'btn btn-primary' : 'btn'}
                    to={`/category/${category.category}`}>
                    {category.name}
                  </NavLink>
                )}
              </NavDropdown>
              <NavLink className={({ isActive }) => isActive ? 'btn btn-primary' : 'btn'} to="/ubicacion">
                Ubicacion
              </NavLink>
            </Nav>
            <NavLink className={({ isActive }) => isActive ? 'btn btn-primary' : 'btn'} to='/cart' >
              {/* carrito */}
              <CartWidget />
            </NavLink>


          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default NavBar