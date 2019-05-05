import { createGlobalStyle } from 'styled-components';
import { colorDarkGrey } from './settings/colors';

export default createGlobalStyle`
  body {
    background-color: ${colorDarkGrey};
    margin: 0;
  }
`;

