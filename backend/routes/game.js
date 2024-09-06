const express = require('express');
const Game = require('../models/Game');
const router = express.Router();

router.post('/save', async (req, res) => {
  const newGame = new Game(req.body);
  await newGame.save();
  res.json(newGame);
});

router.get('/load/:id', async (req, res) => {
  const game = await Game.findById(req.params.id);
  res.json(game);
});

module.exports = router;
