import styled, { css } from 'styled-components';
import { colorGrey, colorWhite, colorBlack } from '../../styles/settings/colors';
import { spacing } from '../../styles/settings/layout';

const buttonStyles = css`
  background-color: ${colorGrey};
  border: 0;
  border-radius: 7px;
  color: ${colorWhite};
  cursor: pointer;
  display: inline-block;
  font-size: 18px;
  padding: ${spacing(1.5, 3)};
  position: relative;
  text-align: center;
  text-decoration: none;

  &:active {
    background-color: ${colorBlack};
  }

  &::before {
    background-color: ${colorBlack};
    border-radius: 7px;
    content: '';
    height: 100%;
    left: 0;
    position: absolute;
    top: 7px;
    width: 100%;
    z-index: -1;
  }
`;

export const StyledLink = styled.a`${buttonStyles}`;
export const StyledButton = styled.button`${buttonStyles}`;

