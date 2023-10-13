import React from 'react';
import OriginLocation from '../location/OriginLocation';
import Episodes from '../episodes/Episodes';
import './CharacterCard.css'

const CharacterCard = ({ character }) => {
  return (
    <div className="character-card">
      <img src={character.image} alt={character.name} />
      <div className="card_details">
        <h2>{character.name}</h2>
        <p>Species - {character.species}</p>
        <p>Status - {character.status}</p>
        <OriginLocation origin={character.origin} currentLocation={character.location} />
        <Episodes episodeURLs={character.episode} />
      </div>
    </div>
  );
};

export default CharacterCard;
