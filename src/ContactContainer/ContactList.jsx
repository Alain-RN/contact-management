import React from "react";
import SearchBarre from "../components/searchContactBarre/SearchBarre";
import List from "../components/list/List";

function ContactList() {

  return (
    <div className="w-100 container-list h-100 p-5 " >
      <div className="p-3">
        {/* <h1>Contacts</h1> */}
        <SearchBarre />
        <List></List>
      </div>
    </div>
  );
}

export default ContactList;
