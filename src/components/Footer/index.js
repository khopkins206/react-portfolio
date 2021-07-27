import React from "react";
import { FaEnvelope, FaGithub } from "react-icons/fa";
import { SiHeroku } from "react-icons/si";
import "./style.css";

function Footer() {
  return (
    <footer className="footer" bg="light" variant="light">
      <div className="col-xl-2 col-md-4 col-sm-4 contact">
        <h6 className="mb-3 mb-lg-1 bold-text mt-sm-0 mt-5 text-warning">
          <b>CONTACT</b>
        </h6>
        <ul className="list-unstyled">
          <li>
            <FaEnvelope />{" "}
            <a
              href="mailto:katherine@katherinehopkins.me"
              target="_blank"
              rel="noopener noreferrer"
              className={window.location.pathname === "/"}
            >
              Email
            </a>
          </li>
          <li>
            <FaGithub />{" "}
            <a
              href="https://github.com/khopkins206"
              target="_blank"
              rel="noopener noreferrer"
              className={window.location.pathname === "/"}
            >
              GitHub
            </a>
          </li>
          <li>
            <SiHeroku />{" "}
            <a
              href="https://lineup-festival.herokuapp.com/"
              target="_blank"
              rel="noopener noreferrer"
              className={window.location.pathname === "/"}
            >
              Heroku - LineUP
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
