import React, { Fragment } from 'react';

import NavBar from './navbar/NavBar';
import Header from './header/Header';
import Features from './features/Features';
import CardsContainer from './cards/CardsContainer';

const App = () => {
  return (
    <Fragment>
      <NavBar />
      <Header />
      <div className="normalizedBackground">
        <CardsContainer />
      </div>
      <div className="normalizedBackground">
        <Features />
      </div>
    </Fragment>
  );
};

export default App;
