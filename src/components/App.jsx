import React, { Fragment } from 'react';

import NavBar from './navbar/NavBar';
import Header from './header/Header';
import CardsContainer from './cards/CardsContainer';

const App = () => {
  return (
    <Fragment>
      <NavBar />
      <Header />
      <div className="normalizedBackground">
        <CardsContainer />
      </div>
    </Fragment>
  );
};

export default App;
