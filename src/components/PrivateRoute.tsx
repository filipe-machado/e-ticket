import React from 'react';
import { Route, Redirect } from 'react-router-dom';

interface PrivateRouteProps {
  auth: boolean,
  path: string,
  children: React.ReactChild,
  exact?: boolean,
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({
  auth, path, exact, children,
}: PrivateRouteProps) => (
  auth ? <Route path={path} exact={exact}>{children}</Route> : <Redirect to="/" />
);
PrivateRoute.defaultProps = {
  exact: false,
};

export default PrivateRoute;
