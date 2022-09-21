import React from "react";
import facebookIcon from "./images/facebookIcon.png";
import githubIcon from "./images/githubIcon.png";
import instagramIcon from "./images/instagramIcon.png";
import twitterIcon from "./images/twitterIcon.png";

export default function Footer() {
  return (
    <footer className="links">
      <a href="#">
        <img src={twitterIcon} alt="icon" className="link" />
      </a>

      <a href="#">
        <img src={facebookIcon} alt="icon" className="link" />
      </a>

      <a href="#">
        <img src={instagramIcon} alt="icon" className="link" />
      </a>

      <a href="https://github.com/EmreGUNDOGAN">
        <img src={githubIcon} alt="icon" className="github-link" />
      </a>
    </footer>
  );
}
