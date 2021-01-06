import React, { lazy } from 'react';
import {
  Switch,
  Route,
  BrowserRouter,
} from 'react-router-dom';

// COMPONENTS
const PrivateRoute = lazy(() => import('../components/PrivateRoute'));
const Layout = lazy(() => import('../pages/layout/Layout'));

// PAGES
const Home = lazy(() => import('../pages/Home'));
const Ticket = lazy(() => import('../pages/Ticket'));
const Queue = lazy(() => import('../pages/Queue'));
const Error = lazy(() => import('../pages/Error'));

const Routes = (): React.ReactElement => (
  <BrowserRouter>
    <Switch>
      <Route path="/home">
        <Layout title="bem vindo">
          <Home />
        </Layout>
      </Route>
      <PrivateRoute path="/ticket" auth={false}>
        <Layout title="senha">
          <Ticket
            value="123213"
            date="06/01/2021 - 00:00:00"
            validate="06/01/2021 - 23:59:59"
          />
        </Layout>
      </PrivateRoute>
      <PrivateRoute path="/queue" auth>
        <Layout title="filas">
          <Queue />
        </Layout>
      </PrivateRoute>
      <Route path="*">
        <Error />
      </Route>
    </Switch>
  </BrowserRouter>
);

export default Routes;
