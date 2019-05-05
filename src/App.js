import React, { Fragment } from 'react';
import Router from './Router';
import GlobalStyles from './styles/global';
import AuthProvider from './providers/auth';

const App = () => (
  <Fragment>
    <GlobalStyles />
    <AuthProvider>
      <Router />
    </AuthProvider>
  </Fragment>
);

export default App;

