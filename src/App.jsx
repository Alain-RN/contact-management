import { useState } from "react";
import { ContactProvider } from "./context/ContactContext";
import ContactList from "./ContactContainer/ContactList";
import ContactForm from "./ContactContainer/ContactForm";
import Popdown from "./components/pop/Popdown";

function App() {

  const [drop, setDrop] = useState(false);
  const [value, setValue] = useState("");
  const [open, setOpen] = useState("")

  return (
    <>
      <ContactProvider>
        <div className="container-all d-flex h-100 w-100">
          <ContactList setDrop = {setDrop} setValue = {setValue} open = {open} setOpen = {setOpen}/>
          <Popdown drop = {drop} value = {value} setDrop = {setDrop} />
          <ContactForm open = {open} setOpen = {setOpen}/>
        </div>
      </ContactProvider>
    </>
  );
}

export default App;
