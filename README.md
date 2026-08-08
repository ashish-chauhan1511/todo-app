
# Todo-app
Full-stack Todo App with authentication, CRUD operations, MongoDB Atlas, Next.js API routes, and SCSS.
# Todo App

A full-stack Todo application built with **Next.js, TypeScript, MongoDB Atlas, JWT authentication, and SCSS**. The application provides user authentication and complete Todo CRUD functionality with Pending and Completed status management.

## Features

* User registration
* User login and logout
* JWT-based authentication
* Create, read, update, and delete Todos
* Mark Todos as Pending or Completed
* User-specific Todo management
* MongoDB Atlas integration
* Next.js API routes
* Dynamic API routes for individual Todos
* Responsive UI
* Modular SCSS styling

## Tech Stack

### Frontend

* Next.js
* React
* TypeScript
* SCSS

### Backend

* Next.js API Routes
* Node.js
* JWT

### Database

* MongoDB Atlas

### Tools

* Git
* GitHub
* VS Code

## Project Structure

```text
todo--app/
│
├── app/
│   ├── api/
│   │   ├── auth/
│   │   │   ├── login/
│   │   │   │   └── route.ts
│   │   │   ├── register/
│   │   │   │   └── route.ts
│   │   │   └── logout/
│   │   │       └── route.ts
│   │   │
│   │   └── todos/
│   │       ├── route.ts
│   │       └── [id]/
│   │           └── route.ts
│   │
│   ├── login/
│   │   └── page.tsx
│   ├── register/
│   │   └── page.tsx
│   ├── dashboard/
│   │   └── page.tsx
│   ├── globals.scss
│   ├── layout.tsx
│   └── page.tsx
│
├── components/
│   └── navbar/
│
├── lib/
│   ├── auth.ts
│   ├── db.ts
│   └── jwts.ts
│
├── models/
│   ├── todo.ts
│   └── user.ts
│
├── styles/
│   ├── dashboard.scss
│   ├── home.scss
│   ├── main.scss
│   ├── login.scss
│   ├── navbar.scss
│   └── register.scss
│
├── types/
│   └── global.d.ts
│
├── .env.local
├── .gitignore
├── package.json
├── tsconfig.json
└── README.md
```

## API Endpoints

### Authentication

| Method | Endpoint             | Description             |
| ------ | -------------------- | ----------------------- |
| `POST` | `/api/auth/register` | Register a new user     |
| `POST` | `/api/auth/login`    | Authenticate a user     |
| `POST` | `/api/auth/logout`   | Logout the current user |

### Todos

| Method          | Endpoint          | Description   |
| --------------- | ----------------- | ------------- |
| `GET`           | `/api/todos`      | Get Todos     |
| `POST`          | `/api/todos`      | Create a Todo |
| `PUT` / `PATCH` | `/api/todos/[id]` | Update a Todo |
| `DELETE`        | `/api/todos/[id]` | Delete a Todo |

## Todo Workflow

```text
Create Todo
     ↓
   Pending
     ↓
Update Status
     ↓
 Completed
```

Todos can be created, viewed, updated, deleted, and moved between **Pending** and **Completed** states.

## Authentication Flow

```text
Register
   ↓
Login
   ↓
JWT Authentication
   ↓
Dashboard
   ↓
Manage Todos
   ↓
Logout
```

## Database

The application uses **MongoDB Atlas** for persistent data storage.

### Models

* `models/user.ts` — User data model
* `models/todo.ts` — Todo data model

### Database Utility

* `lib/db.ts` — MongoDB database connection

### Authentication Utilities

* `lib/auth.ts` — Authentication-related functionality
* `lib/jwts.ts` — JWT-related functionality

## Styling

The application uses **SCSS** with separate stylesheets for different application sections.

```text
styles/
├── dashboard.scss
├── home.scss
├── main.scss
├── login.scss
├── navbar.scss
└── register.scss
```

Global styles are defined in:

```text
app/globals.scss
```

## Environment Variables

Create a `.env.local` file in the project root:

```env
MONGODB_URI=your_mongodb_atlas_connection_string
```

> **Never commit `.env.local` to GitHub.** It contains sensitive database credentials.

The project `.gitignore` is configured to ignore environment files.

## Getting Started

### Prerequisites

* Node.js
* npm
* MongoDB Atlas account

### Installation

Clone the repository:

```bash
git clone YOUR_REPOSITORY_URL
cd todo--app
```

Install dependencies:

```bash
npm install
```

Create `.env.local` in the project root and add your MongoDB Atlas connection string.

Start the development server:

```bash
npm run dev
```

Open the application at:

```text
http://localhost:3000
```

## Development

Run the development server:

```bash
npm run dev
```

Build the application for production:

```bash
npm run build
```

Start the production server:

```bash
npm start
```

Run linting:

```bash
npm run lint
```

## Security

* Database credentials are stored in environment variables.
* `.env.local` is excluded from Git through `.gitignore`.
* Authentication uses JWT-based authentication.
* User authentication is handled through dedicated API routes.

## Future Improvements

* Todo search and filtering
* Todo categories
* Due dates and reminders
* Improved validation
* Enhanced authentication and session security
* Production deployment
>>>>>>> 16893b5ed7790aa912406b3453588bd9aa2cab8c
