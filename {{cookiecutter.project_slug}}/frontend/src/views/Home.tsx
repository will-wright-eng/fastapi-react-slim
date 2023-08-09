import React, { FC, useState } from 'react';

import { getMessage } from '../utils/api';
import { isAuthenticated } from '../utils/auth';
import { useStylesHome } from '../utils/style';

import { Navigation, NavigationNoAuth } from './Navigation';

export const Home: FC = () => {
  const [message, setMessage] = useState<string>('');
  const [error, setError] = useState<string>('');
  const classes = useStylesHome();

  const queryBackend = async () => {
    try {
      const message = await getMessage();
      setMessage(message);
    } catch (err) {
      setError(String(err));
    }
  };

  return (
    <>
      {isAuthenticated() ? (
        <Navigation />
      ) : (
        <NavigationNoAuth />
      )}

      {!message && !error && (
        <>
          <div className={classes.container}>
          <div className={classes.div_child}>
              <button className={classes.link} onClick={() => queryBackend()}>
                Click to make request to backend
              </button>
          </div>
          </div>
        </>
      )}
      {message && (
        <p>
          <code>{message}</code>
        </p>
      )}
      {error && (
        <p>
          Error: <code>{error}</code>
        </p>
      )}
    </>
  );
};

