import { useState } from "react";
import { ContactProvider } from "./context/ContactContext";
import ContactList from "./ContactContainer/ContactList";
import ContactForm from "./ContactContainer/ContactForm";
import Popdown from "./components/pop/Popdown";

function App() {
  const [drop, setDrop] = useState(false);
  const [value, setValue] = useState("");

  return (
    <>
      <ContactProvider>
        <div className="d-flex h-100">
          <ContactList setDrop={setDrop} setValue={setValue} />
          <Popdown drop={drop} value={value} setDrop={setDrop} />
          <ContactForm />
        </div>
      </ContactProvider>
    </>
  );
}

export default App;
