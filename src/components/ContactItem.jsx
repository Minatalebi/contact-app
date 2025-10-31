import React from "react";
import styles from "./ContactItem.module.css";
import { FaTrash } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";

function ContactItem({
  data: { id, firstName, lastName, email, phone },
  deleteHandler,
}) {
  return (
    <li className={styles.item}>
      <p>
        {firstName} {lastName}
      </p>
      <p>
        <span>
          <MdEmail />
        </span>
        {email}
      </p>
      <p>
        <span>
          <FaPhoneAlt />
        </span>
        {phone}
      </p>
      <button onClick={() => deleteHandler(id)}>
        <FaTrash />
      </button>
      <button onClick={() => props.onEdit(contact)}>Edit</button>
    </li>
  );
}

export default ContactItem;
