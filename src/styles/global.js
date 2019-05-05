import { createGlobalStyle } from 'styled-components';
import { colorBlack, colorWhite } from './settings/colors';
import { fonts, createFont } from './fonts';

const fontDeclarations = fonts.map(f => createFont(...Object.values(f)));

export default createGlobalStyle`
  body {
    background-color: ${colorWhite};
    color: ${colorBlack};
    font-family: 'Fira Code';
    font-size: 16px;
    margin: 0;
  }

  ${fontDeclarations.join('\n')};

  h1 {
    text-align: center;
  }
`;

