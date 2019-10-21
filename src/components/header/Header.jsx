import React, { Fragment } from 'react';
import HeaderCard from './HeaderCard';
import HeaderWave from './HeaderWave';

const Header = () => {
  return (
    <Fragment>
      <HeaderWave />
      <HeaderCard />
      <div
        className="header-background"
      />
    </Fragment>

  );
};

export default Header;
