/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, {useContext, useState} from "react";
import { ContactContext } from '../context/ContactContext';
import Input from "../components/input/Input";
import Button from "../components/button/Button";


function ContactForm() {
  
  const { addContact } = useContext(ContactContext);
  const [nom, setNom] = useState('');
  const [email, setEmail] = useState('');
  const [telephone, setTelephone] = useState('');

  return (
    <div className="d-none d-xxl-flex container-form contact-title  justify-content-center pt-5">
      <div className="pt-4">
        <h1 style={{fontSize : "45px"}}> Ajoutez un contact</h1>
        <form className="contact-form pt-5" >
          <Input name="Contact-name" type="text" holder="name" />
          <Input name="Email" type="email" holder="Exemple@gmail.com" />
          <Input name="Telephone" type="tel" holder="01234567" />
          <div className="buttons-contact d-flex gap-4 pt-4">
            <Button name="Enregistrer" className = "btn-enr"/>
            <Button name="Annuler" className = "btn-annule"/>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
