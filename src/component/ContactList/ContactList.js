import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import styles from './ContactList.module.css';
import actions from '../../redux/contacts/contacts-actions';

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ul className={styles.contactList}>
      {contacts.map(({ name, id, number }) => (
        <li key={id} className={styles.contactItem}>
          {name}: <span className={styles.contactText}>{number}</span>
          <button
            type="button"
            name="delete"
            onClick={() => onDeleteContact(id)}
            className={styles.deleteBtn}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

const contactsFilter = (contactsList, filter) => {
  const normilizedFilter = filter.toLowerCase();
  return contactsList.filter(({ name }) =>
    name.toLowerCase().includes(normilizedFilter),
  );
};

const mapStateToProps = ({ contacts: { items, filter } }) => ({
  contacts: contactsFilter(items, filter),
});

const mapDispatchToProps = dispatch => {
  return {
    onDeleteContact: payload => dispatch(actions.deleteContact(payload)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
