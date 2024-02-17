import React from 'react';
import { Link } from 'react-router-dom';
import { Carousel } from 'react-bootstrap';
import './Home.css'; // Import CSS file for Home styling
import data from '../data/data.json';
import modularKitchenImage from '../data/images/modularKitchen.jpg';
import almirahImage from '../data/images/almirah.jpg';
import doorsImage from '../data/images/doors.jpg';
import windowsImage from '../data/images/windows.jpg';

const Home = () => {
    return (
        <div className="home-container">
            <div className="carousel-container">
                <Carousel>
                    {data.scrollingImages.map((image, index) => (
                        <Carousel.Item key={index}>
                            <img
                                className="d-block w-100"
                                src={image}
                                alt={`Slide ${index}`}
                            />
                        </Carousel.Item>
                    ))}
                </Carousel>
            </div>
            <div className="content">
                {/* <h1>{data.content.heading}</h1>
                <p>{data.content.description}</p> */}
            </div>
            <div className="row">
                <div className="col-lg-4 col-md-6 mb-4">
                    <Link to="/Home/ModularKitchen" className="card-link">
                        <div className="card h-100 product-card" style={{ backgroundImage: `url(${modularKitchenImage})` }}>
                            <div className="card-body">
                                <h4 className="card-title">Modular Kitchen</h4>
                                <p className="card-text">Explore different types of Modular Kitchen.</p>
                            </div>
                        </div>
                    </Link>
                </div>
                <div className="col-lg-4 col-md-6 mb-4">
                    <Link to="/Home/Almirah" className="card-link">
                        <div className="card h-100 product-card" style={{ backgroundImage: `url(${almirahImage})` }}>
                            <div className="card-body">
                                <h4 className="card-title">Almirah</h4>
                                <p className="card-text">Explore different types of Almirah.</p>
                            </div>
                        </div>
                    </Link>
                </div>
                <div className="col-lg-4 col-md-6 mb-4">
                    <Link to="/Home/Doors" className="card-link">
                        <div className="card h-100 product-card"  style={{ backgroundImage: `url(${doorsImage})` }}>
                            <div className="card-body">
                                <h4 className="card-title">Doors</h4>
                                <p className="card-text">Explore different types of Doors.</p>
                            </div>
                        </div>
                    </Link>
                </div>
                <div className="col-lg-4 col-md-6 mb-4">
                    <Link to="/Home/Windows" className="card-link">
                        <div className="card h-100 product-card" style={{ backgroundImage: `url(${windowsImage})` }}>
                            <div className="card-body">
                                <h4 className="card-title">Windows</h4>
                                <p className="card-text">Explore different types of Windows.</p>
                            </div>
                        </div>
                    </Link>
                </div>
                {/* Add more product cards here if needed */}
            </div>
        </div>
    );
};

export default Home;
