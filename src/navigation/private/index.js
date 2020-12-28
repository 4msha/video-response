import React from 'react';
import { Router } from '@reach/router';
import { navbarList } from '../routes';
import {NavbarComponent} from "../../components/navbar";
export const PrivateRoutes = () => {
  return (
    <>
        {/*<NavbarComponent/>*/}
        <Router>
        {navbarList.map(Route=>(<Route.Component path={Route.to} />))}
        </Router>
    </>
  );
};

