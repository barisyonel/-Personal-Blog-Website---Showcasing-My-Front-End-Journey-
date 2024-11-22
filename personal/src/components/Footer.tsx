import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import "./../styles/Footer.css";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h3>My Blog</h3>
        <p>Sharing my journey and projects as a Front-End Developer.</p>
        <div className="footer-links">
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/projects">Projects</a>
          <a href="/contact">Contact</a>
        </div>
        <div className="footer-socials">
          <a
            href="https://github.com/barisyonel"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/bar%C4%B1%C5%9F-can-y%C3%B6nel-275292157/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
          </a>
        </div>
        <p className="footer-credits">
          © 2024 My Blog. All rights reserved. | Designed by Barış Can Yönel
        </p>
      </div>
    </footer>
  );
};

export default Footer;
