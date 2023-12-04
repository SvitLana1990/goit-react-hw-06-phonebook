import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const initialState = {
  contacts: [],
  filter: '',
};

export const contactsSlice = createSlice({
  initialState,
  name: 'contacts',
  reducers: {
    addContact(state, action) {
      state.contacts.push(action.payload);
    },
    deleteContact(state, action) {
      state.contacts = state.contacts.filter(
        contact => contact.id !== action.payload
      );
    },
    filterContacts(state, action) {
      state.filter = action.payload;
    },
  },
});

const persisted = persistReducer(
  { key: 'contacts', storage, whitelist: ['contacts'] },
  contactsSlice.reducer
);

export default persisted;

export const { addContact, deleteContact, filterContacts } =
  contactsSlice.actions;
