import React from 'react';
import './OrderForm.css'; // Import the CSS file with styles

const OrderForm = () => (
  <div className="order-container">
    <div className="order-content">
      <h2>Place Your Order</h2>
      <form className="order-form">
        <label htmlFor="name">Your Name:</label>
        <input type="text" id="name" name="name" placeholder="Enter your name" required />

        <label htmlFor="email">Your Email:</label>
        <input type="email" id="email" name="email" placeholder="Enter your email" required />

        <label htmlFor="shoe-type">Type of Shoes:</label>
        <select id="shoe-type" name="shoe-type" required>
          <option value="">Select type of shoes</option>
          <option value="Customization">Customization</option>
          <option value="Cleaning">Cleaning</option>
          <option value="Restoration">Restoration</option>
        </select>

        <label htmlFor="message">Additional Instructions:</label>
        <textarea id="message" name="message" placeholder="Any specific instructions?" rows="4"></textarea>

        <button type="submit">Submit Order</button>
      </form>
    </div>
  </div>
);

export default OrderForm;
