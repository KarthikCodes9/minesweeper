import React, { useState } from 'react';
import GameBoard from './components/GameBoard';
import DifficultySelector from './components/DifficultySelector';

function App() {
  const [game, setGame] = useState(null);

  const startNewGame = (selectedGame) => {
    setGame(selectedGame);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-8">Minesweeper</h1>
      {!game ? (
        <DifficultySelector startNewGame={startNewGame} />
      ) : (
        <GameBoard game={game} />
      )}
    </div>
  );
}

export default App;
