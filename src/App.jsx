import { useState } from 'react'
import ContactList from './ContactContainer/ContactList'
import ContactForm from './ContactContainer/ContactForm'

function App() {

  return (
    <>
      <div className="d-flex h-100">
        <ContactList />
        <ContactForm />
      </div>
    </>
  )
}

export default App
