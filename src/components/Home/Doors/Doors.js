import React from 'react';
import ProductCard from './ProductCard'; // Import the ProductCard component
import doorsData from './Doors.json'; // Import data for door products

const Doors = () => {
    return (
        <div>
            <h1>Doors</h1>
            <div style={styles.cardContainer}>
                {doorsData.map(product => (
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

export default Doors;
