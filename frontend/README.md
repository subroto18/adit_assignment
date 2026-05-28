# Task Management

Task Management Platform built with React, TypeScript, Tailwind CSS, and Ant Design.

---

# Live Demo

Frontend URL:

---

# Tech Stack

- React 18
- TypeScript
- React Router DOM
- Ant Design
- Tailwind CSS
- Axios
- Context API
- Vite

---

# Features

## Authentication

- User Registration
- User Login
- JWT Authentication
- Protected Routes
- Public Route Handling
- Persistent Authentication
- Auth Initialization Loader

---

## Task Management

- Create Task
- Delete Task
- Update Task Status
- Mark Task as Completed
- Filter Tasks
  - All
  - Pending
  - Completed

- Responsive Task Table
- Tooltip for Long Text
- Toast Notifications

---

# Pending Features

The following features are planned for future implementation:

- Pagination
- Edit Task
- Dark Mode UI
- Search Tasks
- Infinite Scroll
- Optimistic UI Updates
- Profile Settings
- Role-Based Authentication

---

# Project Structure

```bash
src/
│
├── api/
│   ├── axios.ts
│   ├── endpoints.ts
│   └── services/
│
├── components/
│   ├── common/
│   └── ui/
│
├── constants/
│
├── context/
│
├── features/
│   ├── auth/
│   └── dashboard/
│
├── hooks/
│
├── layout/
│
├── pages/
│
├── routes/
│
├── utils/
│
└── config/
```

---

# Installation

Clone the repository:

```bash
git clone <repository-url>
```

Move into the project directory:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

---

# Environment Variables

Create a `.env` file in the root directory.

```env
VITE_API_BASE_URL=https://adit-assignment.onrender.com/api/v1
```

---

# Run Development Server

```bash
npm run dev
```

Frontend will run on:

```bash
http://localhost:5173
```

---

# Build For Production

```bash
npm run build
```

---

# Authentication Flow

1. User logs in
2. JWT token is stored in localStorage
3. AuthContext manages global authentication state
4. Protected routes validate user access
5. `/auth/me` API validates session on refresh

---

# UI Architecture

The project follows a scalable feature-based architecture:

- Feature-driven folder structure
- Reusable UI components
- Centralized constants/configuration
- Custom hooks for business logic
- Global API layer
- Separated route protection

---

# API Integration

Axios is configured globally with:

- Base URL
- Authorization headers
- Request interceptors
- Response interceptors

---

# Future Improvements

- React Query / TanStack Query
- Unit Testing
- E2E Testing
- Theme Switching
- Better State Management
- Accessibility Improvements

---

# Author

Subroto Chakraborty

Frontend Developer | React Developer | Content Creator
