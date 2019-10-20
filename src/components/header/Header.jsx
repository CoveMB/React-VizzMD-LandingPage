import React, { Fragment } from 'react';
import HeaderCard from './HeaderCard';
import HeaderWave from './HeaderWave';

const Header = () => {
  return (
    <Fragment>
      <HeaderCard />
      <div
        className="header-background"
      />
      <HeaderWave />
    </Fragment>

  );
};

export default Header;
