import React from "react";
import "./style.css";

function AnimeCard(props) {
  return (
    <div className="img-thumbnail" onClick={props.imageClick}>
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
    </div>
  );
}

export default AnimeCard;