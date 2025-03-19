// Controls whick view is diplayed -- contact list or contact details 

import { useState } from "react";
import ContactList from "./components/ContactList";
import SelectedContact from "./components/SelectedContact";
import "./App.css"; 

export default function App() {
  // State to track which contact is selected (default is none)
  const [selectedContactId, setSelectedContactId] = useState(null);

  return (
    <>
      {selectedContactId 
        ? <SelectedContact selectedContactId={selectedContactId} setSelectedContactId={setSelectedContactId} />
        : <ContactList setSelectedContactId={setSelectedContactId} />
      }
    </>
  );
}
