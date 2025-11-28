
# EV Device Monitoring Dashboard

A full-stack web application that enables real-time monitoring of Electric Vehicle (EV) device status. This includes device listing, filtering, status badges, details panel display, and secure login access.

## Overview

This dashboard provides visibility into EV device status with a clean and modern UI. Users can log in securely and access monitoring statistics using data served from a Node.js backend.

---

## Features

### Frontend (React + Vite + TailwindCSS)
- Modern UI with professional dashboard layout
- Device listing with status indicators
- Device detail side panel
- Status-based filtering
- Secure login page with validation
- Responsive and accessible design

### Backend (Node.js + Express)
- Devices API: `/api/devices`
- Status filter support: `/api/devices?status={status}`
- Mock data simulating EV battery devices
- CORS-enabled server

---

## Technologies Used

| Layer | Technology |
|-------|------------|
| Frontend | React, Vite, Axios, React Router DOM, Tailwind CSS |
| Backend | Node.js, Express.js, CORS |
| Tools & Deployment | Git, GitHub |

---

## Authentication

This application requires login to access the dashboard.

**Credentials:**
- Email: `ev@gmail.com`
- Password: `Ev123456.`

---

## Folder Structure

```
ev-device-dashboard/
│
├── backend/
│   ├── src/
│   │   ├── data/
│   │   │   └── devices.js
│   │   ├── routes/
│   │   │   └── devices.js
│   │   ├── app.js
│   │   └── server.js
│   ├── package.json
│   └── ...
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── layout/
│   │   └── main.jsx
│   ├── index.html
│   ├── package.json
│   └── ...
│
└── README.md
```

---

## Installation & Setup

### 1. Clone the Repository
```
git clone https://github.com/<your-username>/ev-device-dashboard.git
cd ev-device-dashboard
```

### 2. Backend Setup
```
cd backend
npm install
npm start
```
Runs the server at:
```
http://localhost:5000
```

### 3. Frontend Setup
```
cd ../frontend
npm install
npm run dev
```
Runs the frontend at (default Vite port):
```
http://localhost:5173
```

---

## API Reference

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/devices` | Get all devices |
| GET | `/api/devices?status=active` | Filter active devices |
| GET | `/api/devices?status=warning` | Filter warning devices |
| GET | `/api/devices?status=offline` | Filter offline devices |

---



## Screenshots

### Login Page
![Login Page](./screenshots/sign_in.png)

### Dashboard
![Dashboard](./screenshots/dashboard.png)

### Settings Page
![Settings Page](./screenshots/settings.png)

### Side Panel
![SidePanel Page](./screenshots/side-panel.png)


## Evaluation Criteria (As Required)
- Clean + Responsive UI
- Working API communication
- Code quality and structure
- Component reusability
- Minimal errors and warnings

---

## Future Enhancements (Optional)
- JWT authentication
- Live real-time status updates
- User profile management enhancements
- Data analytics with charts and insights

---

