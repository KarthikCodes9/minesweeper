
import React, { useState } from 'react';
import Board from './components/Board';
import GameList from './components/GameList';

function App() {
  const [selectedGame, setSelectedGame] = useState(null);

  const handleLoadGame = (gameId) => {
    setSelectedGame(gameId);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-lg shadow-lg p-6">
        <h1 className="text-2xl font-semibold text-center text-white mb-4">Minesweeper</h1>
        <GameList onLoadGame={handleLoadGame} />
        <Board rows={10} cols={10} mines={10} />
      </div>
    </div>
  );
}

export default App;
