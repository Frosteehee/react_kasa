import React, { useState } from 'react';
import CollapseData from '../../data/collapses.json';
import './Collapse.scss';
import arrowCollapse from '../../assets/images/arrow.svg';

const Collapse = () => {
  const [isOpen, setIsOpen] = useState({}); // Utilisation d'un objet pour stocker l'état de chaque collapse

  const handleToggle = (id) => {
    setIsOpen(prevState => ({
      ...prevState,
      [id]: !prevState[id] // Inverse l'état du collapse correspondant à l'ID
    }));
  };

  return (
    <div>
      {CollapseData.map(collapse => (
        <div key={collapse.id} className={`Collapsible ${isOpen[collapse.id] ? 'open' : ''}`}> {/* Ajout de la classe 'open' si le collapse est ouvert*/}
          <div className="trigger-container" onClick={() => handleToggle(collapse.id)}> {/* Appel de la fonction handleToggle avec l'ID du collapse en paramètre */}
            {collapse.title}
            <img className={`arrowCollapsedAbout ${isOpen[collapse.id] ? 'rotate' : ''}`} src={arrowCollapse} alt="Arrow" /> {/* Ajout de la classe 'rotate' si le collapse est ouvert */}
          </div>
          <div className="Collapsible_content">
            {isOpen[collapse.id] && <p className="">{collapse.text}</p>} {/* Affiche le texte si le collapse est ouvert */}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Collapse;

/*  Modifications apportées à Collapse.jsx :
Ajout de l'état isOpen : pour suivre l'état d'ouverture de chaque collapse.
Cela permet de savoir quels collapses sont ouverts ou fermés à un moment donné.

Ajout de la fonction handleToggle : pour basculer l'état d'ouverture de chaque collapse en fonction de son ID.
Les classes CSS sont ajoutées dynamiquement en fonction de l'état d'ouverture de chaque collapse.
Suppression de l'utilisation de Collapsible,  remplacé par une implémentation personnalisée utilisant des divs et des classes CSS pour créer l'effet de collapse.
Suppression de la dépendance à react-collapsible, l'effet de collapse est implémenté manuellement à l'aide de l'état isOpen.
*/