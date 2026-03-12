# Architecture Overview

## Project Structure

The project follows a simple full-stack architecture composed of three main layers:

```
Frontend (React + Vite)
        │
        │ HTTP requests
        ▼
Backend (Node.js + Express)
        │
        │ SQL queries
        ▼
Database (SQLite)
```

## Frontend

The frontend is built using **React with Vite**.
It is responsible for:

- Rendering the user interface
- Fetching data from the backend API
- Displaying tasks stored in the database

Main file:

```
frontend/src/App.jsx
```

The frontend calls the backend endpoint:

```
GET /api/tasks
```

---

## Backend

The backend is implemented with **Node.js and Express**.

Responsibilities:

- Expose REST endpoints
- Handle requests from the frontend
- Query the database

Main files:

```
backend/server.js
backend/db.js
```

The server runs on:

```
http://localhost:3001
```

---

## Database

The project uses **SQLite** as a lightweight database.

Database file:

```
backend/database/ats-lti.db
```

Table structure:

```
tasks
 - id
 - title
 - status
```

The database is initialized automatically when the backend starts.

---

## Communication Flow

1. The user opens the React frontend.
2. The frontend sends a request to the backend endpoint `/api/tasks`.
3. The backend queries the SQLite database.
4. The backend returns the tasks as JSON.
5. The frontend renders the tasks in the UI.

---

## Summary

This architecture demonstrates a minimal but functional full-stack application where:

- React handles the UI
- Express manages the API
- SQLite stores persistent data
