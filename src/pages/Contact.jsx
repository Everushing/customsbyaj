import React from 'react';
import './Contact.css'; // Import the CSS file with styles

const Contact = () => (
  <div className="container">
    <div className="content">
      <div className="contact-form">
        <h2>Contact Us</h2>
        <form>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" required></textarea>
          <input type="submit" value="Send Message" />
        </form>
      </div>
    </div>
  </div>
);

export default Contact;