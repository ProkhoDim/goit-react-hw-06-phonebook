import types from './types';

export const addContact = payload => ({
  type: types.ADD,
  payload,
});

export const deleteContact = payload => ({
  type: types.DELETE,
  payload,
});

export const filterContacts = payload => ({
  type: types.FILTER,
  payload,
});
