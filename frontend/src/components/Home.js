import React from 'react';
import backgroundImage from '../images/pic9.jpg';

const Home = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '100%',
        height: '100vh', 
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        padding: '50px',
        boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
        borderRadius: '10px',
        color: 'white',
      }}
    >
      <h1>Welcome to Our Home Page</h1>
      <p>Loading...</p>
    </div>
  );
}

export default Home;
