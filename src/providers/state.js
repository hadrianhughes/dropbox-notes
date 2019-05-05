import React, { useState } from 'react';
import PropTypes from 'prop-types';
import State, { model, initialState } from '../context/state';

const StateProvider = ({ children }) => {
  const [store, setStore] = useState(initialState);

  let state = { ...store };
  const setState = (key, value, type) => {
    if (typeof value === type || (type === 'array' && Array.isArray(value))) {
      const newState = {};
      newState[key] = value;
      state = { ...state, ...newState };
      setStore(state);
    } else {
      console.error(`Expected state value '${key}' to be of type '${type}' but received '${typeof value}'`);
    }
  };

  const actions = Object.keys(model).reduce((obj, key) => {
    // e.g. change accessToken to setAccessToken
    const actionName = `set${key.substr(0, 1).toUpperCase()}${key.substr(1)}`;
    const actionValue = v => setState(key, v, obj[key].type);
    return { ...obj, [actionName]: actionValue };
  }, {});

  return (
    <State.Provider
      value={{
        state: store,
        actions
      }}>
      {children}
    </State.Provider>
  );
};

StateProvider.propTypes = {
  children: PropTypes.node
};

StateProvider.defaultProps = {
  children: null
};

export default StateProvider;

