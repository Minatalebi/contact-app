import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import inputs from "../constants/inputs";
import ContactsList from "./ContactsList";
import styles from "./Contacts.module.css";
import SearchBox from "./SearchBox";
import { useEffect } from "react";
function Contacts() {
  const [alert, setAlert] = useState("");
  const [filteredContacts, setFilteredContacts] = useState([]);
  const [search, setSearch] = useState("");
  const [editingContact, setEditingContact] = useState(null);
  useEffect(() => {
    if (editingContact) {
      setContact(editingContact);
    }
  }, [editingContact]);

  // const [contacts, setContacts] = useState([]);
  const [contacts, setContacts] = useState([
    {
      id: 1,
      firstName: "Ali",
      lastName: "Ahmadi",
      email: "ali@gmail.com",
      phone: "1234567",
    },
    {
      id: 2,
      firstName: "Sara",
      lastName: "Moradi",
      email: "sara@yahoo.com",
      phone: "852147",
    },
  ]);

  const [contact, setContact] = useState({
    id: "",
    firstName: "",
    email: "",
    phone: "",
    lastName: "",
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
    if (
      !contact.firstName ||
      !contact.lastName ||
      !contact.email ||
      !contact.phone
    ) {
      setAlert("Please submit data");
      return;
    }
    setAlert();
    if (editingContact) {
      // آپدیت
      setContacts((prev) =>
        prev.map((c) => (c.id === editingContact.id ? { ...c, ...contact } : c))
      );
      setEditingContact(null);
      setContact({ firstName: "", email: "", phone: "", lastName: "" });
      return;
    }
    const newContact = { ...contact, id: uuidv4() };
    setContacts((prev) => [...prev, newContact]);
    setContact({ firstName: "", email: "", phone: "", lastName: "" });
  };
  const deleteHandler = (id) => {
    const newContacts = contacts.filter((contact) => contact.id !== id);
    setContacts(newContacts);
  };
  const searchHandler = () => {
    if (!search.trim()) {
      setFilteredContacts([]);
      return;
    }

    const filtered = contacts.filter(
      (contact) =>
        contact.firstName.toLowerCase().includes(search.toLowerCase()) ||
        contact.email.toLowerCase().includes(search.toLowerCase()) ||
        contact.lastName.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredContacts(filtered);
  };

  // const searchHandler = () => {
  //   if (search) {
  //     const contactSearch = contacts.filter((contact) =>
  //       contact.name.toLowerCase().includes(search)
  //     );
  //     setContacts(contactSearch);
  //   } else {
  //     setContacts(setCotacts);
  //   }
  // };

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
        {/* <button type="submit">Add Contact</button> */}
        <button type="submit">
          {editingContact ? "Update Contact" : "Add Contact"}
        </button>
      </form>
      <div className={styles.alert}>{alert && <p>{alert}</p>}</div>
      <SearchBox
        search={search}
        setSearch={setSearch}
        searchHandler={searchHandler}
      />
      {/* <ContactsList
        contacts={filteredContacts.length ? filteredContacts : contacts}
        deleteHandler={deleteHandler}
      /> */}
      <ContactsList
        contacts={filteredContacts.length ? filteredContacts : contacts}
        deleteHandler={deleteHandler}
        onEdit={(contact) => {
          setEditingContact(contact);
          setContact(contact); // مهم: فرم با اطلاعات مخاطب پر بشه
        }}
      />
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
