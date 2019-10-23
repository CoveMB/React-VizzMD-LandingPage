import React from 'react';

import App from '../src/components/App';

import configureRefStore from '../src/store/refStore';

configureRefStore();

const rootPage = () => {
  return (
    <App />
  );
};

export default rootPage;
