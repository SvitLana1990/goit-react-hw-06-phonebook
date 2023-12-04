import { GlobalStyle } from '../GlobalStyle';
import { SearchBar } from './SearchBar/SearchBar';
import { List } from './ContactList/ContactList';
import { ContactForm } from './Form/Form';
import { Container, Title, TitleContacts } from './App.styled';
import { useContacts } from 'hooks/useContacts';
import { Toaster } from 'react-hot-toast';

export const App = () => {
  const { contacts } = useContacts();
  return (
    <Container>
      <Title>Phonebook</Title>
      <ContactForm />
      <TitleContacts>Contacts</TitleContacts>
      <SearchBar />
      {contacts.length > 0 ? (
        <List contacts={contacts} />
      ) : (
        <p>No contacts available</p>
      )}
      <Toaster />
      <GlobalStyle />
    </Container>
  );
};
