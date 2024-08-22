import React from 'react';
import players from './players';
import Player from './Player';
import './index.css'; // Assurez-vous d'importer le fichier CSS

const PlayersList = () => {
  return (
    <div className="players-list">
      {players.map((player, index) => (
        <Player key={index} {...player} />
      ))}
    </div>
  );
};

export default PlayersList;