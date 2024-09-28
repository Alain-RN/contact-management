import React from "react";
import SearchBarre from "../components/searchContactBarre/SearchBarre";
import List from "../components/list/List";
import Add from "../assets/add.png"

function ContactList() {

  return (
    <div className="w-100 container-list h-100 p-5 " >
      <div className="container p-md-3 p-0">
        {/* <h1>Contacts</h1> */}
        <div className=" d-flex align-items-center justify-content-betwen">
          <SearchBarre />
          <div className="mb-3 mt-2 btn-add d-xxl-none d-flex align-items-center justify-content-center">
            Ajouter
            <img src={Add}  className="add-contact" />
          </div>
        </div>
        <List></List>
      </div>
    </div>
  );
}

export default ContactList;
