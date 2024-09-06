const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

// Load environment variables from .env file
dotenv.config();

// Create Express app
const app = express();

// Middleware to parse JSON
app.use(express.json());

// Import and use routes
const gameRoutes = require('./routes/gameRoutes');
app.use('/api/games', gameRoutes);

// Log MongoDB URI for debugging purposes
const mongoURI = process.env.MONGO_URI;
console.log("Mongo URI: ", mongoURI); // Should show the actual URI if loaded correctly

// Connect to MongoDB
mongoose.connect(mongoURI)
    .then(() => {
        console.log('Connected to MongoDB');
        const PORT = process.env.PORT || 5000;
        app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
    })
    .catch(err => console.error('Could not connect to MongoDB...', err));
