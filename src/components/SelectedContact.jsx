// Displays details of delescted contact 

import { useState, useEffect } from "react";

export default function SelectedContact({ selectedContactId, setSelectedContactId }) {
  const [contact, setContact] = useState(null);

  useEffect(() => {
    if (!selectedContactId) return;

    async function fetchContact() {
      try {
        const response = await fetch(`https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`);
        const data = await response.json();

        console.log("Fetched contact:", data);
        setContact(data);
      } catch (error) {
        console.log("Could not fetch contact.");
      }
    }

    fetchContact();
  }, [selectedContactId]);

  if (!contact) {
    return <p>Loading...</p>;
  }

  return (
    <div className="selected-contact">
      <h2>{contact.name || "No Name"}</h2>
      <p><strong>Email:</strong> {contact.email || "N/A"}</p>
      <p><strong>Phone:</strong> {contact.phone || "N/A"}</p>
      <p><strong>Username:</strong> {contact.username || "N/A"}</p>
      <p><strong>Website:</strong> {contact.website || "N/A"}</p>
      {contact.company && <p><strong>Company:</strong> {contact.company.name}</p>}
      {contact.address && (
        <p>
          <strong>Address:</strong> {contact.address.street}, {contact.address.city}
        </p>
      )}

      <button onClick={() => setSelectedContactId(null)}>Back</button>
    </div>
  );
}
