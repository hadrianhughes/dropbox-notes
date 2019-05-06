import React from 'react';
import State from './context/state';
import Setup from './containers/setup';

const Router = () => (
  <State.Consumer>
    {
      ({ state }) => (
        state.accessToken && state.folder ?
          <p>AUTHORIZED</p>
          :
          <Setup />
      )
    }
  </State.Consumer>
);

export default Router;

