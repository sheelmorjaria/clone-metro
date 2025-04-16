{/* enable use of React features */}
import React from 'react';
{/* include Bootstrap classes */}
import 'bootstrap/dist/css/bootstrap.min.css';
{/* import pre-styled components from react-bootstrap library */}
import { Form, FormControl, Button, Navbar, Container } from 'react-bootstrap';
{/* import search icon from react-bootstrap-icons */}
import { Search } from 'react-bootstrap-icons';

{/* Header component defined using arrow function, returning a JSX structure defining layout and stucture*/}

const Header = () => {

  return (
    //Navbar component from react-bootstrap library, with dark background, white text and vertical padding. Responsive and expands on large screens 
    <Navbar className="bg-dark text-white py-3" expand="lg">
      {/* Container component to center content and add padding */}
      <Container className="d-flex justify-content-between align-items-center">
        {/* Brand Name, white text bold font weight and font size of 2 */}
        <Navbar.Brand href="#home" className="text-white fw-bold fs-2">
          METRO
        </Navbar.Brand>
        
        {/* Search Bar using flexbox layout*/}
        <Form className="d-flex">
          {/* Search input field with placeholder text and right margin */}
          <FormControl
            type="search"
            placeholder="Search..."
            className="me-2"
          />
          {/* Search button with search icon of size 20 */}
          <Button variant="outline-light">
            <Search size={20} />
          </Button>
        </Form>
        
      </Container>
    </Navbar>
  );
};
//export Header component for import in other files
export default Header;