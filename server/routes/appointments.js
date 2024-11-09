import express from 'express';
import { auth } from '../middleware/auth.js';
import Appointment from '../models/Appointment.js';

const router = express.Router();

// Create appointment (public)
router.post('/', async (req, res) => {
  try {
    const appointment = new Appointment({
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
      date: new Date(req.body.date),
      time: req.body.time,
      message: req.body.message,
      status: 'pending'
    });

    await appointment.save();
    res.status(201).json(appointment);
  } catch (error) {
    console.error('Appointment creation error:', error);
    res.status(400).json({ error: error.message });
  }
});

// Get all appointments (protected)
router.get('/', auth, async (req, res) => {
  try {
    const appointments = await Appointment.find().sort({ createdAt: -1 });
    res.json(appointments);
  } catch (error) {
    console.error('Fetch appointments error:', error);
    res.status(500).json({ error: error.message });
  }
});

// Update appointment status (protected)
router.patch('/:id', auth, async (req, res) => {
  try {
    const appointment = await Appointment.findByIdAndUpdate(
      req.params.id,
      { status: req.body.status },
      { new: true }
    );
    
    if (!appointment) {
      return res.status(404).json({ error: 'Appointment not found' });
    }
    
    res.json(appointment);
  } catch (error) {
    console.error('Update appointment error:', error);
    res.status(400).json({ error: error.message });
  }
});

export { router as default };