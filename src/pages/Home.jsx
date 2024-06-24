import React from 'react';

// import './styles.css';

const Home = () => (

<div className="container">
      <div className="content">
        <h1>Welcome to CustomsByAJ</h1>
        <img src="AJCustoms/ajcustoms-app/src/AJShoes1.jpg" alt="Custom Shoes" style={{ maxWidth: '100%', marginBottom: '20px' }} />
        <p>Based in Detroit, Michigan, CustomsByAJ offers premium custom shoe services, including cleaning, restoration, and customization.</p>
        <ul className="info-list">
          <li><strong>Location:</strong> Detroit, Michigan 〽️</li>
          <li><strong>Shipping:</strong> Available Worldwide ✈️</li>
          <li><strong>Turnaround Time:</strong> 1-2 Weeks ⏰</li>
          <li><strong>Services:</strong> Customization, Cleaning & Restoration 👟</li>
          <li><strong>Contact:</strong> <a href="mailto:customsbyaj@example.com">customsbyaj@example.com</a></li>
        </ul>
        <p>For inquiries and orders, please <a href="https://www.instagram.com/a.j.customs/" target="_blank" rel="noopener noreferrer">DM us on Instagram</a>!</p>
        
        {/* <div className="social-icons">
          <a href="https://facebook.com/customsbyaj" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook"></i></a>
          <a href="https://twitter.com/customsbyaj" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
          <a href="https://instagram.com/customsbyaj" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
        </div> */}
      </div>
    </div>
       

);
  
export default Home;