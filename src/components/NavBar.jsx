import React from "react";
import CartWidget from "./CartWidget";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";

function CollapsibleExample() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
      <Link to={`/`}>
      <Navbar className="titulo" href="#home">
          FGB MÚSICA
        </Navbar>
                </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Link to={"/tienda"}>
            <Nav.Link id="BotonCatalogo" href="#home">Tienda</Nav.Link>
            </Link>
            <NavDropdown title="Categorías" id="collasible-nav-dropdown">
            <Link to={`/category/${"Guitarra"}`}>
            <NavDropdown.Item href="#action/3.1">Guitarras</NavDropdown.Item>
                </Link>
                <Link to={`/category/${"Bajo"}`}>
                <NavDropdown.Item href="#action/3.2">Bajos</NavDropdown.Item>
                </Link>
                <Link to={`/category/${"Bateria"}`}>
                <NavDropdown.Item href="#action/3.3">Baterías</NavDropdown.Item>
                </Link>
                <Link to={`/category/${"Otros"}`}>
                <NavDropdown.Item href="#action/3.4">Otros</NavDropdown.Item>
                </Link>
              <NavDropdown.Divider />
            </NavDropdown>
          </Nav>
          <Link to={`/cart`} className="link-cart"><CartWidget/></Link>
          <Nav></Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;












// import React from 'react'
// import CartWidget from './CartWidget'
// import { Link } from 'react-router-dom'

// const NavBar = () => {
//   return (
//     <div>
//       <nav>
//         <Link to={`/`} className='brand'><h1 className='brand'>Callejón Diagon</h1></Link>
//           <ul>
//             <Link to={`/tienda`} className='tienda'><li>Tienda</li></Link>
//             <Link to={`/category/${"varitas"}`} className="categorias"><li>Varitas</li></Link>
//             <Link to={`/category/${"accesorios"}`} className="categorias"><li>Accesorios</li></Link>
//             <Link to={`/category/${"dulces"}`} className="categorias"><li>Dulces</li></Link>
//           </ul>
//           <Link to={`/cart`} className="link-cart"><CartWidget/></Link>
//       </nav>
//     </div>
//   )
// }

// export default NavBar