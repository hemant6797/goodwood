import React from 'react';
import ProductCard from './ProductCard'; // Import the ProductCard component
import hardwareData from '../data/hardware.json'; // Import data for hardware products

const Hardware = () => {
    return (
        <div>
            <h1>Hardware</h1>
            <div style={styles.cardContainer}>
                {hardwareData.map(product => (
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

export default Hardware;
