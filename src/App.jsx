import { useState } from "react";
import { ContactProvider } from "./context/ContactContext";
import ContactList from "./ContactContainer/ContactList";
import ContactForm from "./ContactContainer/ContactForm";
import Popdown from "./components/pop/Popdown";
import Updateform from "./page/Updateform";

function App() {

  const [drop, setDrop] = useState(false);
  const [value, setValue] = useState("");
  const [open, setOpen] = useState("");
  const [update, setUpdate] = useState(false)


  return (
    <>
      <ContactProvider>
        <div className="container-all d-flex h-100 w-100">
          <Updateform update={update} setUpdate={setUpdate}></Updateform>
          <ContactList setDrop = {setDrop} setValue = {setValue} open = {open} setOpen = {setOpen}/>
          <Popdown
           drop = {drop} 
           value = {value} 
           setDrop = {setDrop}
           update={update}
           setUpdate={setUpdate}
           />
          <ContactForm open = {open} setOpen = {setOpen}/>
        </div>
      </ContactProvider>
    </>
  );
}

export default App;
