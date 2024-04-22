import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div className="footer-row">
          <p className="footer-text">
            All Rights Reserved. Contents Managed by CASU, Ministry of Home
            Affairs, Government of India. Designed, Developed and Hosted by
            National Informatics Centre (NIC) &copy;{new Date().getFullYear()}{" "}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
