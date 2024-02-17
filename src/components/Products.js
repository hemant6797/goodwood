import React from 'react';
import { Link } from 'react-router-dom';
import './Products.css'; // Import CSS file for Products styling

const Products = () => {
    return (
        <div className="container">
            <h1 className="my-4">Products</h1>
            <div className="row">
                <div className="col-lg-4 col-md-6 mb-4">
                    <Link to="/products/plywood" className="card-link">
                        <div className="card h-100 product-card" style={{ backgroundImage: "url('https://images.pexels.com/photos/53594/blue-clouds-day-fluffy-53594.jpeg')" }}>
                            <div className="card-body">
                                <h4 className="card-title">Plywood</h4>
                                <p className="card-text">Explore different types of plywood.</p>
                            </div>
                        </div>
                    </Link>
                </div>
                {/* Repeat the same structure for the remaining cards */}
                <div className="col-lg-4 col-md-6 mb-4">
                    <Link to="/products/another-category" className="card-link">
                        <div className="card h-100 product-card" style={{ backgroundImage: "url('https://example.com/another-image.jpg')" }}>
                            <div className="card-body">
                                <h4 className="card-title">Another Category</h4>
                                <p className="card-text">Explore another category.</p>
                            </div>
                        </div>
                    </Link>
                </div>
                {/* Repeat this pattern for the remaining cards */}
            </div>
        </div>
    );
};

export default Products;





// import React from 'react';
// import { Link } from 'react-router-dom';
// import './Products.css'; // Import CSS file for Products styling

// const Products = () => {
//     return (
//         <div className="container">
//             <h1 className="my-4">Products</h1>
//             <div className="row">
//                 <div className="col-lg-4 col-md-6 mb-4">
//                     <Link to="/products/plywood" className="card-link">
//                         <div className="card h-100 product-card" style={{ backgroundImage: "url('https://images.pexels.com/photos/53594/blue-clouds-day-fluffy-53594.jpeg')" }}>
//                             <div className="card-body">
//                                 <h4 className="card-title">Plywood</h4>
//                                 <p className="card-text">Explore different types of plywood.</p>
//                             </div>
//                         </div>
//                     </Link>
//                 </div>
//                 {/* Add more cards for other product categories */}
//             </div>
//         </div>
//     );
// };

// export default Products;





