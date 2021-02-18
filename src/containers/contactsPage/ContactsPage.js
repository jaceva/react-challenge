import React, { useState, useEffect } from "react";

import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";

export const ContactsPage = ({ contacts, addContact }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [duplicate, setDuplicate] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    e.target[0].value = "";
    e.target[1].value = "";
    e.target[2].value = "";
    if (!duplicate) {
      addContact(name, phone, email);
      setName("");
      setPhone("");
      setEmail("");
    }
  };

  useEffect(() => {
    const nameIsDuplicate = () => {
      const found = contacts.find((contact) => contact.name === name);
      if (found !== undefined) {
        return true;
      }
      return false;
    };

    if (nameIsDuplicate()) {
      setDuplicate(true);
    } else {
      setDuplicate(false);
    }
  }, [name, contacts, duplicate]);

  return (
    <div>
      <h2>Add Contact</h2>
      {duplicate ? "Contact Name Already Exists" : ""}
      <ContactForm
        setName={setName}
        setPhone={setPhone}
        setEmail={setEmail}
        handleSubmit={handleSubmit}
      />
      <h2>Contacts</h2>
      <TileList tiles={contacts} />
    </div>
  );
};
