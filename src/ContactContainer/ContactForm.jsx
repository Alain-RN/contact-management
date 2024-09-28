import React from "react";
import Input from "../components/input/Input";
import Button from "../components/button/Button";

function ContactForm() {
  return (
    <div className="d-none d-xxl-flex container-form contact-title  justify-content-center pt-5">
      <div className="pt-4">
        <h1>Ajoutez un contact</h1>
        <div className="contact-form pt-5">
          <Input name="Contact-name" type="text" holder="name" />
          <Input name="Email" type="email" holder="Exemple@gmail.com" />
          <Input name="Telephone" type="tel" holder="01234567" />
          <div className="buttons-contact d-flex gap-4 pt-3">
            <Button name="Enregistrer" className = "btn-enr"/>
            <Button name="Annuler" className = "btn-annule"/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
