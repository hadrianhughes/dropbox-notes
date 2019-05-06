import styled from 'styled-components';
import { colorGrey, colorWhite, colorBlack } from '../../styles/settings/colors';
import { spacing } from '../../styles/settings/layout';

export const StyledLink = styled.a`
  background-color: ${colorGrey};
  border-radius: 7px;
  color: ${colorWhite};
  cursor: pointer;
  display: inline-block;
  font-size: 18px;
  width: auto;
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

