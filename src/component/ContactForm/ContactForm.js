import React, { Component } from 'react';
import styles from './ContactForm.module.css';
import { v4 as uuidv4 } from 'uuid';
// import { connect } from 'react-redux';
// import { addContact } from '../../redux/actions';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };
  componentDidMount() {
    console.log('contact form props', this.props);
  }

  contactId = uuidv4;

  addContactClick = e => {
    e.preventDefault();

    const { name, number } = this.state;

    if (!name) {
      alert(`Please, enter a name!`);
      return;
    }

    this.props.onSubmit({ name, number, id: this.contactId() });
    // this.props.onSubmit();
    this.formReset();
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  formReset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;
    return (
      <form onSubmit={this.addContactClick} className={styles.contactForm}>
        <label className={styles.formLabel}>
          Name
          <input
            type="input"
            name="name"
            onChange={this.handleChange}
            value={name}
            className={styles.formInput}
          />
        </label>

        <label className={styles.formLabel}>
          Phone number
          <input
            type="input"
            name="number"
            onChange={this.handleChange}
            value={number}
            className={styles.formInput}
          />
        </label>

        <button type="submit" className={styles.formBtn}>
          Add contact
        </button>
      </form>
    );
  }
}

// const mapDispatchToProps = dispatch => {
//   return {
//     onSubmit: payload => dispatch(addContact(payload)),
//   };
// };

// export default connect(null, mapDispatchToProps)(ContactForm);

export default ContactForm;
