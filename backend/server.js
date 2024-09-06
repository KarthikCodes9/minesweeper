// Import dependencies
const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

// Initialize environment variables
dotenv.config();

// Create Express app
const app = express();

// Middleware (e.g., body parser, static files)
app.use(express.json());

// Import routes
const gameRoutes = require('./routes/gameRoutes');

// Use routes
app.use('/api/games', gameRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
    res.status(500).json({ message: err.message });
});

// Connect to the database
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => {
    console.log('Connected to MongoDB');
    // Start the server
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
})
.catch(err => console.error('Could not connect to MongoDB...', err));
