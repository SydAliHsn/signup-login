import React from 'react';
import { useLocation, Navigate, useParams } from 'react-router-dom';

import Home from './Home';
import About from './About';
import Contact from './Contact';
import PageNotFound from './PageNotFound';

const AuthorizedOnly = props => {
  const accessedPath = useLocation().pathname;
  const page = useParams().page;

  if (!props.user.name)
    return <Navigate to={`/signup?continue=${accessedPath}`} />;

  if (page === 'home') {
    return <Home user={props.user} logoutHandler={props.logoutHandler} />;
  }

  if (page === 'contact') {
    return <Contact user={props.user} logoutHandler={props.logoutHandler} />;
  }

  if (page === 'about') {
    return <About logoutHandler={props.logoutHandler} />;
  }

  return <PageNotFound />;
};

export default AuthorizedOnly;
