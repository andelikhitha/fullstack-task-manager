# Full Stack Task Management Application

## Project Description

This is a Full Stack Task Management Web Application
developed using HTML, CSS, JavaScript, Node.js,
Express.js, and MySQL.

The application allows users to:

- Add Tasks
- Delete Tasks
- Mark Tasks as Completed
- Track Task Status
- Manage Tasks Dynamically

All task data is stored in MySQL database
through backend REST APIs.

---

# Technologies Used

## Frontend
- HTML
- CSS
- JavaScript

## Backend
- Node.js
- Express.js

## Database
- MySQL

---

# Features

- Responsive User Interface
- CRUD Operations
- Dynamic Task Handling
- REST API Integration
- MySQL Database Connectivity
- Task Completion Tracking
- Mobile Responsive Design

---

# CRUD Operations

| Operation | Description |
|---|---|
| Create | Add new task |
| Read | Display tasks |
| Update | Mark task completed |
| Delete | Remove task |

---

# Project Structure

```text
fullstack-task-manager
│
├── frontend
│   ├── index.html
│   ├── style.css
│   └── script.js
│
└── backend
    ├── server.js
    ├── package.json
    └── package-lock.json
```

---

# How To Run The Project

## Frontend

Open:

```text
index.html
```

using Live Server or browser.

---

## Backend

Open terminal inside backend folder:

```bash
npm install
```

Then run:

```bash
node server.js
```

---

# Database Setup

Create database:

```sql
CREATE DATABASE taskmanager;
```

Use database:

```sql
USE taskmanager;
```

Create table:

```sql
CREATE TABLE tasks (

    id INT PRIMARY KEY AUTO_INCREMENT,

    title VARCHAR(255),

    description TEXT,

    status VARCHAR(50)

);
```

---

# Expected Outcome

This project demonstrates:

- Full Stack Development
- CRUD Operations
- API Integration
- Dynamic Data Handling
- Database Connectivity
- Responsive Web Design

---

# Author

Likhitha
