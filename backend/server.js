const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const gameRoutes = require('./routes/game');
app.use('/api/games', gameRoutes);

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/minesweeper', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log("Connected to MongoDB"))
  .catch(err => console.log(err));

app.get('/', (req, res) => {
  res.send("Minesweeper Backend");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
