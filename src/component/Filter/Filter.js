import React from 'react';
import PropTypes from 'prop-types';
import { filterContacts } from '../../redux/actions';
import { connect } from 'react-redux';
import Input from '../Input';

const Filter = ({ filter, onChange }) => {
  return (
    <>
      <Input
        name="filter"
        text="find contacts by name"
        value={filter}
        onChange={onChange}
      />
    </>
  );
};

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  filter: state.contacts.filter,
});

const mapDispatchToProps = dispatch => ({
  onChange: e => dispatch(filterContacts(e.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
