import { Input } from './SearchBar.styled';
import { useDispatch, useSelector } from 'react-redux';
import { filterContacts } from '../../redux/contactsSlice';

export const SearchBar = () => {
  const dispatch = useDispatch();
  const filterValue = useSelector(state => state.contacts.filter);

  const handleFilterChange = value => {
    dispatch(filterContacts(value));
  };
  return (
    <Input
      type="text"
      name="name"
      value={filterValue}
      onChange={event => handleFilterChange(event.target.value)}
      placeholder="Find contacts by name"
      required
    />
  );
};
