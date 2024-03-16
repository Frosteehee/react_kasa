// About.js
import React from 'react';
import Banner from '../../components/Banner/Banner'; // Import du composant Banner
import './About.scss';
import Collapse from '../../components/Collapse/Collapse';
import imgAbout from '../../assets/images/imgAbout.png'; // Import de l'image pour la bannière About

function About() {
  // Définition des éléments à afficher dans les sections collapsibles
  const collapses = [
    { title: 'Section 1', text: 'Contenu de la section 1' },
    { title: 'Section 2', text: 'Contenu de la section 2' },
  ];

  return (
    <main>
      <Banner type="about" imgAbout={imgAbout} /> {/* Utilisation du composant Banner avec l'image About */}
      <Collapse items={collapses} />
    </main>
  );
}

export default About;
