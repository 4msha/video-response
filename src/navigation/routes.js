import React from 'react';
import {WhatWeDo} from '../screens/whatWeDo';
import {DashBoard} from '../screens/dashboard';
import Home from "../screens/home/";
import {SignInPage} from '../screens/signin';
import {Prices} from "../screens/prices";
import {ContactUs} from "../screens/contact";

export const navbarList=[
  {
    to: '/',
    title: 'Home',
    icon: 'view-list',
    Component: () => <Home />,
  },
  {
    to: '/what-we-do',
    title: 'whatWeDo',
    icon: 'view-list',
    Component: () => <WhatWeDo />,
  },
  {
    to: '/contact-us',
    title: 'Contact-us',
    icon: 'view-list',
    Component: () => <ContactUs/>,
  },
  {
    to: '/pricing',
    title: 'Prices',
    icon: 'view-list',
    Component: () => <Prices />,
  },
  {
    to: '/dashboard',
    title: 'Dashboard',
    icon: 'home',
    Component: () => <DashBoard />,
  },
  {
    to:'/sign-in',
    title:'SignIn',
    icon:'signin',
    Component:()=> <SignInPage/>
  }
];

export const privateRoutes = [
  {
    to: '/dashboard',
    title: 'Dashboard',
    icon: 'home',
    Component: () => <DashBoard />,
  },
];

export const publicRoutes = [
  {
    to: '/',
    title: 'Home',
    icon: 'view-list',
    Component: () => <Home />,
  },
  {
    to: '/contact-us',
    title: 'Contact-us',
    icon: 'view-list',
    Component: () => <ContactUs/>,
  },
  {
    to: '/dashboard',
    title: 'Dashboard',
    icon: 'home',
    Component: () => <DashBoard />,
  },
  {
    to: '/what-we-do',
    title: 'whatWeDo',
    icon: 'view-list',
    Component: () => <WhatWeDo />,
  },
  {
    to: '/pricing',
    title: 'Prices',
    icon: 'view-list',
    Component: () => <Prices />,
  },
  {
    to:'/sign-in',
    title:'SignIn',
    icon:'signin',
    Component:()=> <SignInPage/>
  }
];