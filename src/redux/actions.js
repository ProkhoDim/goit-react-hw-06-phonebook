export const addContact = payload => ({
  type: 'contactForm/addContact',
  //   payload: { name: 'John', number: '777-777-77', id: 'id' },
  payload,
});

export const deleteContact = payload => ({
  type: 'contactForm/deleteContact',
  payload,
});
