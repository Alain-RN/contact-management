import React from "react";
import Button from "../button/Button";
import Close from "../../assets/close-button.png"

// eslint-disable-next-line react/prop-types
function Popdown({drop, value, setDrop, setValue}) {
  return (
    // eslint-disable-next-line react/prop-types
    <div className={`popdown-container ${drop ? "popdown-down" : "popdown-up"}`}>
      <div className="popdown">

        <img src={Close} className="icone" 
        onClick={()=>{
          setDrop(false)
          setValue("");
          }}/>

        <p>Que voulez-vous faire ?+{value}</p>
        <div className="popdown-buttons d-flex gap-3">
          <Button name="Supprimer" className="suppr"></Button>
          <Button name="Editer" className="edit"></Button>
        </div>
      </div>
    </div>
  );
}

export default Popdown;
