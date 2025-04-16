// React features imported from the 'react' library
import React from 'react';
// Bootstrap CSS imported for styling components
import 'bootstrap/dist/css/bootstrap.min.css';
// Pre-styled components imported from the react-bootstrap library
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';

const NavBar = () => {
  return (
    // Navbar component with dark background, white text, shadow, sticky position, padding with responsive layout that expands on large screens
    <Navbar expand="lg" className="bg-dark navbar-dark shadow-sm sticky-top px-3 py-2">
      {/* Container component to center content, add padding , aligned and spaced */}
      <Container>
        
       
        {/* Mobile Toggle Button associated with Navbar.Collapse component. Collapsing or expanding the navbar, with white border  */}
        <Navbar.Toggle aria-controls="navbarNav" className="border-white" />

        {/* Navbar Links, wrapping the collapsible content of the navbar, for expanded or collapsed navbar on smaller screens*/}
        <Navbar.Collapse id="navbarNav">
          {/* Navigation section within navbar, Nav.Links have white text and bold font weight  */}
          <Nav className="mx-auto">
            <Nav.Link href="#news" className="fw-bold text-white">News</Nav.Link>
            <Nav.Link href="#entertainment" className="fw-bold text-white">Entertainment</Nav.Link>
            <Nav.Link href="#sport" className="fw-bold text-white">Sport</Nav.Link>
            <Nav.Link href="#lifestyle" className="fw-bold text-white">Lifestyle</Nav.Link>
            <Nav.Link href="#soaps" className="fw-bold text-white">Soaps</Nav.Link>
            <Nav.Link href="#more" className="fw-bold text-white">Platform</Nav.Link>
            {/* NavDropdown component, containing NavDropdown.Items with links to further sections */}
            <NavDropdown title="More" id="navbarScrollingDropdown" className="fw-bold text-white">
              <NavDropdown.Item href="#games">Games</NavDropdown.Item>
              <NavDropdown.Item href="#movies">Movies</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
// Export the NavBar component for use in other files
export default NavBar;
