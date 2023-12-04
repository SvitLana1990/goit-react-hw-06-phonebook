import { Item } from 'components/ContactItem/ContactItem';
import { ContactList } from './ContactList.styled';
import { useContacts } from 'hooks/useContacts';
import { useSelector } from 'react-redux/es/hooks/useSelector';

export const List = ({ contacts }) => {
  const { deleteContact } = useContacts();

  const filterValue = useSelector(state => state.contacts.filter);

  const filteredContacts = contacts.filter(contacts =>
    contacts.name.toLowerCase().includes(filterValue.toLowerCase())
  );

  return (
    <ContactList>
      {filteredContacts.map(contact => (
        <Item
          key={contact.id}
          id={contact.id}
          name={contact.name}
          number={contact.number}
          onClick={deleteContact}
        />
      ))}
    </ContactList>
  );
};
