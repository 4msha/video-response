import React from 'react';
import { Router } from '@reach/router';
import { privateRoutes } from '../routes';
export const PrivateRoutes = () => {
  return (
    <>
        <Router>
        {privateRoutes.map(Route=>(<Route.Component path={Route.to} />))}
        </Router>
    </>
  );
};

