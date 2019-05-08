import React from 'react';
import PropTypes from 'prop-types';
import { StyledLink, StyledButton } from './styles';

const Button = ({ className, label, href, onClick }) => (
  href ?
    <StyledLink className={className} href={href} onClick={onClick}>{label}</StyledLink>
    :
    <StyledButton className={className} onClick={onClick}>{label}</StyledButton>
);

Button.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string,
  href: PropTypes.string,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  className: '',
  label: '',
  href: '',
  onClick: () => {},
};

export default Button;

