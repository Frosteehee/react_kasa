// Home.js
import React from 'react';
import Banner from '../../components/Banner/Banner'; // Import du composant Banner
import './Home.scss';
import Cards from '../../components/Cards/Cards';
import imgHome from '../../assets/images/bannerHome.png'; // Import de l'image pour la bannière Home

function Home() {
  return (
    <div>
      <Banner type="home" imgHome={imgHome} /> {/* Utilisation du composant Banner avec l'image Home */}
      <Cards />
    </div>
  );
}

export default Home;
