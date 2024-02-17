import React from 'react';
import ProductCard from './ProductCard'; // Import the ProductCard component
import windowsData from './Windows.json'; // Import data for window products

const Windows = () => {
    return (
        <div>
            <h1>Windows</h1>
            <div style={styles.cardContainer}>
                {windowsData.map(product => (
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

export default Windows;
