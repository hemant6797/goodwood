// ProductCard.js

import React from 'react';

const ProductCard = ({ productName, description, imageUrl }) => {
    return (
        <div style={styles.card}>
            <img src={imageUrl} alt={productName} style={styles.image} />
            <div style={styles.cardBody}>
                <h3>{productName}</h3>
                <p>{description}</p>
            </div>
        </div>
    );
};

const styles = {
    card: {
        border: '1px solid #ccc',
        borderRadius: '5px',
        padding: '1rem',
        marginBottom: '1rem',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        backgroundColor: '#fff',
        maxWidth: '300px',
    },
    image: {
        width: '100%',
        height: '250px',
        marginBottom: '1rem',
        borderRadius: '5px',
    },
    cardBody: {
        textAlign: 'left',
    },
};

export default ProductCard;



// import React from 'react';

// const ProductCard = ({ productName, description, imageUrl }) => {
//     return (
//         <div style={styles.card}>
//             <img src={imageUrl} alt={productName} style={styles.image} />
//             <div style={styles.cardBody}>
//                 <h3>{productName}</h3>
//                 <p>{description}</p>
//             </div>
//         </div>
//     );
// };

// const styles = {
//     card: {
//         border: '1px solid #ccc',
//         borderRadius: '5px',
//         padding: '1rem',
//         marginBottom: '1rem',
//         boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
//         backgroundColor: '#fff',
//         maxWidth: '300px',
//     },
//     image: {
//         width: '100%',
//         height: 'auto',
//         marginBottom: '1rem',
//         borderRadius: '5px',
//     },
//     cardBody: {
//         textAlign: 'left',
//     },
// };

// export default ProductCard;
