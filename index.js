// index.js
require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');  // Ensure the path is correct
const recipeRoutes = require('./routes/recipeRoutes');

const app = express();

// Middleware to parse JSON
app.use(express.json());

// Connect to MongoDB
connectDB();  // This should call the function without error

// Use the recipe routes
app.use('/api', recipeRoutes);

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
