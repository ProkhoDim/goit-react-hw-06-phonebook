import React from 'react';
import { connect } from 'react-redux';
import './global.css';

import ContactForm from './component/ContactForm';
import Filter from './component/Filter';
import ContactList from './component/ContactList';

const App = ({ contactList }) => {
  return (
    <>
      <section>
        <h2>Phonebook</h2>
        <ContactForm />
      </section>
      <section>
        {contactList.length > 0 && <h2>Contacts</h2>}
        {contactList.length > 3 && <Filter />}
        {contactList.length > 0 && <ContactList />}
      </section>
    </>
  );
};

const mapStateToProps = state => ({
  contactList: state.contacts.items,
});

export default connect(mapStateToProps)(App);
