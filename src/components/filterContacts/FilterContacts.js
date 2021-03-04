import React from 'react';
import PropTypes from 'prop-types';
import styles from './FilterContacts.module.css';

const FilterContacts = ({ value, onChange }) => (
  <>
    <h3 className={styles.text}>Find contacts by name:</h3>
    <label className={styles.label}>
      <input
        type="text"
        className={styles.input}
        placeholder=" "
        value={value}
        onChange={onChange}
      />
    </label>
  </>
);

FilterContacts.defaultProps = {
  value: '',
};

FilterContacts.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

export default FilterContacts;
