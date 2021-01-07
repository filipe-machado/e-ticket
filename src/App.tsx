import React, { Suspense } from 'react';
import Routes from './routes';
import Loader from './components/Loader';

const App: React.FC = () => (
  <Suspense fallback={<Loader />}>
    <Routes />
  </Suspense>
);

export default App;
