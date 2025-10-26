function Contacts() {
  return (
    <div>
      <div>
        <input type="text" name="name" placeholder="Name" />
        <input type="text" name="lastName" placeholder="Last Name" />
        <input type="email" name="email" placeholder="Email" />
        <input type="number" name="phone" placeholder="Phone" />
        <button> add contact</button>
      </div>
    </div>
  );
}

export default Contacts;
