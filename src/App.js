import React, { Fragment } from 'react';
import Router from './Router';
import GlobalStyles from './styles/global';
import DropboxProvider from './providers/dropbox';
import StateProvider from './providers/state';

const App = () => (
  <Fragment>
    <GlobalStyles />
    <StateProvider>
      <DropboxProvider>
        <Router />
      </DropboxProvider>
    </StateProvider>
  </Fragment>
);

export default App;

