import React from 'react';
import './Footer.css'; // Import CSS file for footer styling

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-6">
                        <h4>About Us</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla fermentum accumsan metus, id feugiat justo fermentum et.</p>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <h4>Contact Us</h4>
                        <p>Email: neeleshs1997@gmail.com</p>
                        <p>Phone: +91-8349699041</p>
                    </div>
                    <div className="col-lg-4 col-md-12">
                        <h4>Follow Us</h4>
                        <ul className="social-icons">
                            <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                            <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                            <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
