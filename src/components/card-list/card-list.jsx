import React from "react";
import "./card-list.css";
import CardComponent from "../card/card-component";

export function Card(props) {
  return (
    <div className="card-list">
      {props.monsters.map((monster) => (
        <CardComponent
          key={monster.id}
          id={monster.id}
          name={monster.name}
          email={monster.email}
        />
      ))}
    </div>
  );
}
