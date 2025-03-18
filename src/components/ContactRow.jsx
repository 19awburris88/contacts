// This component is responsible for rendering a single contact row in the table
export default function ContactRow({ setSelectedContactId, contact }) {
    return (
      <tr
      /** 
       * - This triggers the app to switch from the contact list view to the selected contact view.
       **/
        onClick={() => {
          setSelectedContactId(contact.id);
        }}
        style={{ cursor: "pointer" }} // Adds a pointer cursor to indicate it's clickable
      >
        <td>{contact.name}</td>
        <td>{contact.email}</td>
        <td>{contact.phone}</td>
      </tr>
    );
  }
  