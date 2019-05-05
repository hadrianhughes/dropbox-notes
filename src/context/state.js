import { createContext } from 'react';

export const model = {
  accessToken: {
    type: 'string',
    persist: true,
  },
  folder: {
    type: 'string',
    persist: true,
  }
};

export const initialState = Object.keys(model).reduce((obj, key) => ({
  ...obj, ...{ [key]: model[key].initial }
}), {});

export default createContext(undefined);

