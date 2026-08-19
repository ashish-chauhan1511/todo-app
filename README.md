
# Todo-app
Full-stack Todo App with authentication, CRUD operations, MongoDB Atlas, Next.js API routes, and SCSS.

# Todo App

A full-stack Todo application built with **Next.js, TypeScript, MongoDB Atlas, JWT authentication, and SCSS**.
The application provides user authentication and complete Todo CRUD functionality with user-specific Todo management and Pending/Completed status handling.

## Features

- User registration and login
- JWT-based authentication
- User logout
- Create, read, update, and delete Todos
- Pending and Completed Todo status
- User-specific Todo management
- MongoDB Atlas integration
- Next.js API Routes
- Dynamic API routes for individual Todos
- Responsive UI
- Modular SCSS styling

## Tech Stack

### Frontend

- Next.js
- React
- TypeScript
- SCSS

### Backend

- Next.js API Routes
- Node.js
- JWT

### Database

- MongoDB Atlas

### Tools

- Git
- GitHub
- VS Code

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
├── .gitignore
├── package.json
├── tsconfig.json
└── README.md

