// import React from 'react';

export default function Card(props) {

  return (
    <div className="card-container">
      <div className="flag-Container">
        <img src={Object.values(props.country.flags)[0]} className="flag" alt={Object.values(props.country.flags)[2]} />
      </div>
      <h1 className="countryName">{Object.values(props.country.name)[0]}</h1>
      <div className="country-demographics">
        <p>
          <span>Capital </span>
          {props.country.capital}{" "}
        </p>
        <p>
          <span>Population</span>
          {props.country.population.toLocaleString()}
        </p>
        <p>
          <span>Languages</span>
          {Object.values(props.country.languages).join(", ")}
        </p>
        <p>
          <span>UN Member</span>
          {Object.values(props.country.unMember ? "Yes" : "No")}
        </p>
      </div>
      <div className="country-location">
        <div className="continent-container">
          <p>
            <span>Region</span>
            {props.country.continents[0]}
          </p>
          <p>
            <span>Subregion</span>
            {props.country.subregion}
          </p>
          <p>
            <span>Borders</span>
            {props.country.borders.join(", ")}
          </p>
          <p>
            <span>Currency</span>
            {Object.values(props.country.currencies)[0].name}
          </p>
          <p>
            <span>Symbol</span>
            {Object.values(props.country.currencies)[0].symbol}
          </p>
          <p>
            <span>Fifa</span>
            {Object.values(props.country.fifa)}
          </p>
          <p>
            <span>Car Side</span>
            {Object.values(props.country.car.side)}
          </p>
          <p>
            <span>Car Sign</span>
            {Object.values(props.country.car.signs)}
          </p>
          <p>
            <span>Timezones</span>
            {props.country.timezones.join(", ")}
          </p>
        </div>

      </div>

      <div className="country-bottom">
        {/* <p>{Object.values(props.country.maps)[0]}</p> */}
        <div className="coatOfArmy-container">
          <h3>Coat of Army</h3>
          <img src={Object.values(props.country.coatOfArms)[0]} alt="Coat of Arms" />
        </div>
      </div>
    </div>
  );
}


