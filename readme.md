📇 Contact Manager App

A simple full-stack Contact Management system built using Node.js, Express, MySQL, and a clean HTML/CSS/JavaScript frontend.
This project allows users to add, view, and delete contacts — perfect for beginners learning backend + database integration.

🚀 Features

✔ Add new contacts (Name, Email, Phone)

✔ View all saved contacts

✔ Delete contacts

✔ Fully connected backend + frontend

✔ MySQL database integration

✔ API-based architecture (REST)

🛠️ Tech Stack
Frontend

HTML

CSS

JavaScript (Fetch API)

Backend

Node.js

Express.js

MySQL2 Package

Database

MySQL

📁 Project Structure
contact-manager/
│
├── backend/
│   ├── server.js
│   ├── db.js
│   └── routes.js
│
├── frontend/
│   ├── index.html
│   ├── style.css
│   └── app.js
│
└── README.md


⚙️ Installation & Setup
1️⃣ Clone this repository
https://github.com/the-revenx-lab/Contact_Manager.git

2️⃣ Setup Backend
cd backend
npm install

3️⃣ Configure MySQL Database

Run these SQL commands:
CREATE DATABASE contact_app;

USE contact_app;

CREATE TABLE contacts (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100),
  email VARCHAR(100),
  phone VARCHAR(20)
);
Update your db.js file with your MySQL credentials:
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "contact_app"
});

4️⃣ Start the Backend Server
node server.js

Backend will run at:
👉 http://localhost:5000

5️⃣ Run the Frontend

Open the frontend/index.html in your browser
or
use VS Code Live Server.

🔗 API Endpoints
GET /api/contacts

Fetch all contacts
http://localhost:5000/api/contacts

POST /api/contacts

Add a new contact
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "9876543210"
}

DELETE /api/contacts/:id

Delete a contact
DELETE http://localhost:5000/api/contacts/1

🖥️ Project Preview (optional)

Add screenshot or UI image here
![Contact Manager UI](./screenshot.png)

🌱 Future Improvements

Edit contact feature

User authentication

Pagination

Search / filter contacts

Dark mode UI
🤝 Contributing

Pull requests are welcome!
Feel free to fork this project and submit your improvements.

📜 License

MIT License © 2025