import { useState } from 'react'
import ContactList from './ContactContainer/ContactList'
import ContactForm from './ContactContainer/ContactForm'
import Popdown from './components/pop/Popdown'

function App() {

  return (
    <>
      <div className="d-flex h-100">
        <ContactList />
        <Popdown></Popdown>
        <ContactForm />
      </div>
    </>
  )
}

export default App
