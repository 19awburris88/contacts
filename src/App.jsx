import { useState } from "react";
import ContactList from "./components/ContactList"; // Component to display all contacts in a table
import SelectedContact from "./components/SelectedContact"; // Component to display a selected contact's details
import "./App.css"; // Import CSS file for styling

export default function App() {
  /**
   * State: selectedContactId
   * - This keeps track of which contact is selected.
   * - When a contact's ID is set, we show the selected contact's details.
   */
  const [selectedContactId, setSelectedContactId] = useState(null);

  return (
    <>
      {selectedContactId ? (
        <SelectedContact
          selectedContactId={selectedContactId}
          setSelectedContactId={setSelectedContactId}
        />
      ) : (
        <ContactList setSelectedContactId={setSelectedContactId} />
      )}
    </>
  );
}
