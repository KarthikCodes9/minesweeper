
import React, { useEffect, useState } from 'react';
import { listGames } from '../api';

const GameList = ({ onLoadGame }) => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    const fetchGames = async () => {
      const gameList = await listGames();
      setGames(gameList);
    };
    fetchGames();
  }, []);

  return (
    <div className="p-4 bg-white bg-opacity-10 backdrop-blur-lg rounded-lg shadow-lg">
      <h2 className="text-xl font-semibold text-white mb-4">Saved Games</h2>
      <ul>
        {games.map(game => (
          <li key={game._id} className="mb-2">
            <button
              onClick={() => onLoadGame(game._id)}
              className="p-2 bg-green-500 text-white rounded-lg"
            >
              Load Game {game._id}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GameList;
