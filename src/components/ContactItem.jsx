import React from "react";
function ContactItem({
  data: { id, name, address, email, phone },
  deleteHandler,
}) {
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
      <button onClick={() => deleteHandler(id)}>trash</button>
    </li>
  );
}

export default ContactItem;
