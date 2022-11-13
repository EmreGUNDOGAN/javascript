/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import image from "../images/location-icon.png";

export default function Main(props) {
  return (
    <div className="main--holder">
      <div className="image--holder">
        <img className="image" src={props.item.imageUrl} alt="" />
      </div>

      <div className="journey--details">
        <div className="location--holder">
          <img className="location--icon" src={image} alt="" />
          <h3 className="country">{props.item.location}</h3>
          <a href={props.item.googleMapsUrl} className="map--location" target="_blank">
            View on Google Maps
          </a>
        </div>

        <h1 className="title">{props.item.title}</h1>

        <div>
          <h3 className="date">
            {props.item.startDate} - {props.item.endDate}
          </h3>
          <p className="journey--text">{props.item.description}</p>
        </div>
      </div>
    </div>
  );
}
