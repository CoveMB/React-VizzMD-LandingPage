import React from 'react';
import RefContextProvider from '../src/components/context/RefContext';

import App from '../src/components/App';


const rootPage = () => {
  return (
    <RefContextProvider>
      <App />
    </RefContextProvider>
  );
};

export default rootPage;
