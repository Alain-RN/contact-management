import React, { useState } from "react";
import Input from "../components/input/Input";
import Button from "../components/button/Button";

function Updateform({ update, setUpdate }) {
  const [nom, setNom] = useState("");
  const [email, setEmail] = useState("");
  const [telephone, setTelephone] = useState("");
  const handleUpdate = () => {
    setUpdate(false);
  };
  return (
    <>
      {
        update && <div className={`layer-updateform`}>
          <form className="updateform">
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
                type={"button"}
                className={"edit btn-update-form"}
                name={"modifier"}
              ></Button>
              <Button
                handleAction={handleUpdate}
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
