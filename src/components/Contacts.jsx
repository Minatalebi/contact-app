import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import inputs from "../constants/inputs";
import ContactsList from "./ContactsList";
import styles from "./Contacts.module.css";
function Contacts() {
  const [alert, setAlert] = useState("");
  const [contacts, setContacts] = useState([]);
  const [contact, setContact] = useState({
    id: "",
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  // آرایه مشخصات input ها
  // const inputs = [
  //   { name: "name", type: "text", placeholder: "Name" },
  //   { name: "email", type: "email", placeholder: "Email" },
  //   { name: "phone", type: "tel", placeholder: "Phone" },
  //   { name: "address", type: "text", placeholder: "Address" },
  // ];

  // یک Event Handler برای همه input ها
  const changeHandler = (e) => {
    const { name, value } = e.target;
    setContact((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddContact = (e) => {
    e.preventDefault();
    // بررسی پر بودن همه فیلدها
    // for (let key in contact) {
    //   if (!contact[key]) {
    //     alert("لطفاً همه فیلدها را پر کنید!");
    //     return;
    //   }
    // }
    if (!contact.name || !contact.address || !contact.email || !contact.phone) {
      setAlert("please");
      return;
    }
    setAlert();
    const newContact = { ...contact, id: uuidv4() };
    setContacts((prev) => [...prev, newContact]);
    setContact({ name: "", email: "", phone: "", address: "" });
  };
  const deleteHandler = (id) => {
    const newContacts = contacts.filter((contact) => contact.id !== id);
    setContacts(newContacts);
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleAddContact} className={styles.form}>
        {inputs.map((input, index) => (
          <input
            key={index}
            type={input.type}
            placeholder={input.placeholder}
            name={input.name}
            value={contact[input.name]}
            onChange={changeHandler}
          />
        ))}
        <button type="submit">Add Contact</button>
      </form>
      <div className={styles.alert}>{alert && <p>{alert}</p>}</div>
      <ContactsList contacts={contacts} deleteHandler={deleteHandler} />
    </div>
  );
}

export default Contacts;

// import { useState } from "react";
// import Contactlist from "./Contactlist";
// import inputs from "../constants/inputs";
// import { v4 as uuidv4 } from "uuid";

// function Contacts() {
//   const [alert, setAlert] = useState("");
//   const [contacts, setContacts] = useState([]);
//   const [contact, setContact] = useState({
//     id: "",
//     name: "",
//     lastName: "",
//     email: "",
//     phone: "",
//   });
//   const changeHandler = (event) => {
//     const name = event.target.name;
//     const value = event.target.value;
//     setContact((contact) => ({ ...contact, [name]: value }));
//   };
//   const addHandler = () => {
//     if (
//       !contact.name ||
//       !contact.lastName ||
//       !contact.email ||
//       !contact.phone
//     ) {
//       setAlert("please");
//       return;
//     }
//     setAlert();
//     const newContact = { ...contact, id: v4() };
//     setContacts((contacts) => [...contacts, newContact]);
//     setContact({
//       name: "",
//       lastName: "",
//       email: "",
//       phone: "",
//     });
//   };

//   return (
//     <div>
//       <div>
//         {inputs.map((input, index) => (
//           <input
//             key={index}
//             type={input.type}
//             placeholder={input.placeholder}
//             name={input.name}
//             value={contact[input.name]}
//             onChange={changeHandler}
//           />
//         ))}
//         ; <button onClick={addHandler}> add contact</button>
//       </div>
//       <div>{alert && <p>{alert}</p>}</div>
//       <Contactlist contacts={contacts} />
//     </div>
//   );
// }

// export default Contacts;
