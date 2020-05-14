import React from "react";
import "./card-component.css";

function CardComponent(props) {
  return (
    <div className="card-container">
      <img
        alt="monster"
        src={`https://robohash.org/${props.id}?set=set1&size=180x180`}
      ></img>
      <h1>{props.name}</h1>
      <h2>{props.email}</h2>
    </div>
  );
}

export default CardComponent;
