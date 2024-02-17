

import React from 'react';
import ProductCard from './ProductCard';
import productsData from '../../../data/products.json';

const Plywood = () => {
    return (
        <div>
            <h1>Our Products</h1>
            <div style={styles.cardContainer}>
                {productsData.map(product => (
                    <ProductCard
                        key={product.id}
                        productName={product.name}
                        description={product.description}
                        imageUrl={product.imageUrl}
                        
                    />
                ))}
            </div>
        </div>
    );
};

const styles = {
    cardContainer: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
        gridGap: '1rem',
    },
};

export default Plywood;


// import React from 'react';
// import ProductCard from './ProductCard';
// import productsData from '../data/products.json';

// const Products = () => {
//     return (
//         <div>
//             <h1>Our Products</h1>
//             <div style={styles.cardContainer}>
//                 {productsData.map(product => (
//                     <ProductCard
//                         key={product.id}
//                         productName={product.name}
//                         description={product.description}
//                         imageUrl={product.imageUrl}
//                     />
//                 ))}
//             </div>
//         </div>
//     );
// };

// const styles = {
//     cardContainer: {
//         display: 'grid',
//         gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
//         gridGap: '1rem',
//     },
// };

// export default Products;