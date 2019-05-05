export const fonts = [
  { name: 'Fira Code', src: 'FiraCode-Regular' },
  { name: 'Fira Code', src: 'FiraCode-Bold', weight: 'bold' }
];

export const createFont = (name, src, weight) => `
  @font-face {
    font-family: ${name};
    src: url('/fonts/${src}.woff2') format('woff2');
    ${weight ? 'font-weight: ' + weight + ';' : ''}
  }
`;
