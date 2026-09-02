import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Outlet, Navigate } from 'react-router-dom';
import { initializeData } from './utils/storage';
import MainLayout from './layouts/MainLayout';
import DashboardLayout from './layouts/DashboardLayout';
import { ToastProvider } from './context/ToastContext';

import Home from './pages/Public/Home';
import Movies from './pages/Public/Movies';
import MovieDetails from './pages/Public/MovieDetails';
import Theatres from './pages/Public/Theatres';
import Login from './pages/Public/Login';
import Register from './pages/Public/Register';
import About from './pages/Public/About';
import Contact from './pages/Public/Contact';

import SeatSelection from './pages/Booking/SeatSelection';
import BookingSummary from './pages/Booking/BookingSummary';
import BookingConfirmation from './pages/Booking/BookingConfirmation';
import DigitalTicket from './pages/Booking/DigitalTicket';

import CustomerDashboard from './pages/Customer/CustomerDashboard';
import MyBookings from './pages/Customer/MyBookings';
import Profile from './pages/Customer/Profile';

// Staff Dashboard
import StaffDashboard from './pages/Staff/StaffDashboard';
import StaffBookings from './pages/Staff/StaffBookings';

// Admin Dashboard
import AdminDashboard from './pages/Admin/AdminDashboard';
import AdminMovies from './pages/Admin/AdminMovies';
import AdminTheatres from './pages/Admin/AdminTheatres';
import AdminShows from './pages/Admin/AdminShows';
import AdminPromoCodes from './pages/Admin/AdminPromoCodes';
import AdminSnacks from './pages/Admin/AdminSnacks';


function App() {
  useEffect(() => {
    initializeData();
  }, []);

  return (
    <ToastProvider>
      <Router>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/movie/:id" element={<MovieDetails />} />
            <Route path="/theatres" element={<Theatres />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            
            <Route path="/booking/seats" element={<SeatSelection />} />
            <Route path="/booking/summary" element={<BookingSummary />} />
            <Route path="/booking/confirmation" element={<BookingConfirmation />} />
            <Route path="/ticket/:id" element={<DigitalTicket />} />
          </Route>

          <Route path="/customer" element={<DashboardLayout />}>
            <Route path="dashboard" element={<CustomerDashboard />} />
            <Route path="bookings" element={<MyBookings />} />
            <Route path="profile" element={<Profile />} />
            <Route index element={<Navigate to="dashboard" replace />} />
          </Route>

          <Route path="/staff" element={<DashboardLayout />}>
            <Route path="dashboard" element={<StaffDashboard />} />
            <Route path="bookings" element={<StaffBookings />} />
            <Route index element={<Navigate to="dashboard" replace />} />
          </Route>

          <Route path="/admin" element={<DashboardLayout />}>
            <Route path="dashboard" element={<AdminDashboard />} />
            <Route path="movies" element={<AdminMovies />} />
            <Route path="theatres" element={<AdminTheatres />} />
            <Route path="shows" element={<AdminShows />} />
            <Route path="promocodes" element={<AdminPromoCodes />} />
            <Route path="snacks" element={<AdminSnacks />} />
            <Route index element={<Navigate to="dashboard" replace />} />
          </Route>
        </Routes>
      </Router>
    </ToastProvider>
  );
}

export default App;
