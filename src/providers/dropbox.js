import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Dropbox } from 'dropbox';
import DropboxContext from '../context/dropbox';

const CLIENT_ID = 'yfko15m46urzkrj';

const DropboxProvider = ({ children }) => {
  const [dropbox, setDropbox] = useState(undefined);

  useEffect(() => {
    const dbx = new Dropbox({ clientId: CLIENT_ID });
    setDropbox(dbx);
  }, []);

  return (
    <DropboxContext.Provider value={dropbox}>
      {children} 
    </DropboxContext.Provider>
  );
};

DropboxProvider.propTypes = {
  children: PropTypes.node
};

DropboxProvider.defaultProps = {
  children: null
};

export default DropboxProvider;

