const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

app.get('/api/game', async (req, res) => {
  const { difficulty } = req.query;

  // Call the function to generate game data based on difficulty
  const gameData = generateGameData(difficulty);

  res.json(gameData);
});

const generateGameData = (difficulty) => {
  let size;
  switch (difficulty) {
    case 'easy':
      size = 5; // Example grid size for easy
      break;
    case 'medium':
      size = 8; // Example grid size for medium
      break;
    case 'hard':
      size = 10; // Example grid size for hard
      break;
    default:
      size = 8; // Default to medium if no difficulty is selected
  }

  // Generate a simple grid based on the size
  const grid = Array.from({ length: size }, () =>
    Array.from({ length: size }, () => Math.random() > 0.8 ? 'M' : '')
  );

  return { grid };
};

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
