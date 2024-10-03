/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useContext, useState } from "react";
import { ContactContext } from "../context/ContactContext";
import Input from "../components/input/Input";
import Button from "../components/button/Button";
import Right from "../assets/right-arrow.png";

function ContactForm(props) {

  const { addContact } = useContext(ContactContext);
  const [nom, setNom] = useState("");
  const [email, setEmail] = useState("");
  const [telephone, setTelephone] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const contact = { nom, email, telephone };
    addContact(contact)
    handleCancel()
  }
  const handleCancel = (e) => {
    setNom("");
    setEmail("");
    setTelephone("");
  }

  return (
    <div
      className={`d-xxl-flex container-form ${props.open} contact-title  justify-content-center pt-5`}
    >
      <div className="">
        
        <img src={Right} className="right d-xxl-none" onClick={() => {props.setOpen("")}}/>
        <h1 className="form-title pt-5">
          Ajoutez un contact
        </h1>

        <form className="contact-form pt-4" onSubmit={ handleSubmit } >
          <Input value = {nom} onChange = {setNom} name="Contact-name" type="text" holder="name" />
          <Input value = {email} onChange = {setEmail} name="Email" type="email" holder="Exemple@gmail.com" />
          <Input value = {telephone} onChange = {setTelephone} name="Telephone" type="tel" holder="01234567" />

          <div className="buttons-contact d-flex gap-4 pt-4">
            <Button
               name="Enregistrer" 
               type = {'submit'} 
               className="btn-enr" 
               />

            <Button 
                name="Annuler" 
                handleAction = {handleCancel}
                className="btn-annule" 
                type = "button"
                />

          </div>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
