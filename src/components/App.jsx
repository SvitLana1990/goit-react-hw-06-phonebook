import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { GlobalStyle } from '../GlobalStyle';
import { SearchBar } from './SearchBar/SearchBar';
import { List } from './ContactList/ContactList';
import { ContactForm } from './Form/Form';
import { Container, Title, TitleContacts } from './App.styled';

const storageKey = 'contacts';
const savedContacts = window.localStorage.getItem(storageKey);
export const App = () => {
  const [contacts, setContacts] = useState(JSON.parse(savedContacts) || []);
  const [filter, setFilter] = useState('');

  const addItem = newContact => {
    if (
      contacts.some(
        contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
      )
    ) {
      alert(`${newContact.name} is already in contacts`);
    } else {
      setContacts(prevState => [...prevState, { ...newContact, id: nanoid() }]);
    }
  };

  const updateFilter = newFilter => {
    setFilter(newFilter);
  };
  const filteredItem = contacts.filter(item => {
    const hasName = item.name.toLowerCase().includes(filter.toLowerCase());
    return hasName;
  });

  const deleteItem = itemId => {
    setContacts(prevContacts =>
      prevContacts.filter(item => item.id !== itemId)
    );
  };

  useEffect(() => {
    window.localStorage.setItem(storageKey, JSON.stringify(contacts));
  }, [contacts]);

  return (
    <Container>
      <Title>Phonebook</Title>
      <ContactForm onAdd={addItem} />
      <TitleContacts>Contacts</TitleContacts>
      <SearchBar filter={filter} onUpdateFilter={updateFilter} />
      {filteredItem.length > 0 && (
        <List contacts={filteredItem} onDelete={deleteItem} />
      )}
      <GlobalStyle />
    </Container>
  );
};
