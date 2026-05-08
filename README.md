# MERN JWT Authentication Showcase - Backend

A clean, production-ready JWT Authentication system built with Node.js, Express, and MongoDB.

## Features
- JWT Authentication (Register, Login, Profile)
- Password Hashing with bcryptjs
- Protected Routes Middleware
- Centralized Error Handling
- Scalable Folder Structure
- Environment Variable Configuration

## Tech Stack
- **Node.js** & **Express.js**
- **MongoDB** & **Mongoose**
- **jsonwebtoken** for token handling
- **bcryptjs** for security

## Installation

1. Install dependencies:
   ```bash
   npm install
   ```

2. Setup environment variables:
   Create a `.env` file in the root directory and add:
   ```env
   PORT=5000
   MONGO_URI=your_mongodb_uri
   JWT_SECRET=your_jwt_secret
   NODE_ENV=development
   ```

3. Run the application:
   - Development mode: `npm run dev`
   - Production mode: `npm start`

## API Endpoints

### Auth
- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Authenticate user & get token
- `GET /api/auth/me` - Get current user profile (Protected)
