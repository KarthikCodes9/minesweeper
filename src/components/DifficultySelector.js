import React, { useState, useCallback } from 'react';
import axios from 'axios';
import debounce from 'lodash.debounce';

const DifficultySelector = () => {
  const [difficulty, setDifficulty] = useState('medium');
  const [loading, setLoading] = useState(false);
  const [grid, setGrid] = useState(null);

  const handleDifficultyChange = (level) => {
    setDifficulty(level);
    debouncedFetchData(level);
  };

  const fetchData = async (level) => {
    try {
      setLoading(true);
      const response = await axios.get(`/api/game?difficulty=${level}`);
      setGrid(response.data.grid); // Assuming the API returns a grid
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  const debouncedFetchData = useCallback(debounce(fetchData, 300), []);

  return (
    <div>
      <label htmlFor="difficulty">Select Difficulty: </label>
      <select
        id="difficulty"
        value={difficulty}
        onChange={(e) => handleDifficultyChange(e.target.value)}
      >
        <option value="easy">Easy</option>
        <option value="medium">Medium</option>
        <option value="hard">Hard</option>
      </select>

      {loading && <p>Loading...</p>}

      {grid && (
        <div>
          <h3>Game Grid:</h3>
          <pre>{JSON.stringify(grid, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default DifficultySelector;
