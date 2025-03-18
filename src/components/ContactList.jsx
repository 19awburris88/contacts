import { useState, useEffect } from "react";
import ContactRow from "./ContactRow";

export default function ContactList({ setSelectedContactId }) {
  /**
   * State: contacts
   * - Stores the list of contacts fetched from the API.
   * - Initially set to an empty array because data is loaded asynchronously.
   */
  const [contacts, setContacts] = useState([]);

   /**
   * useEffect Hook:
   * - Fetches contact data when the component is mounted.
   * - Runs only once due to the empty dependency array `[]` (this prevents infinite fetching).
   */
  useEffect(() => {
    async function fetchContacts() {
      try {
        const response = await fetch(
          "https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users"
        );
        const data = await response.json();
        console.log("Fetched contacts:", data);

        setContacts(data); // Update state with fetched contacts
      } catch (error) {
        console.error("Error fetching contacts:", error);
      }
    }

    fetchContacts();
  }, []);

  return (
    <table>
      <thead>
        <tr>
          <th colSpan="3">Contact List</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Name</td>
          <td>Email</td>
          <td>Phone</td>
        </tr>
        {contacts.map((contact) => (
          <ContactRow 
            key={contact.id} // Unique key for React's rendering optimization
            contact={contact} 
            setSelectedContactId={setSelectedContactId}  // Pass function to handle selection
            />
          />
        ))}
      </tbody>
    </table>
  );
}
