import React from "react";
function ContactItem({ data: { id, name, address, email, phone } }) {
  return (
    <li key={id}>
      <p>
        {name} {address}
      </p>
      <p>
        <span>email icon</span>
        {email}
      </p>
      <p>
        <span>phone icon</span>
        {phone}
      </p>
      <button>trash</button>
    </li>
  );
}

export default ContactItem;
