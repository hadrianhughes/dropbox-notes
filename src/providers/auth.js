import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Auth from '../context/auth';

const AuthProvider = ({ children }) => {
  const [accessToken, setAccessToken] = useState(undefined);
  const [folder, setFolder] = useState(undefined);

  useEffect(() => {
    setAccessToken(localStorage.getItem('ACCESS_TOKEN'));
    setFolder(localStorage.getItem('FOLDER'));
  }, []);

  return (
    <Auth.Provider
      value={{
        accessToken,
        folder,
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

