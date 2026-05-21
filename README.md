# 🚀 Project Management App

A modern full-stack MERN Project Management Application with authentication, role-based access, task assignment, analytics dashboard, and modern SaaS UI.

---

## 🌐 Live Demo

Frontend:
https://project-management-frontend-lrrnrvp45-kuldeep-saini-s-projects1.vercel.app

Backend API:
https://project-management-backend-yhy6.onrender.com

---

## ✨ Features

### 🔐 Authentication
- User Signup/Login
- JWT Authentication
- Protected Routes
- Role-Based Access Control

### 👨‍💼 Admin Features
- Create Projects
- Create Tasks
- Assign Tasks to Members
- View All Projects & Tasks

### 👨‍💻 Member Features
- View Only Assigned Tasks
- View Only Related Projects
- Update Task Status

### 📊 Dashboard
- Total Tasks
- Pending Tasks
- Completed Tasks
- In Progress Tasks
- Overdue Tasks
- Task Analytics Chart

### 🎨 Modern UI
- Responsive SaaS Design
- Dark Theme
- Modern Sidebar
- Clean Dashboard
- Interactive Forms

---

## 🛠️ Tech Stack

### Frontend
- React.js
- Tailwind CSS
- Axios
- React Router DOM
- Recharts

### Backend
- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- JWT Authentication
- bcryptjs

### Deployment
- Frontend → Vercel
- Backend → Render
- Database → MongoDB Atlas

---

## 📁 Folder Structure

```bash
project-management-app/
│
├── client/
│   ├── src/
│   ├── components/
│   ├── pages/
│
├── server/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│
└── README.md
```

---

## ⚙️ Environment Variables

Create `.env` inside `server/`

```env
MONGO_URI=your_mongodb_connection
JWT_SECRET=your_secret_key
PORT=5000
```

---

## 🚀 Installation

### 1️⃣ Clone Repository

```bash
git clone https://github.com/your-username/project-management-app.git
```

### 2️⃣ Install Dependencies

#### Frontend

```bash
cd client
npm install
```

#### Backend

```bash
cd server
npm install
```

---

## ▶️ Run Project

### Start Backend

```bash
npm start
```

### Start Frontend

```bash
npm run dev
```

---

## 📸 Screenshots

### Login Page
(Add Screenshot)

### Dashboard
(Add Screenshot)

### Tasks Page
(Add Screenshot)

### Projects Page
(Add Screenshot)

---

## 🔒 Role-Based Access

| Role | Access |
|------|--------|
| Admin | Full Access |
| Member | Assigned Tasks & Projects Only |

---

## 📈 Future Improvements

- Drag & Drop Kanban Board
- Notifications
- Email Verification
- File Uploads
- Team Chat
- Dark/Light Theme Toggle
- Activity Logs

---

## 👨‍💻 Author

Kuldeep Saini

---

## ⭐ Support

If you like this project, give it a ⭐ on GitHub.
