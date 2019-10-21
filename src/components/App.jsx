import React, { Fragment } from 'react';

import OpacityParallax from './hoc/OpacityParallax';

import NavBar from './navbar/NavBar';
import Header from './header/Header';
import Features from './features/Features';
import CardsContainer from './cards/CardsContainer';
import Ongoing from './ongoing/Ongoing';
import ParalaxTitle from './ParalaxTitle';
import Footer from './footer/Footer';

const App = () => {
  return (
    <Fragment>
      <NavBar />
      <Header />
      <OpacityParallax nextId="#features">
        <div className="normalizedBackground" id="cards">
          <ParalaxTitle title="Les enjeux des soins de santé aujourd'hui" />
          <CardsContainer />
        </div>
      </OpacityParallax>
      <OpacityParallax nextId="#ongoing">
        <div className="normalizedBackgroundWhite" >
          <ParalaxTitle title="Passez du papier au numérique" idElement="features" />
          <Features />
        </div>
      </OpacityParallax>
      <div className="normalizedBackgroundWhite">
        <ParalaxTitle title="Origine et avancement du projet" idElement="ongoing" />
        <Ongoing />
      </div>
      <Footer />
    </Fragment>
  );
};

export default App;
