import React from 'react';
import PropTypes from 'prop-types';
import { StyledInput } from './styles';

const Input = ({ className, placeholder, value, onChange }) => (
  <StyledInput
    className={className}
    placeholder={placeholder}
    value={value}
    onChange={onChange} />
);

Input.propTypes = {
  className: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func
};

Input.defaultProps = {
  className: '',
  placeholder: '',
  value: '',
  onChange: () => {}
};

export default Input;

