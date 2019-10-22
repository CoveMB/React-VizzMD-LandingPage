import React, { Fragment, useEffect, useContext, useRef } from 'react';

import { RefContext } from './context/RefContext';

import OpacityParallax from './hoc/OpacityParallax';

import NavBtn from './NavBtn';
import NavBar from './navbar/NavBar';
import Header from './header/Header';
import Features from './features/Features';
import CardsContainer from './cards/CardsContainer';
import Ongoing from './ongoing/Ongoing';
import ParalaxTitle from './ParalaxTitle';
import Footer from './footer/Footer';

const App = () => {
  const refContext = useContext(RefContext);

  const topRef = useRef();
  const cardsRef = useRef();
  const featuresRef = useRef();
  const ongoingRef = useRef();

  useEffect(() => {
    refContext.grabRef("top", topRef);
    refContext.grabRef("cards", cardsRef);
    refContext.grabRef("features", featuresRef);
    refContext.grabRef("ongoing", ongoingRef);
  }, []);

  const getOffsets = () => {
    const offsets =
    {
      top: topRef.current.offsetTop,
      cards: cardsRef.current.offsetTop,
      features: featuresRef.current.offsetTop,
      ongoing: ongoingRef.current.offsetTop
    };
    return offsets;
  };

  return (
    <Fragment>
      <div ref={topRef} />
      <NavBtn getOffsets={getOffsets} />
      <NavBar />
      <Header />
      <OpacityParallax nextId="#features">
        <div className="normalizedBackground" id="cardsDiv" ref={cardsRef}>
          <ParalaxTitle title="Les enjeux des soins de santé aujourd'hui" />
          <CardsContainer />
        </div>
      </OpacityParallax>
      <OpacityParallax nextId="#ongoing">
        <div className="normalizedBackgroundWhite" ref={featuresRef}>
          <ParalaxTitle title="Passez du papier au numérique" idElement="features" />
          <Features />
        </div>
      </OpacityParallax>
      <div className="normalizedBackgroundWhite" ref={ongoingRef}>
        <ParalaxTitle title="Origine et avancement du projet" idElement="ongoing" />
        <Ongoing />
      </div>
      <Footer />
    </Fragment>
  );
};

export default App;
