import React from "react";
import SearchBarre from "../components/searchContactBarre/SearchBarre";

function ContactList() {
  return (
    <div className="container-list list-title h-100">
      <div>
        <h1>Contacts</h1>
        <SearchBarre />
      </div>
    </div>
  );
}

export default ContactList;
