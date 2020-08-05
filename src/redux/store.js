import { createStore, combineReducers } from 'redux';
import items from '';
import filter from '';

const initialState = {
  contacts: {
    items: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  },
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case 'contacts/addContact':
      return {
        contacts: {
          items: [...state.contacts.items, payload],
          filter: state.contacts.filter,
        },
      };
    case 'contacts/deleteContact':
      return {
        contacts: {
          items: state.contacts.items.filter(({ id }) => id !== payload),
          filter: state.contacts.filter,
        },
      };
    case 'contacts/filter':
      console.log('payload', payload);
      console.log('state', state);
      return {
        contacts: {
          items: state.contacts.items,
          filter: payload,
        },
      };

    default:
      return state;
  }
};

const rootReducer = combineReducers({
  items,
  filter,
});

const store = createStore(rootReducer);

export default store;
