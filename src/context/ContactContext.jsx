/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';

export const ContactContext = createContext();

const PORT = 5000

export const ContactProvider = ({ children }) => {

  const [contacts, setContacts] = useState([]);
  const [contactById, setContactById] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:${PORT}/api/contact`);
        setContacts(response.data);
      } catch (error) {
        console.error("Erreur lors de la récupération des contacts :", error);
      }
    };

    fetchData();
  }, []);

  const addContact = async (contact) => {
    try {
      const response = await axios.post(`http://localhost:${PORT}/api/contact`, contact);
      setContacts((prevContacts) => [...prevContacts, response.data]);
    } catch (error) {
      console.error("Erreur lors de l'ajout du contact :", error);
    }
  };

  const deleteContact = async (id) => {
    try {
      await axios.delete(`http://localhost:${PORT}/api/contact/${id}`)
      setContacts(prevContacts => prevContacts.filter(contact => contact._id !== id));
    } catch (error) {
      console.error("Erreur lors de la suppression du contact :", error);
    }
  }

  const getContact = async (id) => {
    try {
      const response = await axios.get(`http://localhost:${PORT}/api/contact/${id}`)
      setContactById(response.data);
    } catch (error) {
      console.error("Erreur lors de la recuperation du contact :", error);
    }
  }
  return (
    <ContactContext.Provider value={{ contacts, addContact, deleteContact }}>
      {children}
    </ContactContext.Provider>
  );
};
