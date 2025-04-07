🚀 Student Job Tracker
The Student Job Tracker is a full-stack web application designed to help students keep track of their job applications. It allows users to add, view, update, and delete job opportunities, manage their application status, and stay organized during the job hunt process.

🔧 Tech Stack
Frontend	Backend	Database
React.js (Vite)	Node.js, Express.js	MySQL
🌟 Features
📥 Add job applications with company, role, date, and status.

📋 View all saved applications in a beautiful UI.

✏️ Update or delete entries easily.

🔍 Filter and sort jobs by applied date or status.

📊 Track application status (Applied, Interview, Offer, Rejected).

📁 Project Structure

Student-Job-Tracker/
├── client/              # Frontend (React + Vite)
│   └── src/
│       └── components/
│       └── pages/
│       └── App.jsx
│       └── main.jsx
├── server/              # Backend (Node + Express)
│   └── routes/
│   └── controllers/
│   └── db.js
│   └── server.js
├── package.json         # Project metadata
└── README.md
📦 How to Run Locally

🖥 Frontend
cd client
npm install
npm run dev

⚙️ Backend
cd server
npm install
node server.js
Make sure MySQL is running and DB credentials are correct in db.js.

🌐 Deployment
Frontend: Vercel 

Backend: Render 

Database: MongoDb Atlas



