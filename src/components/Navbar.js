import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap'; // Import Navbar and Nav components from react-bootstrap
import logo from '../data/images/logo.png'; // Import your logo image

const NavbarComponent = () => {
    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Navbar.Brand as={Link} to="/">
                <img
                    src={logo}
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                    alt="React Logo"
                />
                GoodWood
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarNav" />
            <Navbar.Collapse id="navbarNav">
                <Nav className="ml-auto">
                    <Nav.Link as={Link} to="/">Home</Nav.Link>
                    <Nav.Link as={Link} to="/products">Products</Nav.Link>
                    <Nav.Link as={Link} to="/about">About</Nav.Link>
                    <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
                    <Nav.Link as={Link} to="/images">Images</Nav.Link> {/* Updated route to "/images" */}
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default NavbarComponent;





// import React from 'react';
// import { Link } from 'react-router-dom';
// import { Navbar, Nav } from 'react-bootstrap'; // Import Navbar and Nav components from react-bootstrap
// import ImagesPage from './ImagesPage';

// const NavbarComponent = () => {
//     return (
//         <Navbar bg="dark" variant="dark" expand="lg">
//             <Navbar.Brand as={Link} to="/">Reacts</Navbar.Brand>
//             <Navbar.Toggle aria-controls="navbarNav" />
//             <Navbar.Collapse id="navbarNav">
//                 <Nav className="ml-auto">
//                     <Nav.Link as={Link} to="/">Home</Nav.Link>
//                     <Nav.Link as={Link} to="/products">Products</Nav.Link>
//                     <Nav.Link as={Link} to="/about">About</Nav.Link>
//                     <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
//                     <Nav.Link as={Link} to="/images">Images</Nav.Link> {/* Updated route to "/images" */}
//                 </Nav>
//             </Navbar.Collapse>
//         </Navbar>
//     );
// };

// export default NavbarComponent;


// import React from 'react';
// import { Link } from 'react-router-dom';
// import './Navbar.css'; // Import CSS file for Navbar styling
// import ImagesPage from './ImagesPage';

// const Navbar = () => {
//     return (
//         <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
//             <div className="container-fluid">
//                 <Link to="/" className="navbar-brand">Good Wood</Link>
//                 <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
//                     <span className="navbar-toggler-icon"></span>
//                 </button>
//                 <div className="collapse navbar-collapse" id="navbarNav">
//                     <ul className="navbar-nav ml-auto">
//                         <li className="nav-item">
//                             <Link to="/" className="nav-link">Home</Link>
//                         </li>
//                         <li className="nav-item">
//                             <Link to="/products" className="nav-link">Products</Link>
//                         </li>
//                         <li className="nav-item">
//                             <Link to="/about" className="nav-link">About</Link>
//                         </li>
//                         <li className="nav-item">
//                             <Link to="/contact" className="nav-link">Contact</Link>
//                         </li>
//                         <li className="nav-item">
//                             <Link to="/ImagesPage" className="nav-link">Images</Link>
//                         </li>
//                     </ul>
//                 </div>
//             </div>
//         </nav>
//     );
// };

// export default Navbar;

