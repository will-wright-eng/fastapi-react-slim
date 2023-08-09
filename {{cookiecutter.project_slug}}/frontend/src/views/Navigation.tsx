import React from 'react';
import { useStylesNav } from '../utils/style';
import { isAuthenticated } from '../utils/auth';

export const Navigation = () => {
  const classes = useStylesNav();
  return (
    <header>
    <div className={classes.nav}>
    <p>
      <a className={classes.link} href="/">
        Home
      </a> | 
      <a className={classes.link} href="/logout">
        Logout
      </a> | 
      <a className={classes.link} href="/bot">
        Bot
      </a>
    </p>
    </div>
    </header>
  );
};

export const NavigationNoAuth = () => {
  const classes = useStylesNav();
  return (
    <header>
    <div className={classes.nav}>
    <p>
      <a className={classes.link} href="/login">
        Login
      </a> | 
      <a className={classes.link} href="/signup">
        Sign Up
      </a>
    </p>
    </div>
    </header>
  );
};

export const renderNavigation = () => isAuthenticated() ? <Navigation /> : <NavigationNoAuth />;