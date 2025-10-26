import { useState } from "react";

function Contacts() {
  const [contact, setContact] = useState({
    name: "",
    lastName: "",
    email: "",
    phone: "",
  });
  const changeHandeler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setContact((contact) => ({ ...contact, [name]: value }));
  };
  const addHandeler = () => {};
  return (
    <div>
      <div>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={contact.name}
          onChange={changeHandeler}
        />
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={contact.lastName}
          onChange={changeHandeler}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={contact.email}
          onChange={changeHandeler}
        />
        <input
          type="number"
          name="phone"
          placeholder="Phone"
          value={contact.phone}
          onChange={changeHandeler}
        />
        <button onClick={addHandeler}> add contact</button>
      </div>
    </div>
  );
}

export default Contacts;
