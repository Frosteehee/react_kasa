// Banner.js
import React from 'react';
import './Banner.scss';

const Banner = (props) => {
  const { type, imgAbout, imgHome } = props;

  let imgSrc, altText, titleText;

  if (type === 'about') {
    imgSrc = imgAbout;
    altText = '';
    titleText = '';
  } else if (type === 'home') {
    imgSrc = imgHome;
    altText = 'montagnes';
    titleText = 'Chez vous, partout et ailleurs';
  }

  return (
    <div className="banner">
      <img src={imgSrc} alt={altText} className="bannerImg" />
      <div className="mask"></div>
      {type === 'home' && <h1 className="bannerTitle">{titleText}</h1>}
      {props.children}
    </div>
  );
};

export default Banner;


//Les modifications apportées sont les suivantes : 
/* j'ai ajouté des importations pour les images imgAbout et imgHome dans les fichiers About.jsx et Home.jsx.

Dans ces mêmes fichiers, modification de  l'utilisation du composant Banner pour inclure les propriétés imgAbout et imgHome.
 Dans le composant Banner, modification de la logique pour utiliser correctement imgAbout et imgHome en fonction du type de bannière (About ou Home).*/