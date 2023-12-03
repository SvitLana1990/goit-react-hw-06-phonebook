import { GlobalStyle } from '../GlobalStyle';
import { SearchBar } from './SearchBar/SearchBar';
import { List } from './ContactList/ContactList';
import { ContactForm } from './Form/Form';
import { Container, Title, TitleContacts } from './App.styled';
import { useSelector } from 'react-redux';

export const App = () => {
  const contactsState = useSelector(state => state.contacts);
  return (
    <Container>
      <Title>Phonebook</Title>
      <ContactForm />
      <TitleContacts>Contacts</TitleContacts>
      <SearchBar />
      {contactsState.length > 0 && <List contacts={contactsState} />}
      <GlobalStyle />
    </Container>
  );
};
