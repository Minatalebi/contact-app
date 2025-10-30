import React from "react";
import styles from "./ContactItem.module.css";
function ContactItem({
  data: { id, name, address, email, phone },
  deleteHandler,
}) {
  return (
    <li className={styles.item}>
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
