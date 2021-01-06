import React, { Suspense } from 'react';
import Routes from './routes';

const App: React.FC = () => (
  <Suspense fallback={<>...loading</>}>
    <Routes />
  </Suspense>
);

export default App;
