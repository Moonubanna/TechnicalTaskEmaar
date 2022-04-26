import React, {useEffect, useState} from 'react';

import ErrorBoundary from './common/components/ErrorBoundary';
import FallbackComponent from './common/components/CustomFallback';
import Routes from './routes';
const App = () => {

  return (
    <ErrorBoundary FallbackComponent={FallbackComponent}>
       {' '}
      <Routes />{' '}
      </ErrorBoundary>
  );
};
export default App;
