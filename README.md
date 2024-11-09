# SafeMax Security - Cybersecurity Services Platform

A full-stack web application for SafeMax Security, offering VAPT services and cybersecurity solutions. Built with React, Node.js, Express, and MongoDB.

## Prerequisites

- Node.js (v18 or higher)
- MongoDB installed and running locally
- Git (optional)

## Quick Start

1. **Clone and Install Dependencies**
   ```bash
   git clone <repository-url>
   cd safemax-security
   npm install
   ```

2. **Environment Setup**
   Create a `.env` file in the root directory:
   ```
   MONGODB_URI=mongodb://localhost:27017/sm
   JWT_SECRET=your_jwt_secret_key_here
   PORT=5000
   ```

3. **Database Setup**
   - Make sure MongoDB is running locally
   - The database will be created automatically when you start the server
   - Run the following command to create the admin user:
     ```bash
     node server/scripts/createAdmin.js
     
     ```
   Default admin credentials:
   - Email: admin@safemax.com
   - Password: Admin@123

4. **Start Development Servers**
   ```bash
   # Start both frontend and backend servers
   npm run dev
   ```
   This will start:
   - Frontend: http://localhost:5173
   - Backend: http://localhost:5000

## Project Structure

```
safemax-security/
├── src/                    # Frontend source files
│   ├── components/         # React components
│   ├── pages/             # Page components
│   └── main.tsx           # Entry point
├── server/                 # Backend source files
│   ├── models/            # MongoDB models
│   ├── routes/            # API routes
│   ├── middleware/        # Custom middleware
│   └── index.js           # Server entry point
└── public/                # Static files
```

## API Endpoints

### Authentication
- `POST /api/auth/login` - Admin login
  ```json
  {
    "email": "admin@safemax.com",
    "password": "Admin@123"
  }
  ```

### Appointments
- `POST /api/appointments` - Create appointment
- `GET /api/appointments` - Get all appointments (protected)
- `PATCH /api/appointments/:id` - Update appointment status (protected)

## Development Notes

1. **Frontend Development**
   - Built with React + TypeScript
   - Styled with Tailwind CSS
   - Form handling with controlled components
   - Protected routes with React Router

2. **Backend Development**
   - Node.js + Express server
   - MongoDB with Mongoose
   - JWT authentication
   - RESTful API design

## Troubleshooting

1. **MongoDB Connection Issues**
   - Ensure MongoDB is running: `mongod`
   - Check MongoDB connection string in `.env`
   - Default database name is 'sm'

2. **Authentication Issues**
   - Ensure JWT_SECRET is set in `.env`
   - Check if admin user exists in database
   - Verify correct credentials are being used

3. **API Connection Issues**
   - Backend should run on port 5000
   - Frontend should run on port 5173
   - Check CORS settings if needed

## Production Build

```bash
npm run build
```

## Technologies Used

- **Frontend:**
  - React 18
  - TypeScript
  - Tailwind CSS
  - React Router DOM
  - Axios
  - React Hot Toast
  - Lucide React Icons
  - Date-fns

- **Backend:**
  - Node.js
  - Express
  - MongoDB
  - Mongoose
  - JWT Authentication
  - Bcrypt
  - CORS