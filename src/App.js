import React from 'react';
import Router from './Router';
import GlobalStyles from './styles/global';
import AuthProvider from './providers/auth';

const App = () => (
  <div>
    <GlobalStyles />
    <AuthProvider>
      <Router />
    </AuthProvider>
  </div>
);

export default App;

