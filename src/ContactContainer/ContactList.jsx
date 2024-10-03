/* eslint-disable react/prop-types */
import React, { useContext, useState } from 'react';
import SearchBarre from "../components/searchContactBarre/SearchBarre";
import List from "../components/list/List";
import Add from "../assets/add.png"


function ContactList(props) {



  return (
    <div className="w-100 container-list h-100 p-4 " >
      <div className="container p-md-3 p-0">
        {/* <h1>Contacts</h1> */}
        <div className="d-flex align-items-center mt-4 mb-4">
          <SearchBarre />
          <div
            onClick={()=> {props.setOpen("open")}}
            className="btn-add d-xxl-none d-flex align-items-center justify-content-center"
            >
            Ajouter
            <img src={Add}  className="add-contact"/>
          </div>
        </div>
        <List setDrop={props.setDrop} setValue={props.setValue}></List>
      </div>
    </div>
  );
}

export default ContactList;
