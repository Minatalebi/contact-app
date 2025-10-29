import React from "react";

function Contactlist() {
  return (
    <div>
      <h3>Contactlist</h3>
      <ul>
        {Contacts.map((contact) => (
          <li key={contact.id}>{contact.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Contactlist;
