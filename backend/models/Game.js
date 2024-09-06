const mongoose = require('mongoose');

const gameSchema = new mongoose.Schema({
  board: Array,
  gameOver: Boolean,
  createdAt: { type: Date, default: Date.now },
});

const Game = mongoose.model('Game', gameSchema);
module.exports = Game;
