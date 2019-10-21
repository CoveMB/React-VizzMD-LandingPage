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
      <div className="normalizedBackgroundWhite">
        <ParalaxTitle title="Passez du papier au numérique" />
        <Features />
      </div>
      <div className="normalizedBackgroundWhite">
        <ParalaxTitle title="Origine et avancement du projet" />
        <Ongoing />
      </div>

    </Fragment>
  );
};

export default App;
