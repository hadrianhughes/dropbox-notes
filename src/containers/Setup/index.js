import React, { useContext, useState } from 'react';
import ctxState from '../../context/state';
import Setup from '../../components/Setup';

const loadProperty = (obj, prop, setter) => {
  if (!obj[prop]) {
    const localValue = localStorage.getItem(prop);
    if (localValue) setter(localValue);
  }
};

const SetupContainer = () => {
  const { state, actions } = useContext(ctxState);
  const [folderInput, setFolderInput] = useState('');

  loadProperty(state, 'accessToken', actions.setAccessToken);
  loadProperty(state, 'folder', actions.setFolder);

  const { accessToken, folder } = state;

  let stage = 1;
  if (accessToken) {
    stage = 2;
  } else {
    const hashStrings = window.location.hash.substr(1).split('&');
    const hashJson = hashStrings.reduce((obj, hash) => {
      const [key, value] = hash.split('=');
      return { ...obj, [key]: value };
    }, {});

    if (hashJson.access_token) {
      localStorage.setItem('accessToken', hashJson.access_token);
    }
  }

  if (folder) stage = 3;

  return (
    <Setup
      stage={stage}
      authenticationUrl={accessToken}
      folderInput={folderInput}
      onFolderChange={e => setFolderInput(e.target.value)} />
  );
};

export default SetupContainer;
