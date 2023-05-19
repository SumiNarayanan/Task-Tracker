import {
  faGithub,
  faLinkedinIn,
  f,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footerIcon">
          <a href="https://www.linkedin.com/?original_referer=https%3A%2F%2Fwww.google.com%2F">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="https://github.com/">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          
        <p>© Copyright by Sekunev</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
