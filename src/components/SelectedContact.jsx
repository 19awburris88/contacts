import { useState, useEffect } from "react";

export default function SelectedContact({ selectedContactId, setSelectedContactId }) {
  /**
   * State: contact
   * - Stores the details of the selected contact.
   * - Initially set to `null` because we need to fetch data from the API.
   */
  const [contact, setContact] = useState(null);

  useEffect(() => {
    async function fetchContact() {
      try {
        const response = await fetch(
          `https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`
        );
        const data = await response.json();
        console.log("Fetched contact:", data);
        setContact(data);
      } catch (error) {
        console.error("Error fetching contact:", error);
      }
    }

    if (selectedContactId) {
      fetchContact();
    }
  }, [selectedContactId]);

  if (!contact) {
    return <p>Loading contact details...</p>;
  }

  return (
    <div className="selected-contact">
      <h2>{contact.name}</h2>
      <p><strong>Email:</strong> {contact.email}</p>
      <p><strong>Phone:</strong> {contact.phone}</p>
      <p><strong>Username:</strong> {contact.username}</p>
      <p><strong>Website:</strong> {contact.website}</p>
      <p><strong>Company:</strong> {contact.company.name}</p>
      <p><strong>Address:</strong> {contact.address.street}, {contact.address.city}</p>
      
      <button onClick={() => setSelectedContactId(null)}>Back to Contact List</button>
    </div>
  );
}
