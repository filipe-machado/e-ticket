import React, { lazy } from 'react';
import {
  Switch,
  Route,
  BrowserRouter,
  Redirect,
} from 'react-router-dom';

// COMPONENTS
const PrivateRoute = lazy(() => import('../components/PrivateRoute'));

// PAGES
const Home = lazy(() => import('../pages/Home'));
const Queue = lazy(() => import('../pages/Queue'));
const Market = lazy(() => import('../pages/Market'));
const Error = lazy(() => import('../pages/Error'));

const Routes = (): React.ReactElement => (
  <BrowserRouter>
    <Switch>
      <Route path="/home">
        <Home />
      </Route>
      <PrivateRoute path="/queues" auth>
        <Queue />
      </PrivateRoute>
      <PrivateRoute path="/markets" auth>
        <Market />
      </PrivateRoute>
      <Route path="/" exact>
        <Redirect to="/home" />
      </Route>
      <Route path="*">
        <Error />
      </Route>
    </Switch>
  </BrowserRouter>
);

export default Routes;
