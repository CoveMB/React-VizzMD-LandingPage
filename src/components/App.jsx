import React, { Fragment, useRef, useEffect, useState, useLayoutEffect } from 'react';

import OpacityParallax from './hoc/OpacityParallax';

import NavBtns from './NavBtns';
import NavBar from './navbar/NavBar';
import Header from './header/Header';
import Features from './features/Features';
import CardsContainer from './cards/CardsContainer';
import Ongoing from './ongoing/Ongoing';
import ParalaxTitle from './ParalaxTitle';
import Footer from './footer/Footer';

const app = () => {
  const [offsets, setOffsets] = useState({});

  const cardsRef = useRef();
  const featuresRef = useRef();
  const ongoingRef = useRef();

  const scrollTo = (element) => {
    switch (element) {
      case "top":
        window.scrollTo({ left: 0, top: 0, behavior: 'smooth' });
        break;
      case "cards":
        window.scrollTo({ left: 0, top: cardsRef.current.offsetTop - 30, behavior: 'smooth' });
        break;
      case "features":
        window.scrollTo({ left: 0, top: featuresRef.current.offsetTop - 30, behavior: 'smooth' });
        break;
      case "ongoing":
        window.scrollTo({ left: 0, top: ongoingRef.current.offsetTop - 30, behavior: 'smooth' });
        break;
      default:
        break;
    }
  };

  const adjustOffsets = () => {
    const offsetsToSet =
      {
        top: 0,
        cards: cardsRef.current.offsetTop - 400,
        features: featuresRef.current.offsetTop - 400,
        ongoing: ongoingRef.current.offsetTop - 400
      };
    setOffsets({ ...offsetsToSet });
  };

  useLayoutEffect(() => {
    const updateSize = () => {
      adjustOffsets();
    };
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  return (
    <Fragment>
      <div />
      <NavBtns scrollTo={scrollTo} offsets={offsets} />
      <NavBar scrollTo={scrollTo} />
      <Header />
      <OpacityParallax nextId="#features">
        <div className="normalizedBackground" id="cardsDiv" ref={cardsRef}>
          <ParalaxTitle title="Les enjeux des soins de santé aujourd'hui" />
          <CardsContainer scrollTo={scrollTo} />
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

export default app;
