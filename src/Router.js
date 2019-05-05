import React from 'react';
import Auth from './context/auth';
import Button from './components/Button';

const Router = () => (
  <Auth.Consumer>
    {
      ({ accessToken, folder, dropbox }) => (
        accessToken && folder ?
          <p>Authorized</p>
          :
          <div>
            {accessToken}
            <Button label="Authorize" href={dropbox.getAuthenticationUrl('http://localhost:8080')} />
          </div>
      )
    }
  </Auth.Consumer>
);

export default Router;

