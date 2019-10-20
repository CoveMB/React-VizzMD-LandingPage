import React, { Fragment } from 'react';
import HeaderForm from './HeaderForm';

const HeaderCardContent = () => {
  return (
    <Fragment>
      <h1 className="headerCardTitle">Mesurez l’efficacité de vos traitements afin de les rendre plus éfficients.</h1>
      <div className="headerCardText">
        <h2 style={{ marginBottom: "20px" }}>
          Avec VizzMD, les données de santé sont:
        </h2>
        <p><img style={{ marginLeft: "15px" }} className="svgDone" src="/static/images/donesvg.svg" alt="svg done" /><strong className="darkblueTitle">Numériques</strong> (standardisé et rapide d’accès)</p>
        <p><img style={{ marginLeft: "15px" }} className="svgDone" src="/static/images/donesvg.svg" alt="svg done" /><strong className="darkblueTitle">Visuels</strong> (faciles à interpréter et comparer)</p>
        <p><img style={{ marginLeft: "15px" }} className="svgDone" src="/static/images/donesvg.svg" alt="svg done" /><strong className="darkblueTitle">Accessibles</strong> (partagée entre thérapeutes)</p>
        <p><img style={{ marginLeft: "15px" }} className="svgDone" src="/static/images/donesvg.svg" alt="svg done" /><strong className="darkblueTitle">Engageante</strong> (le patient de suivre sa progression)</p>
        <div className="grabEmailPart">
          <HeaderForm />
        </div>
      </div>
    </Fragment>
  );
};

export default HeaderCardContent;
