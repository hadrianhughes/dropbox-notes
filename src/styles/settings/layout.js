const BASE_UNIT = 10;

export const spacing = (...muls) => muls.map(mul => (BASE_UNIT * mul) + 'px').join(' ');

