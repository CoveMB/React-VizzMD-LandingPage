import React from 'react';
import NavBrand from '../navbar/NavBrand';

const Footer = () => {
  return (
    <div className="footer">
      <h2><a className="footerLink" href="mailto:name@email.com">info@vizzmd.com</a></h2>
      <a href="https://www.linkedin.com/company/28817589" target="_blank"><img className="svgLinkedIn" src="/static/images/linkedinSvg.svg" alt="svg LinkedIn" /></a>
    </div>
  );
};

export default Footer;
