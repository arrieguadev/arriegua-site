import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { HOME } from 'src/constants/routes';
import GlobalStyle from './styles/global';

import Home from 'src/pages/Home';

const Routes: React.SFC = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Route exact path={HOME} component={Home} />
    </BrowserRouter>
  );
};

export default Routes;
