import React, { FC } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { useHistory } from 'react-router';

import { Home, Login, SignUp, PrivateRoute, Bot, Protected } from './views';
import { Admin } from './admin';
import { logout } from './utils/auth';
import { useStylesRoutes } from './utils/style';

export const Routes: FC = () => {
  const classes = useStylesRoutes();
  const history = useHistory();

  const handleLogout = () => {
    logout();
    history.push('/');
  };

  return (
    <div className={classes.app}>
      <Switch>
        <Route path="/admin">
          <Admin />
        </Route>
        <Route path="/login" component={Login} />
        <Route path="/signup" component={SignUp} />
        <Route
          path="/logout"
          render={() => {
            handleLogout();
            return null;
          }}
        />
        <PrivateRoute path="/protected" component={Protected} />
        <Route exact path="/" component={Home} />
        <PrivateRoute path="/bot" component={Bot} />
        <Redirect to="/" />
      </Switch>
      <footer>
        <p>&copy; 2021 Webpage Dashboard. All rights reserved.</p>
      </footer>
    </div>
  );
};
