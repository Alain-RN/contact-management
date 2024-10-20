/* eslint-disable no-unused-vars */
 
/* eslint-disable no-undef */

import Contact from "../model/contact.model.js"

const getAllContacts = async (req, res) => {
    try {
        const contacts = await Contact.find({})
        res.status(200).json(contacts)

    } catch (error) {
        res.status(500).json({ message: error.message })
    
    }
}
const getContact = async (req, res) => {
    try {
        const { id } = req.params
        const contact = await Contact.findById(id)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}
const updateContact = async (req, res) => {
    try {
        const { id } = req.params
        const updatedContact = await Contact.findByIdAndUpdate(id, req.body)
        res.status(200).json(updatedContact)
    
    } catch (error) {
        res.status(500).json({ message: error.message })
    
    }
}
const postContact = async (req, res) => {
    try {
        const contact = new Contact(req.body);
        await contact.save()
        res.status(200).json(contact)
    
    } catch (error) {
        res.status(500).json({message : error.message})

    }
}
const deleteContact = async (req, res) => {
    try {
        const { id } = req.params
        await Contact.findByIdAndDelete(id)
        res.status(200).json({ message: 'Contact deleted successfully' })
    
    } catch (error) {
        res.status(500).json({message : error.message})
    
    }
}
const control = [
    getAllContacts,
    postContact,
    deleteContact,
    updateContact,
    getContact
]
export default control

