import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

const component = () => <h1>Setup</h1>;

const Router = () => (
  <BrowserRouter>
    <Route path='/setup' exact component={component} />
  </BrowserRouter>
);

export default Router;

