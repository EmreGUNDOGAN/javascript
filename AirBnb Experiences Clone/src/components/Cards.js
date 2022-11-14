import React from "react";

function Cards(props){

    let badgeText;
    if(props.card.openSpots === 0){
        badgeText = "SOLD OUT"
    } else if (props.card.location === "Online"){
        badgeText = "ONLINE"
    }

    return (
    <div className="card">
        {badgeText && <div className="sold-badge">{badgeText}</div>}
        <img className="user-image" src={`../images/${props.card.coverImg}`} alt="user" />
        <div className="stats">
            <span>
            <img src="../images/star.png" alt="" className="star-icon" />
            </span>
            <span> {props.card.stats.rating} </span>
            <span className="gray"> ({props.card.stats.reviewCount}) </span>
            <span className="gray"> • {props.card.location} </span>
        </div>
        <p className="card--title">{props.card.title}</p>
        <p className="card--price">
            <span className="bold"> {props.card.price}$ </span> / person
        </p>
    </div>
);
}

export default Cards

