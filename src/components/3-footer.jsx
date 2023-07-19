import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <footer className="flex-row">
      <a href="http://" className="footer-link flex-row">
        <FontAwesomeIcon icon={faGithub} />
      </a>
      <a href="http://" className="footer-link flex-row">
        <FontAwesomeIcon icon={faLinkedin} />
      </a>
    </footer>
  );
}

export default Footer;
