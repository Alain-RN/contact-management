import { useState } from 'react'
import ContactList from './ContactContainer/ContactList'
import ContactForm from './ContactContainer/ContactForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="d-flex h-100 p-4">
        <ContactList />
        <ContactForm />
      </div>
    </>
  )
}

export default App
