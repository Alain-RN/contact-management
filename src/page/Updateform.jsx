/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import React, { useState, useEffect, useContext } from "react";
import Input from "../components/input/Input";
import Button from "../components/button/Button";
import { ContactContext } from "../context/ContactContext";

function Updateform({ update, setUpdate, setUpdateContacte, updateContact, idvalue }) {

  const { maj, setReload, reload } = useContext(ContactContext)
  
  const [nom, setNom] = useState("");
  const [email, setEmail] = useState("");
  const [telephone, setTelephone] = useState("");
  const [id, setId] = useState("");

  useEffect(() => {
    if (updateContact) {
      setNom(updateContact.nom || "");
      setEmail(updateContact.email || "");
      setTelephone(updateContact.telephone || "");
      setId(idvalue)
    }
  }, [updateContact]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if(nom !== "" && telephone !=="" && email !== "" ){
      maj(id ,{
        nom : nom,
        email : email,
        telephone : telephone,
      })
      setReload(!reload)
      // maj(id)
      setUpdate(false)
    }

  }

  const handleCancel = () => {
    setUpdate(false);
    setUpdateContacte({
      id: "",
      nom: "",
      email: "",
      telephone: "",
    })
    // alert(id)
  };
  return (
    <>
      {
        update && <div className={`layer-updateform`}>
          <form className="updateform" onSubmit={handleSubmit}>
            <h1>Modifier le contact</h1>
            <Input
              value={nom}
              onChange={setNom}
              name="Contact-name"
              type="text"
              holder="name"
              //   classe = {""}
            />
            <Input
              value={email}
              onChange={setEmail}
              name="Email"
              type="email"
              holder="Exemple@gmail.com"
            />
            <Input
              value={telephone}
              onChange={setTelephone}
              name="Telephone"
              type="tel"
              holder="01234567"
            />
            <div className="btns-update-form">
              <Button
                handleAction={""}
                type={"submit"}
                className={"edit btn-update-form"}
                name={"modifier"}
              ></Button>

              <Button
                handleAction={handleCancel}
                type={"button"}
                className={"btn-annule btn-update-form"}
                name={"annuler"}
              ></Button>
            </div>
          </form>
        </div>
      }
    </>
  );
}

export default Updateform;
