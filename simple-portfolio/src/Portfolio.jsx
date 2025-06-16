import React from 'react';

const Portfolio = ({ bio }) => {
    return (
        <div style={styles.card}>
            <img
                src="./myImage.webp"
                alt="Profile"
                style={styles.image}
            />
            <h2 style={styles.name}>Gautam Malaviya</h2>
            <p style={styles.bio}>{bio}</p>
        </div>
    );
};

const styles = {
    card: {
        maxWidth: '400px',
        margin: '40px auto',
        padding: '20px',
        border: '1px solid #ccc',
        borderRadius: '12px',
        textAlign: 'center',
        boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
        fontFamily: 'Arial, sans-serif',
    },
    image: {
        borderRadius: '50%',
        width: '120px',
        height: '120px',
        objectFit: 'cover',
        marginBottom: '16px',
    },
    name: {
        margin: '10px 0',
    },
    bio: {
        color: '#555',
        fontSize: '16px',
    },
};

export default Portfolio;
