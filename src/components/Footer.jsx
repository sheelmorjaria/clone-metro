//enable React features
import React from 'react';
//import Bootstrap CSS for custom styling
import 'bootstrap/dist/css/bootstrap.min.css';
//impirt social media icons
import { Facebook, Instagram, Tiktok, X } from 'react-bootstrap-icons';
//Footer component
const Footer = () => {
  return (
    //footer element with dark background, white text, centered text and padding
    <footer className="bg-dark text-white text-center py-4">
      {/*container element to center content and add padding */}
      <div className="container">
        {/*paragraph element with copyright text */}
        <p className="mb-2">&copy; {new Date().getFullYear()} Metro. All rights reserved.</p>

        {/* Navigation Links */}
        {/*unordered list with list-unstyled class, flexbox layout, centered text and bottom margin */}
        <ul className="list-unstyled d-flex justify-content-center mb-3">
          {/*list items with margin, anchor tags with white text and no underline */}
          <li className="mx-3"><a href="#contact" className="text-white text-decoration-none">Contact Us</a></li>
          <li className="mx-3"><a href="#privacy" className="text-white text-decoration-none">Privacy Policy</a></li>
          <li className="mx-3"><a href="#terms" className="text-white text-decoration-none">Terms of Service</a></li>
        </ul>

        {/* Social Media Links */}
        <div>
          {/*anchor tags with social media icons, white text, margin and target="_blank" to open in new tab , use rel="noopener noreferrer" for added security*/}
          <a href="https://facebook.com" className="text-white mx-2" target="_blank" rel="noopener noreferrer">
            <Facebook size={24} />
          </a>
          <a href="https://instagram.com" className="text-white mx-2" target="_blank" rel="noopener noreferrer">
            <Instagram size={24} />
          </a>
          <a href="https://tiktok.com" className="text-white mx-2" target="_blank" rel="noopener noreferrer">
            <Tiktok size={24} />
          </a>
          <a href="https://twitter.com" className="text-white mx-2" target="_blank" rel="noopener noreferrer">
            <X size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};
//export Footer component for import in other files
export default Footer;
