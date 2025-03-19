// Displays the contact table, fetches data from API using useEffect 

import { useState, useEffect } from "react";
import ContactRow from "./ContactRow";
import "../app.css";

export default function ContactList({ setSelectedContactId }) {
  // Stores all contacts fetched from API
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    async function fetchContacts() {
      try {
        const response = await fetch("https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users");
        const data = await response.json();
        
        console.log("Loaded contacts:", data);
        setContacts(data); // Updating state with fetched data
      } catch (error) {
        console.log("Failed to load contacts.");
      }
    }

    fetchContacts();
  }, []);

  return (
    <table className="table">
      <thead>
        <tr>
          <th colSpan="3">Contacts</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Name</td>
          <td>Email</td>
          <td>Phone</td>
        </tr>
        {contacts.length > 0 ? (
          contacts.map((contact) => (
            <ContactRow key={contact.id} contact={contact} setSelectedContactId={setSelectedContactId} />
          ))
        ) : (
          <tr>
            <td colSpan="3">No contacts available</td>
          </tr>
        )}
      </tbody>
    </table>
  );
}
