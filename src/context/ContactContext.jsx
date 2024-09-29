/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';

export const ContactContext = createContext();


export const ContactProvider = ({ children }) => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/contact`);
        setContacts(response.data);
      } catch (error) {
        console.error("Erreur lors de la récupération des contacts :", error);
      }
    };

    fetchData();
  }, []);

  const addContact = async (contact) => {
    try {
      const response = await axios.post(`http://localhost:5000/api/contact`, contact);
      setContacts((prevContacts) => [...prevContacts, response.data]);
    } catch (error) {
      console.error("Erreur lors de l'ajout du contact :", error);
    }
  };

  return (
    <ContactContext.Provider value={{ contacts, addContact }}>
      {children}
    </ContactContext.Provider>
  );
};
