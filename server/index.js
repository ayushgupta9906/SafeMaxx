import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import path from 'path';
import { fileURLToPath } from 'url';
import authRoutes from './routes/auth.js';
import appointmentRoutes from './routes/appointments.js';
// import { createAdminUser } from './scripts/createAdmin.js';

<<<<<<< HEAD


=======
>>>>>>> 8bf8e1dd33cae74cd29635a58bb4ac1eaaa45084
dotenv.config();

const app = express();
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Middleware
app.use(cors({
<<<<<<< HEAD
  
  origin: ['http://localhost:5173', 'http://localhost:5000'],
=======
  origin: ['http://localhost:5174', 'http://localhost:5000'],
>>>>>>> 8bf8e1dd33cae74cd29635a58bb4ac1eaaa45084
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// API Routes
app.use('/api/auth', authRoutes);
app.use('/api/appointments', appointmentRoutes);

// Serve static files from the React app
app.use(express.static(path.join(__dirname, '../dist')));

// Handle React routing, return all requests to React app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

<<<<<<< HEAD

const port = process.env.PORT || 5000
=======
>>>>>>> 8bf8e1dd33cae74cd29635a58bb4ac1eaaa45084
// MongoDB connection

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  connectDB();
  console.log(`Server running on port ${PORT}`);
  // createAdminUser();
});

function connectDB() {
  mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/sm')
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('MongoDB connection error:', err));
}
