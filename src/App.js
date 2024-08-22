import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import PlayersList from './PlayersList';
import './App.css'

function App() {
  return (
    <div className="App">
      <h1 className='title'>Liste des Joueurs</h1>
      <PlayersList />
    </div>
  );
}

export default App;