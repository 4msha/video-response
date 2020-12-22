import React from 'react';
import { Router } from '@reach/router';
import { publicRoutes } from '../routes';
import {NavbarComponent} from "../../components/navbar";


export const PublicRoutes = () => {
  return (
    <>
      <Router>
        {publicRoutes.map(Route=>(<Route.Component path={Route.to} />))}
      </Router>
    </>
  );
};

