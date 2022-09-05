import React from 'react';
import { Navigate, Route } from 'react-router-dom';

const PrivateRoute = ({children, ...rest}) => {
    return (
        <Route
      {...rest}
      render={({ location }) =>
        auth.user ? (
          children
        ) : (
          <Navigate
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
    );
};

export default PrivateRoute;