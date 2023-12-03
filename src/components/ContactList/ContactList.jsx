import { Item } from 'components/ContactItem/ContactItem';
import { ContactList } from './ContactList.styled';
import { deleting } from 'redux/store';
import { useDispatch, useSelector } from 'react-redux';

export const List = ({ contacts }) => {
  const filterValue = useSelector(state => state.filter);
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filterValue.toLowerCase())
  );

  const dispatch = useDispatch();

  const handleDelete = id => {
    dispatch(deleting(id));
  };

  return (
    <ContactList>
      {filteredContacts.map(contact => (
        <Item
          key={contact.id}
          id={contact.id}
          name={contact.name}
          number={contact.number}
          onDelete={handleDelete}
        />
      ))}
    </ContactList>
  );
};
