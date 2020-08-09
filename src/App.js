import React from 'react';
import { connect } from 'react-redux';
import './theme/global.css';

import ContactForm from './component/ContactForm';
import Filter from './component/Filter';
import ContactList from './component/ContactList';

const App = ({ contactList, filter }) => {
  return (
    <div className="Container">
      <section className="ContactForm">
        <h2>Phonebook</h2>
        <ContactForm />
      </section>
      <section>
        {contactList.length > 0 && <h2>Contacts</h2>}
        {(contactList.length > 3 || filter) && <Filter />}
        {contactList.length > 0 && <ContactList />}
      </section>
    </div>
  );
};

const mapStateToProps = state => ({
  contactList: state.contacts.items,
  filter: state.contacts.filter,
});

export default connect(mapStateToProps)(App);
