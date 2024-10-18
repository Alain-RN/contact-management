/* eslint-disable react/prop-types */
import React, { useContext, useEffect, useState } from 'react';
import SearchBarre from "../components/searchContactBarre/SearchBarre";
import List from "../components/list/List";
import Add from "../assets/add.png"
import { ContactContext } from '../context/ContactContext';


function ContactList(props) {

  const [ filteredContacts, setFilteredContacts] = useState([])
  const { contacts } = useContext(ContactContext);

  useEffect(()=> {
    setFilteredContacts(contacts)
    console.log(contacts)
  }, [contacts])  
  // console.log(contacts)
  const handleSearch = (query) => {
    if(query) {
      const result = contacts.filter(contact => 
        contact.nom.toLowerCase().includes(query.toLowerCase()) || 
        contact.email.toLowerCase().includes(query.toLowerCase()) || 
        contact.telephone.toLowerCase().includes(query.toLowerCase())
      )
      setFilteredContacts(result)
    }else {
      setFilteredContacts(contacts)
    }

  }


  return (
    <div className="w-100 container-list h-100 p-4 " >
      <div className="container p-md-3 p-0">
        {/* <h1>Contacts</h1> */}
        <div className="d-flex align-items-center mt-4 mb-4">

          <SearchBarre onSearch={handleSearch}/>

          <div
            onClick={()=> {props.setOpen("open")}}
            className="btn-add d-xxl-none d-flex align-items-center justify-content-center"
            >
            Ajouter
            <img src={Add}  className="add-contact"/>
          </div>
        </div>

        <List 
          filteredContacts={filteredContacts}
          setDrop={props.setDrop} 
          setValue={props.setIdvalue}  
          setUpdateContacte={props.setUpdateContacte}>
        </List>
        
      </div>
    </div>
  );
}

export default ContactList;
