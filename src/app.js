const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Basic Route
app.get('/', (req, res) => {
  res.status(200).json({ message: 'Welcome to the JWT Auth API' });
});

// Routes
app.use('/api/auth', require('./routes/authRoutes'));

// Error Middleware
const { notFound, errorHandler } = require('./middleware/errorMiddleware');
app.use(notFound);
app.use(errorHandler);

module.exports = app;
