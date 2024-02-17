import React from 'react';
import './ImagesPage.css'; // Import CSS file for styling
import imageData from '../data/images.json'; // Import image data

const ImagesPage = () => {
    return (
        <div className="images-container">
            {imageData.images.map((image, index) => (
                <div key={index} className="image-item">
                    <img src={image.src} alt={image.caption} />
                    <p>{image.caption}</p>
                </div>
            ))}
        </div>
    );
};

export default ImagesPage;
