import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { format } from 'date-fns';
import { Shield, Calendar, Clock, Mail, Phone, MessageSquare, CheckCircle, XCircle } from 'lucide-react';

interface Appointment {
  _id: string;
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  message: string;
  status: 'pending' | 'confirmed' | 'cancelled';
  createdAt: string;
}

const Admin = () => {
  const navigate = useNavigate();
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedAppointment, setSelectedAppointment] = useState<Appointment | null>(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login');
      return;
    }

    fetchAppointments();
  }, [navigate]);

  const fetchAppointments = async () => {
    try {
      const response = await axios.get('/api/appointments', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      });
      setAppointments(response.data);
    } catch (error) {
      toast.error('Failed to fetch appointments');
      if (axios.isAxiosError(error) && error.response?.status === 401) {
        localStorage.removeItem('token');
        navigate('/login');
      }
    } finally {
      setLoading(false);
    }
  };

  const updateAppointmentStatus = async (id: string, status: 'confirmed' | 'cancelled') => {
    try {
      await axios.patch(`/api/appointments/${id}`, 
        { status },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
          }
        }
      );
      toast.success(`Appointment ${status}`);
      fetchAppointments();
      setSelectedAppointment(null);
    } catch (error) {
      toast.error('Failed to update appointment status');
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'confirmed': return 'bg-green-100 text-green-800';
      case 'cancelled': return 'bg-red-100 text-red-800';
      default: return 'bg-yellow-100 text-yellow-800';
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-xl flex items-center gap-2">
          <Shield className="animate-spin h-5 w-5" />
          Loading...
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center gap-2">
            <Shield className="h-8 w-8 text-blue-600" />
            <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
          </div>
          <button
            onClick={handleLogout}
            className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition-colors"
          >
            Logout
          </button>
        </div>

        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <div className="px-4 py-5 sm:px-6 border-b border-gray-200">
            <h2 className="text-lg font-medium text-gray-900">Appointment Requests</h2>
          </div>

          <div className="divide-y divide-gray-200">
            {appointments.map((appointment) => (
              <div key={appointment._id} className="p-6 hover:bg-gray-50 transition-colors">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <h3 className="text-lg font-medium text-gray-900 mb-1">{appointment.name}</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex items-center gap-2 text-gray-500">
                        <Calendar className="h-4 w-4" />
                        {format(new Date(appointment.date), 'MMMM d, yyyy')}
                      </div>
                      <div className="flex items-center gap-2 text-gray-500">
                        <Clock className="h-4 w-4" />
                        {appointment.time}
                      </div>
                      <div className="flex items-center gap-2 text-gray-500">
                        <Mail className="h-4 w-4" />
                        {appointment.email}
                      </div>
                      <div className="flex items-center gap-2 text-gray-500">
                        <Phone className="h-4 w-4" />
                        {appointment.phone}
                      </div>
                    </div>
                    {appointment.message && (
                      <div className="mt-2 flex items-start gap-2 text-gray-700">
                        <MessageSquare className="h-4 w-4 mt-1" />
                        <p>{appointment.message}</p>
                      </div>
                    )}
                  </div>
                  <div className="ml-4 flex items-center gap-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(appointment.status)}`}>
                      {appointment.status.charAt(0).toUpperCase() + appointment.status.slice(1)}
                    </span>
                    {appointment.status === 'pending' && (
                      <div className="flex gap-2">
                        <button
                          onClick={() => updateAppointmentStatus(appointment._id, 'confirmed')}
                          className="p-2 text-green-600 hover:bg-green-50 rounded-full transition-colors"
                          title="Confirm appointment"
                        >
                          <CheckCircle className="h-5 w-5" />
                        </button>
                        <button
                          onClick={() => updateAppointmentStatus(appointment._id, 'cancelled')}
                          className="p-2 text-red-600 hover:bg-red-50 rounded-full transition-colors"
                          title="Cancel appointment"
                        >
                          <XCircle className="h-5 w-5" />
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
            {appointments.length === 0 && (
              <div className="px-4 py-5 text-center text-gray-500">
                No appointment requests yet.
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Admin;