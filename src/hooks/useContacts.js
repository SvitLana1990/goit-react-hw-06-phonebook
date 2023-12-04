import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../redux/contactsSlice';
import { selectContacts } from '../redux/selectors';
import { toast } from 'react-hot-toast';

export const useContacts = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const addContact = contact => {
    const isExist = contacts.find(
      c => c.name.toLowerCase() === contact.name.toLowerCase()
    );

    if (isExist) {
      toast.error(`Contact with the name ${contact.name} already exists.`);
      return;
    }
    const id = nanoid();
    dispatch(actions.addContact({ ...contact, id }));
  };

  const deleteContact = id => {
    dispatch(actions.deleteContact(id));
  };

  return { contacts, addContact, deleteContact };
};
