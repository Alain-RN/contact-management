import { useState } from "react";
import { ContactProvider } from "./context/ContactContext";
import ContactList from "./ContactContainer/ContactList";
import ContactForm from "./ContactContainer/ContactForm";
import Popdown from "./components/pop/Popdown";
import Updateform from "./page/Updateform";

function App() {

  const [drop, setDrop] = useState(false);
  const [idvalue, setIdvalue] = useState("");
  const [open, setOpen] = useState("");
  const [update, setUpdate] = useState(false)
  const [updateContact, setUpdateContacte] = useState({
    id: "",
    nom: "",
    email: "",
    telephone: "",
  })

  return (
    <>
      <ContactProvider>
        <div className="container-all d-flex h-100 w-100">

          <Updateform 
            idvalue={idvalue}
            update={update} 
            setUpdate={setUpdate} 
            updateContact={updateContact}
            setUpdateContacte = {setUpdateContacte}
            ></Updateform>

          <ContactList 
            setDrop = {setDrop} 
            setIdvalue = {setIdvalue} 
            open = {open} 
            setOpen = {setOpen}
            setUpdateContacte={setUpdateContacte}/>

          <Popdown
            drop = {drop}
            setUpdateContacte = {setUpdateContacte}
            idvalue = {idvalue} 
            setDrop = {setDrop}
            update={update}
            setUpdate={setUpdate}
            updateContact = {updateContact}
           />

          <ContactForm open = {open} setOpen = {setOpen}/>

        </div>
      </ContactProvider>
    </>
  );
}

export default App;
