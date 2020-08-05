export const addContact = payload => ({
  type: 'contacts/addContact',
  //   payload: { name: 'John', number: '777-777-77', id: 'id' },
  payload,
});

export const deleteContact = payload => ({
  type: 'contacts/deleteContact',
  payload,
});

export const filterContacts = payload => ({
  type: 'contacts/filter',
  payload,
});
