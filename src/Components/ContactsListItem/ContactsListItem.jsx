import { useDispatch } from "react-redux";
import { removeContacts } from "../../redux/contacts/contactsOperations";
const ContactsListItem = ({ filter }) => {
  const dispatch = useDispatch();
  return (
    <>
      {filter.map((contact) => (
        <li key={contact.id}>
          <p>
            {contact.name}:{contact.number}
          </p>
          <button
            type="button"
            onClick={() => {
             dispatch(removeContacts(contact.id));
            }}
          >
            Delete
          </button>
        </li>
      ))}
    </>
  );
};

// ContactsListItem.prototypes = {
//   filter: PropTypes.string.isRequired,
//   removeName: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//       contact: PropTypes.string.isRequired,
//     })
//   ).isRequired,
// };

export default ContactsListItem;
