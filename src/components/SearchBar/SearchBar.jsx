import { Input } from './SearchBar.styled';
import { useDispatch, useSelector } from 'react-redux';
import { filter } from '../../redux/store';

export const SearchBar = () => {
  const dispatch = useDispatch();
  const filterValue = useSelector(state => state.filter);

  const handleFilterChange = value => {
    dispatch(filter(value));
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
