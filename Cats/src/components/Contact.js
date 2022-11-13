import React from "react";
import mailIcon from "../images/mail-icon.png";
import phoneIcon from "../images/phone-icon.png";

function Contact({ img, name, phone, email }) {
  return (
    <div className="contact-card">
      <img src={img} />
      <h3>{name}</h3>
      <div className="info-group">
        <img src={phoneIcon} />
        <p>{phone}</p>
      </div>
      <div className="info-group">
        <img src={mailIcon} />
        <p>{email}</p>
      </div>
    </div>
  );
}

export default Contact;
