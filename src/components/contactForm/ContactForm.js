import React from "react";

export const ContactForm = ({ setName, setPhone, setEmail, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Contact Name:
        <input
          type="text"
          id="name"
          onChange={(e) => setName(e.target.value)}
          required
        />
      </label>
      <br />
      <label>
        Contact Phone (###-###-####):
        <input
          type="text"
          id="phone"
          onChange={(e) => setPhone(e.target.value)}
          required
          pattern="[1-9][0-9]{2}-[1-9][0-9]{2}-[0-9]{4}"
        />
      </label>
      <br />
      <label>
        Contact Email:
        <input
          type="text"
          id="email"
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
