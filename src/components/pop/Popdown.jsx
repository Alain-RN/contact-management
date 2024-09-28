import React from "react";
import Button from "../button/Button";
import Close from "../../assets/close-button.png"

function Popdown(props) {
  return (
    <div className="popdown-container">
      <div className="popdown">

        <img src={Close} className="icone" />

        <p>Que voulez-vous faire ?</p>
        <div className="popdown-buttons d-flex gap-3">
          <Button name="Supprimer" className="suppr"></Button>
          <Button name="Editer" className="edit"></Button>
        </div>
      </div>
    </div>
  );
}

export default Popdown;
