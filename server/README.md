# 🗂️ Paper Notes Backend

**Paper Notes** backend provides a robust API Structure built with Node.js and Express.js, supporting secure user authentication and efficient note management using MongoDB.

## 🚀 Features

- **JWT Authentication:** Secure user authentication using JSON Web Tokens.
- **User Management:** Create and read user accounts.
- **Note Management:** CRUD operations for notes.
- **Case-Insensitive Search:** Powerful search functionality for notes.
- **bcrypt:** Password hashing for secure storage.

## 🛠️ Tech Stack

- **Node.js:** JavaScript runtime for server-side development.
- **Express.js:** Web framework for building APIs.
- **MongoDB:** NoSQL database for storing user and note data.
- **JWT:** Token-based authentication.
- **bcrypt:** Library for hashing passwords.

## 📦 Installation

### Prerequisites

- Node.js (v14 or higher)
- MongoDB
- npm or yarn

### Steps

1. **Clone the repository:**

    ```bash
    git clone https://github.com/pushkardeep/paper_notes_beckend.git
    cd paper-notes-backend
    ```

2. **Install dependencies:**

    ```bash
    npm install
    ```

3. **Configure environment variables:**

    Create a `.env` file in the root directory with the following content:

    ```env
    MongoDB_URI=your_mongodb_URI
    ORIGIN_URI=frontend_origin_URI
    PORT=3000
    SECERET_KEY=your_choice
    ```

4. **Start the server:**

    ```bash
    npx nodemon index.js
    ```

    The server should now be running at `http://localhost:5000`.

## 📄 API Endpoints

### Authentication

- **POST** `/user/sign_up`: Register a new user.
- **POST** `/user/log_In`: Authenticate user and get token.

 ### User

- **POST** `/user/profile`: Get user profile.

### Notes

- **POST** `/notes/getNotes`: Get all notes.
- **POST** `/notes/createNote`: Create a new note.
- **POST** `/search/notes`: Get a specific note.
- **POST** `/notes/editNote`: Update a specific note.
- **POST** `/notes/deleteNote`: Delete a specific note.

## 🤝 Contributing

I am welcome contributions! Fork the repository and submit a pull request for any new features or improvements.

## 📧 Contact

- **Email:** just.pushkardeep@gmail.com
- **GitHub:** [@pushkardeep](https://github.com/pushkardeep)

