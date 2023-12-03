import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { devToolsEnhancer } from '@redux-devtools/extension';
import { nanoid } from 'nanoid';

export const adding = contact => {
  return {
    type: 'contacts/adding',
    payload: { ...contact, id: nanoid() },
  };
};
export const deleting = id => {
  return {
    type: 'contacts/deleting',
    payload: id,
  };
};
export const filter = filterValue => {
  return {
    type: 'contacts/filter',
    payload: filterValue,
  };
};

const initialState = {
  contacts: [],
  filter: '',
};
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'contacts/adding':
      return {
        ...state,
        contacts: [...state.contacts, action.payload],
      };
    case 'contacts/deleting':
      return {
        ...state,
        contacts: state.contacts.filter(
          contact => contact.id !== action.payload
        ),
      };
    case 'contacts/filter':
      return {
        ...state,
        filter: action.payload,
      };
    default:
      return state;
  }
};
const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const enhancer = devToolsEnhancer();
export const store = createStore(persistedReducer, enhancer);
export const persistor = persistStore(store);
