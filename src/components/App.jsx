import React, { Fragment } from 'react';

import NavBar from './navbar/NavBar';
import Header from './header/Header';
import Features from './features/Features';
import CardsContainer from './cards/CardsContainer';
import Ongoing from './ongoing/Ongoing';
import ParalaxTitle from './ParalaxTitle';


const App = () => {
  return (
    <Fragment>
      <NavBar />
      <Header />
      <div className="normalizedBackground">
        <ParalaxTitle title="Les enjeux des soins de santé aujourd'hui" />
        <CardsContainer />
      </div>
      <div className="normalizedBackground">
        <ParalaxTitle title="Passez du papier au numériquet" />
        <Features />
      </div>
      <div className="normalizedBackground">
        <ParalaxTitle title="Origine et avancement du projet" />
        <Ongoing />
      </div>

    </Fragment>
  );
};

export default App;
