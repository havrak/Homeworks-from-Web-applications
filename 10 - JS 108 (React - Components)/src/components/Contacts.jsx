import React from "react";
import Card from "./Card";
import contacts from "../contacts";

function loadContacts(){
	let contactArray = new Array(contacts.length);
	for (let i=0; i < contacts.length; i++){
		contactArray[i] = <Card src={contacts[i]} />;
	}
	return contactArray;
}

function Contacts() {
  return (
    <div class="contactArray">
      <h1>Kontakten</h1>
				{loadContacts()}
    </div>
  );
}

export default Contacts;
