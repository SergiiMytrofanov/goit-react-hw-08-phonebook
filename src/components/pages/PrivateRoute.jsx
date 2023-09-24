import React from 'react';
import { Route } from 'react-router-dom';

const PrivateRoute = ({ component: Component, user, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        user ? <Component {...props} user={user} /> : window.location.replace("/login")
      }
    />
  );
};

export default PrivateRoute;
