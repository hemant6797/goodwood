import React from 'react';
import ProductCard from './ProductCard'; // Import the ProductCard component
import modularKitchenData from './modularKitchen.json'; // Import data for modular kitchen products

const ModularKitchen = () => {
    return (
        <div>
            <h1>Modular Kitchen</h1>
            <div style={styles.cardContainer}>
                {modularKitchenData.map(product => (
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

export default ModularKitchen;
