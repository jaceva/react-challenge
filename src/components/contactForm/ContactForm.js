import React, { useState, useEffect } from "react";

export const ContactForm = ({ addContact }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addContact(name, phone, email);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Contact Name:
        <input type="text" onChange={(e) => setName(e.target.value)} required />
      </label>
      <br />
      <label>
        Contact Phone (###-###-####):
        {/* {phoneValid ? "True" : "False"} */}
        <input
          type="text"
          onChange={(e) => setPhone(e.target.value)}
          required
          pattern="[1-9][0-9]{2}-[1-9][0-9]{2}-[0-9]{4}"
        />
      </label>
      <br />
      <label>
        Contact Email:
        {/* {emailValid ? "True" : "False"} */}
        <input
          type="text"
          onChange={(e) => setEmail(e.target.value)}
          required
          pattern="\S+[^.]@\S+\.\S+"
        />
      </label>
      <br />
      <input type="submit" value="Add Contact" />
    </form>
  );
};
