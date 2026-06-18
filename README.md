# joke_api_backend
A secure RESTful Joke API built with Node.js, Express.js, MongoDB, JWT Authentication, and Mongoose. Supports user registration, login, protected routes, and complete CRUD operations for jokes.
# 😂 Joke API Backend

A RESTful Joke API developed using Node.js, Express.js, MongoDB Atlas, and Mongoose. The API provides secure user authentication using JWT and allows authenticated users to manage jokes through CRUD operations.

## 🚀 Features

- User Registration
- User Login with JWT Authentication
- Protected Routes
- Create New Jokes
- Retrieve All Jokes
- Retrieve Joke by ID
- Update Existing Jokes
- Delete Jokes
- MongoDB Atlas Integration
- Express Middleware Support
- Password Hashing using bcryptjs

## 🛠️ Tech Stack

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- JWT (JSON Web Token)
- bcryptjs
- dotenv
- Nodemon

## 📌 API Endpoints

### Authentication

- POST `/auth/register`
- POST `/auth/login`

### Jokes

- POST `/api/v2/add/joke`
- GET `/api/v2/get/joke`
- GET `/api/v2/get/joke/:id`
- PUT `/api/v2/update/joke/:id`
- DELETE `/api/v2/del/joke/:id`

## 🔐 Security

- JWT-based authentication
- Password hashing using bcryptjs
- Protected API routes with middleware authorization

## 📂 Project Structure

```bash
config/
controller/
middleware/
models/
router/
index.js
.env
