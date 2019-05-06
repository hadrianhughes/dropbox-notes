import React from 'react';
import PropTypes from 'prop-types';
import { StyledInput } from './styles';

const Input = ({ placeholder, value, onChange }) => (
  <StyledInput placeholder={placeholder} value={value} onChange={onChange} />
);

Input.propTypes = {
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func
};

Input.defaultProps = {
  placeholder: '',
  value: '',
  onChange: () => {}
};

export default Input;

