import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Dropbox } from 'dropbox';
import Auth from '../context/auth';

const AuthProvider = ({ children }) => {
  const [accessToken, setAccessToken] = useState(undefined);
  const [folder, setFolder] = useState(undefined);
  const [dropbox, setDropbox] = useState(undefined);

  const localAccessToken = localStorage.getItem('ACCESS_TOKEN');
  const localFolder = localStorage.getItem('FOLDER');

  if (!dropbox) {
    const dbx = new Dropbox({ clientId: 'yfko15m46urzkrj' });
    setDropbox(dbx);
  }

  useEffect(() => {
    if (localAccessToken && localFolder) {
      setAccessToken(localAccessToken);
      setFolder(localFolder);
    } else {
      const hashStrings = window.location.hash.substr(1).split('&');
      const hashJson = hashStrings.reduce((obj, s) => {
        const [key, value] = s.split('=');
        return {
          ...{ [key]: value },
          ...obj
        };
      }, {})

      if (hashJson.access_token) {
        localStorage.setItem('ACCESS_TOKEN', hashJson.access_token);
        setAccessToken(hashJson.access_token);
      }
    }
  }, []);

  return (
    <Auth.Provider
      value={{
        accessToken,
        folder,
        dropbox
      }}>
      {children}
    </Auth.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node,
};

AuthProvider.defaultProps = {
  children: null,
};

export default AuthProvider;

