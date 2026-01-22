📌 Name of the Proposed Application

**Student Task Manager**

---

## 📝 Description of the Application

The **Student Task Manager** is a simple web-based application that helps students manage their daily tasks, assignments, and activities efficiently.
Students often forget deadlines or feel disorganized while handling multiple tasks. This application provides a digital platform where users can add, view, update, and delete tasks easily.

The system helps students improve time management, stay organized, and complete tasks on time.

---

## ❓ Problem Statement

Students usually manage their tasks using notebooks, memory, or scattered notes, which leads to:

* Forgetting deadlines
* Poor task organization
* Increased stress
* Inefficient time management

There is a need for a simple and centralized system that allows students to manage tasks digitally and efficiently.

---

## 🎯 Objectives

The main objectives of the Student Task Manager are:

* To allow students to create and manage tasks
* To help students track task deadlines
* To provide a simple and user-friendly interface
* To improve time management and productivity
* To allow easy updating and deletion of tasks

---

## 🔍 Scope of the Project

This project is designed mainly for students. It can be used by school and college students to manage daily tasks and assignments.
The application is accessible through a web browser and stores task data securely in a database.

---

## 🖥️ System Overview

The Student Task Manager consists of:

* A frontend interface for user interaction
* A backend server to handle requests
* A database to store user and task information

Users interact with the system through web pages, and the system performs CRUD operations on tasks.

---

## 📄 Pages

1. **Login Page** – User can log in using username/email and password
2. **Register Page** – New users can create an account
3. **Dashboard Page** – Displays list of tasks
4. **Add Task Page** – User can add new tasks
5. **Edit Task Page** – User can update task details
6. **Profile Page** – Shows user details
7. **Logout Page**

---

## 👥 Intended Users

* College students
* School students
* Beginners learning full-stack development

---

## ⭐ Features (Minimum 4)

1. **User Authentication** – Secure login and registration
2. **Add Tasks** – Add tasks with title and due date
3. **View Tasks** – Display all tasks in a list
4. **Update Tasks** – Edit task information
5. **Delete Tasks** – Remove completed or unwanted tasks
6. **Simple Dashboard** – Easy-to-use interface

---

## 🛠️ Technology Stack

| Layer          | Technology            |
| -------------- | --------------------- |
| Frontend       | HTML, CSS, JavaScript |
| Backend        | Node.js, Express.js   |
| Database       | MongoDB               |
| Authentication | Session / JWT         |
| Deployment     | Local Server / Cloud  |

---

## 🗄️ Database Design

### Users Collection

```json
{
  userId,
  username,
  email,
  password,
  createdAt
}
```

### Tasks Collection

```json
{
  taskId,
  userId,
  title,
  description,
  dueDate,
  status,
  createdAt
}
```

---

## 📋 Functional Requirements

* Users must be able to register
* Users must be able to log in securely
* Users must be able to add tasks
* Users must be able to view tasks
* Users must be able to update tasks
* Users must be able to delete tasks

---

## ⚙️ Non-Functional Requirements

* The system should be simple and easy to use
* The system should be fast and responsive
* Data should be stored securely
* The system should be available 24/7
* The system should be scalable

---

## ✅ Advantages

* Helps students stay organized
* Improves productivity
* Easy task management
* Reduces stress
* Saves time

---

## 📌 Applications

* Academic task management
* Assignment tracking
* Daily activity planning
* Beginner full-stack learning project

---

## 🚀 Future Enhancements

* Task reminders and notifications
* Priority-based task management
* Calendar integration
* Mobile application
* Team or group tasks

---

## 🏁 Conclusion

The **Student Task Manager** is a simple yet effective application for managing daily tasks. It helps students organize their work, meet deadlines, and improve productivity. This project is ideal for beginners as it covers frontend, backend, and database concepts using simple CRUD operations.

