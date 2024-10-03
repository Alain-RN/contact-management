/* eslint-disable no-unused-vars */
import React from "react";
import Button from "../button/Button";
import { useContext } from "react";
import { ContactContext } from "../../context/ContactContext.jsx";
import Close from "../../assets/close-button.png"

// eslint-disable-next-line react/prop-types
function Popdown({drop, value, setDrop, setValue}) {
  const { deleteContact } = useContext(ContactContext)
  const handleDelete = () => {
      deleteContact(value)
      setDrop(false)
  }
  return (
     
    <div className={`popdown-container ${drop ? "popdown-down" : "popdown-up"}`}>
      <div className="popdown">

        <img src={Close} className="icone" 
        onClick={()=>{
          setDrop(false)
          setValue("");
          }}/>

        <p>Que voulez-vous faire ?</p>
        <div className="popdown-buttons d-flex gap-3">
          <Button name="Supprimer" className="suppr" handleAction={handleDelete}/>
          <Button name="Editer" className="edit"></Button>
        </div>
      </div>
    </div>
  );
}

export default Popdown;
