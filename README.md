# ats-lti-project

Proyecto base para el ejercicio ATS de LTI.

## Descripción

Este proyecto implementa una base funcional con **frontend, backend y base de datos**, siguiendo una estructura simple y escalable para demostrar la integración completa de una aplicación web.

La aplicación muestra una lista de tareas obtenidas desde una API backend conectada a una base de datos SQLite.

---

## Stack tecnológico

**Frontend**

- React
- Vite

**Backend**

- Node.js
- Express

**Base de datos**

- SQLite

**Herramientas**

- Git
- GitHub
- VS Code
- GitHub Copilot

---

## Estructura del proyecto

```
ats-lti-project/
│
├── frontend/
│   └── aplicación React creada con Vite
│
├── backend/
│   ├── server.js
│   ├── db.js
│   └── database/
│       └── ats-lti.db
│
├── README.md
└── .gitignore
```

---

## Funcionalidad actual

La aplicación incluye:

- Frontend desarrollado con **React + Vite**
- Backend desarrollado con **Express**
- Base de datos **SQLite**
- API REST básica
- Integración completa frontend ↔ backend

Endpoint disponible:

```
GET /api/tasks
```

El frontend consume esta API y muestra las tareas almacenadas en la base de datos.

---

## Problemas encontrados y soluciones

### 1. Error al abrir la base de datos SQLite

**Problema**

Al iniciar el backend aparecía el error:

```
SQLITE_CANTOPEN: unable to open database file
```

**Causa**

La carpeta donde debía almacenarse la base de datos (`backend/database`) no existía.

**Solución**

Se creó manualmente la carpeta:

```
backend/database
```

y el backend pudo crear correctamente el archivo `ats-lti.db`.

---

### 2. Conexión entre frontend y backend

**Problema**

Era necesario verificar que el frontend pudiera comunicarse correctamente con el backend.

**Solución**

Se implementó una llamada `fetch` desde React al endpoint:

```
http://localhost:3001/api/tasks
```

y se gestionó la respuesta utilizando `useEffect` y `useState`.

---

## Cómo ejecutar el proyecto

### 1️⃣ Backend

```
cd backend
npm install
npm run dev
```

El servidor se ejecutará en:

```
http://localhost:3001
```

---

### 2️⃣ Frontend

```
cd frontend
npm install
npm run dev
```

La aplicación estará disponible en:

```
http://localhost:5173
```

---

## Estado del proyecto

✔ Frontend funcionando
✔ Backend funcionando
✔ Base de datos SQLite conectada
✔ Integración completa entre frontend y backend

El proyecto ha sido subido a GitHub como parte del ejercicio solicitado.
