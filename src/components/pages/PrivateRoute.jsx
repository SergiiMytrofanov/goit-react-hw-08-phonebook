import React from 'react';
import { useSelector } from 'react-redux';
import { Route } from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const user = useSelector((state) => state.auth.user);

  return (
    <Route
      {...rest}
      render={(props) =>
        user ? <Component {...props} /> : window.location.replace("/login")
      }
    />
  );
};

export default PrivateRoute;
