import React from 'react';

function GameList({ startNewGame }) {
  const games = [
    { id: 1, name: 'Beginner', size: 8, mines: 10 },
    { id: 2, name: 'Intermediate', size: 16, mines: 40 },
    { id: 3, name: 'Expert', size: 24, mines: 99 }
  ];

  return (
    <div className="text-center p-5">
      <h2 className="text-2xl mb-4">Select a Game</h2>
      <ul className="space-y-2">
        {games.map((game) => (
          <li key={game.id}>
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-blue-600 transition"
              onClick={() => startNewGame(game)}
            >
              {game.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default GameList;
