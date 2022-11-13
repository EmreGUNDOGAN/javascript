import React from "react";
import mailIcon from "../images/mail-icon.png";
import phoneIcon from "../images/phone-icon.png";

function Contact(props) {
  return (
    <div className="contact-card">
      <img src={props.img} />
      <h3>{props.name}</h3>
      <div className="info-group">
        <img src={phoneIcon} />
        <p>{props.phone}</p>
      </div>
      <div className="info-group">
        <img src={mailIcon} />
        <p>{props.email}</p>
      </div>
    </div>
  );
}

export default Contact;
