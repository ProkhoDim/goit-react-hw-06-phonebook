import { createAction } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

export default {
  addContact: createAction('contacts/addContact', ({ name, number }) => ({
    payload: { name, number, id: uuidv4() },
  })),
  deleteContact: createAction('contacts/deleteContact'),
  filterContacts: createAction('contacts/filter'),
};
