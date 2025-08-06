import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-section">
        <h2 className="footer-logo">MiniStore.</h2>
        <p className="footer-description">
          Nisi, purus vitae, ultrices nunc. Sit ac sit suscipit hendrerit. Gravida massa volutpat aenean odio erat nullam fringilla.
        </p>
        <div className="footer-social-icons">
          <a href="#"><i className="fab fa-facebook-f"></i></a>
          <a href="#"><i className="fab fa-instagram"></i></a>
          <a href="#"><i className="fab fa-twitter"></i></a>
          <a href="#"><i className="fab fa-linkedin-in"></i></a>
          <a href="#"><i className="fab fa-youtube"></i></a>
        </div>
      </div>
      <div className="footer-section">
        <h3 className="footer-heading">Quick Links</h3>
        <ul className="footer-links">
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Shop</a></li>
          <li><a href="#">Blogs</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </div>
      <div className="footer-section">
        <h3 className="footer-heading">Help & Info Help</h3>
        <ul className="footer-links">
          <li><a href="#">Track Your Order</a></li>
          <li><a href="#">Returns Policies</a></li>
          <li><a href="#">Shipping + Delivery</a></li>
          <li><a href="#">Contact Us</a></li>
          <li><a href="#">FAQs</a></li>
        </ul>
      </div>
      <div className="footer-section">
        <h3 className="footer-heading">Contact Us</h3>
        <p className="footer-contact">
          Do you have any queries or suggestions? <a href="mailto:yourinfo@gmail.com">yourinfo@gmail.com</a>
        </p>
        <p className="footer-contact">
          If you need support? Just give us a call. <br />
          +55 111 222 333 44
        </p>
      </div>
    </footer>
  );
}

export default Footer;
