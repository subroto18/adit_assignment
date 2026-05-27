# Task Management Backend API

A scalable and maintainable Task Management Backend built with **Node.js**, **Express.js**, and **MongoDB** with **JWT Authentication**.

This backend powers a task management application where authenticated users can create, manage, update, and delete their own tasks securely.

---

# Features

## Authentication

- User Registration
- User Login
- JWT-based Authentication
- Protected Routes
- Password Hashing using bcrypt

## Task Management

- Create Task
- Get All Tasks
- Filter Tasks by Status
- Pagination Support
- Update Task
- Delete Task
- User-specific Task Access Control

## Architecture Features

- Layered Architecture (Routes → Controllers → Services → Models)
- Centralized Error Handling
- Custom AppError Utility
- Request Validation using Zod
- Reusable Response Handler
- Config-based Environment Management
- Constants for Enums and Messages

---

# Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT (jsonwebtoken)
- bcrypt
- Zod
- dotenv

---

# Project Structure

```bash
src/
│
├── config/
│   └── auth.config.js
│
├── constants/
│   ├── enums.js
│   ├── errorMap.js
│   └── messages.js
│
├── controllers/
│   ├── auth.controller.js
│   └── task.controller.js
│
├── middlewares/
│   ├── auth.middleware.js
│   ├── error.middleware.js
│   └── validate.middleware.js
│
├── model/
│   ├── task.model.js
│   └── user.model.js
│
├── routes/
│   └── v1/
│       ├── auth.routes.js
│       ├── task.routes.js
│       └── index.js
│
├── services/
│   ├── auth.service.js
│   └── task.service.js
│
├── utils/
│   ├── AppError.js
│   ├── asyncHandler.js
│   ├── responseHandler.js
│   └── token.util.js
│
├── validations/
│   └── task.validation.js
│
└── server.js
```

# Create `.env` File

Create a `.env` file in the project root.

Example:

```env
PORT=8000
NODE_ENV=development

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_jwt_secret
JWT_EXPIRES_IN=7d

BCRYPT_SALT_ROUNDS=10




git clone <your-repository-url>
cd backend
```

# Live API URL

Production Base URL:

```bash
https://adit-assignment.onrender.com/api/health
```
