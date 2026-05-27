# 🚀 Customer API (Backend)

A simple **Node.js + Express** REST API for managing customers.
Built with clean architecture, validation, and centralized error handling.

---

## 🧠 Tech Stack

- Node.js
- Express
- UUID
- Dotenv
- CORS
- Nodemon

---

## ✨ Features

- RESTful API structure
- In-memory data storage
- Request validation middleware
- Global error handling
- Custom error class (`AppError`)
- Standardized API responses
- Health check endpoint

---

## 📁 Project Structure

```bash
backend/
├── config/         # DB & environment config
├── controllers/    # Business logic
├── middleware/     # Validation & error handling
├── routes/         # API routes (v1)
├── utils/          # Helpers (errors, responses)
├── .env
└── server.js
```

---

## 📌 API Endpoints

### Base URL

```
/api/v1
```

### Customers

- `GET /customers` → Get all customers
- `POST /customers` → Create customer
- `DELETE /customers/:id` → Delete customer

### Health

- `GET /health` → Server status check

---

## 📨 Request Example

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "1234567890"
}
```

---

## ❤️ Response Format

### Success

```json
{
  "success": true,
  "message": "Success",
  "data": {}
}
```

### Error

```json
{
  "success": false,
  "message": "Error message",
  "code": "ERROR_CODE"
}
```

---

## ⚙️ Setup

```bash
npm install
npm run dev
```

Create `.env`:

```env
PORT=8000
```

---

## ⚠️ Notes

- Uses **in-memory storage** (no database)
- Easy to extend with DB (MongoDB, PostgreSQL)

---

## 👨‍💻 Author

Subroto chakraborty
