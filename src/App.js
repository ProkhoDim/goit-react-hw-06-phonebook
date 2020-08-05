import React from 'react';
import './global.css';

import ContactForm from './component/ContactForm';
import Filter from './component/Filter';
import ContactList from './component/ContactList';
import { connect } from 'react-redux';

// const LOCAL_STOR_KEY = 'contacts';

//   componentDidMount() {
//     // if (this.getContacts() > 0) {
//     //   this.setState({ contacts: this.getContacts() });
//     // }
//   }

//   // componentDidUpdate(prevProps, prevState) {
//   //   if (prevState.contacts !== this.state.contacts) {
//   //     localStorage.setItem(
//   //       LOCAL_STOR_KEY,
//   //       JSON.stringify([...this.state.contacts]),
//   //     );
//   //   }
//   // }

//   getContacts = () => {
//     const data = localStorage.getItem(LOCAL_STOR_KEY);
//     return JSON.parse(data);
//   };

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
