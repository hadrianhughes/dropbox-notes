import React from 'react';
import Auth from './context/auth';

const Router = () => (
  <Auth.Consumer>
    {
      (accessToken, folder) => {
        if (accessToken && folder) {
          return <h1>Authorized</h1>;
        }

        return <h1>Unauthorized</h1>;
      }
    }
  </Auth.Consumer>
);

export default Router;

