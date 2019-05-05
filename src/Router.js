import React from 'react';
import State from './context/state';

const Router = () => (
  <State.Consumer>
    {
      ({ state }) => (
        state.accessToken && state.folder ?
          <p>AUTHORIZED</p>
          :
          <div>
            TO AUTHORIZE
          </div>
      )
    }
  </State.Consumer>
);

export default Router;

