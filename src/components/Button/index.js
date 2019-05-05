import React from 'react';
import PropTypes from 'prop-types';
import { StyledLink } from './styles';

const Button = ({ label, href }) => (
  <StyledLink href={href}>{label}</StyledLink>
);

Button.propTypes = {
  label: PropTypes.string,
  href: PropTypes.string
};

Button.defaultProps = {
  label: '',
  href: ''
};

export default Button;

