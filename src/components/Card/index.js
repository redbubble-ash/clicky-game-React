import React from "react";
import "./style.css";

function Card(props) {
  return <div className="card" onClick={props.clickCount}>
    <div className="img-container">
      <img id={props.id} alt={props.name} src={props.image} />
    </div>
  </div>
}

export default Card;