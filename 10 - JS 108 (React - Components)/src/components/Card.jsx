import React from "react";

function Card(props) {
  console.log(props);
  return (
    <div>
      <h2>{props.name}</h2>
      <img src={props.img} alt={props.name} />
      <p>E-mail: {props.email}</p>
      <p>Telefon: {props.tel}</p>
    </div>
  );
}

export default Card;
