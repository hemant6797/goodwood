import React from 'react';
import ProductCard from './ProductCard'; // Import the ProductCard component
 import almirahData from './Almirah.json'; // Import data for almirah products
//import productsData from '../../../data/products.json';

const Almirah = () => {
    return (
        <div>
            <h1>Almirah</h1>
            <div style={styles.cardContainer}>
                {almirahData.map(product => (
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

export default Almirah;
