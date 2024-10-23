const express = require('express');
const recipeRoutes = require('./routes/recipeRoutes');
const connectDB = require('./config/db'); // Import the connectDB function

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Initialize MongoDB connection
connectDB();

// Use recipe routes
app.use('/api/recipes', recipeRoutes);

// Start server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
