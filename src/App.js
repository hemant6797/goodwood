import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Products from './components/Products';
import About from './components/About'; 
import Contact from './components/Contact'; 
import Footer from './components/Footer';
import ImagesPage from './components/ImagesPage';
import Plywood from './components/products/Plywood/Plywood';
import ModularKitchen from './components/Home/ModularKitchen/ModularKitchen'; // Import the Plywood component
import Almirah from './components/Home/Almirah/Almirah';
import Doors from './components/Home/Doors/Doors';
import Windows from './components/Home/Windows/Windows';

const App = () => {
    return (
        <Router>
            <div>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/products" element={<Products />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/ImagesPage" element={<ImagesPage />} />
                    {/* Add a nested route for Plywood */}
                    <Route path="/products/plywood" element={<Plywood />} />
                    <Route path="/Home/ModularKitchen" element={<ModularKitchen />} />
                    <Route path="/Home/Almirah" element={<Almirah />} />
                    <Route path="/Home/Doors" element={<Doors />} />
                    <Route path="/Home/Windows" element={<Windows />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
};

export default App;








// import React from 'react';
// import Navbar from './components/Navbar';
// import Home from './components/Home';
// import Products from './components/Products';
// import Footer from './components/Footer';

// const App = () => {
//     return (
//         <div>
//             <Navbar />
//             <Home />
//             {/* You can use React Router to switch between components */}
//             {/* For simplicity, I'm showing both components here */}
//             <Products />
//             <Footer />
//         </div>
//     );
// };

// export default App;
