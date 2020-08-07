import React, { Component } from 'react';
import { connect } from 'react-redux';
import styles from './ContactForm.module.css';

import actions from '../../redux/contacts/contacts-actions';
import Input from '../Input';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  addContactClick = e => {
    e.preventDefault();

    const { name, number } = this.state;
    const { contactList, onSubmit } = this.props;

    if (!name) {
      alert(`Please, enter a name!`);
      return;
    }

    if (!this.isContactInContactList(contactList, name)) {
      onSubmit({ name, number });
      this.formReset();
    }
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  formReset = () => {
    this.setState({ name: '', number: '' });
  };

  isContactInContactList = (contacts, submitName) => {
    const isNameInContacts = contacts.some(({ name }) => submitName === name);

    if (!isNameInContacts) return false;

    alert(`${submitName} is already in contacts`);
    return true;
  };

  render() {
    const { name, number } = this.state;

    return (
      <form onSubmit={this.addContactClick} className={styles.contactForm}>
        <Input
          name="name"
          value={name}
          text="name"
          onChange={this.handleChange}
        />
        <Input
          name="number"
          value={number}
          text="number"
          onChange={this.handleChange}
        />
        <button type="submit" className={styles.formBtn}>
          Add contact
        </button>
      </form>
    );
  }
}

const mapStateToProps = state => ({
  contactList: state.contacts.items,
});

const mapDispatchToProps = dispatch => ({
  onSubmit: payload => dispatch(actions.addContact(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
