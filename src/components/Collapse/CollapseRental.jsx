import React from 'react';
import PropTypes from 'prop-types';
import "./CollapseRental.scss";
import arrowCollapse from "../../assets/images/arrow.svg";

const CollapseRental = ({ description, equipments }) => {
  const [isOpen, setIsOpen] = React.useState({});

  const handleToggle = (key) => {
    setIsOpen(prevState => ({
      ...prevState,
      [key]: !prevState[key]
    }));
  };

  return (
    <div className='collapsedRental'>
      {/* Collapsible pour la description */}
      <div className={`Collapsible ${isOpen['description'] ? 'open' : ''}`}> {/* Ajout de la classe 'open' si le collapse est ouvert*/}
        <div className="trigger-container__rental" onClick={() => handleToggle('description')}> {/* Appel de la fonction handleToggle avec l'ID du collapse en paramètre */}
          Description
          <img src={arrowCollapse} alt="Arrow" className={`arrowCollapsed ${isOpen['description'] ? 'rotate' : ''}`} /> {/* Ajout de la classe 'rotate' si le collapse est ouvert */}
        </div>
        <div className="Collapsible_content">
          {isOpen['description'] && <p className='description'>{description}</p>} {/* Affiche le texte si le collapse est ouvert */}
        </div>
      </div>
      
      {/* Collapsible pour les équipements */}
      <div className={`Collapsible ${isOpen['equipments'] ? 'open' : ''}`}> {/* Ajout de la classe 'open' si le collapse est ouvert*/}
        <div className="trigger-container__rental" onClick={() => handleToggle('equipments')}> {/* Appel de la fonction handleToggle avec l'ID du collapse en paramètre */}
          Equipements
          <img src={arrowCollapse} alt="Arrow" className={`arrowCollapsed ${isOpen['equipments'] ? 'rotate' : ''}`} /> {/* Ajout de la classe 'rotate' si le collapse est ouvert */}
        </div>
        <div className="Collapsible_content">
          {isOpen['equipments'] && ( // Affiche les équipements si le collapse est ouvert
            <ul className='equipment'>
              {equipments.map((equipment, index) => <li key={index}>{equipment}</li>)} {/* Affiche chaque équipement */}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

// Définition des types de props attendues
CollapseRental.propTypes = {
  description: PropTypes.string.isRequired,
  equipments: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default CollapseRental;

/*
/*
Une nouvelle prop (CollapseComponent) a été ajoutée aux props de CollapseRental. 
Cette prop est utilisée pour passer le composant Collapse en tant que prop. (ça fait beaucoup de props dans une phrase)
Dans CollapseRental, le contenu de la collapse est maintenant rendu en utilisant le composant passé via la prop CollapseComponent.
CollapseRental dans RentalPage, passe le composant Collapse en tant que prop CollapseComponent.

*/
