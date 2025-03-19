// Displays single contact row, handles clicking a contact to select it 

xport default function ContactRow({ setSelectedContactId, contact }) {
  return (
    <tr
      onClick={() => setSelectedContactId(contact.id)}
      style={{ cursor: "pointer" }} // Clickable row
    >
      <td>{contact.name}</td>
      <td>{contact.email}</td>
      <td>{contact.phone}</td>
    </tr>
  );
}
