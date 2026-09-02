import React, { useEffect, useState } from 'react';
import { getBookings, getShows } from '../../utils/storage';
import type { Booking, Show } from '../../types';
import { Ticket, DollarSign, Calendar as CalendarIcon, Users } from 'lucide-react';
import Badge from '../../components/ui/Badge';
import { Link } from 'react-router-dom';

const StaffDashboard = () => {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [shows, setShows] = useState<Show[]>([]);

  useEffect(() => {
    setBookings(getBookings());
    setShows(getShows());
  }, []);

  const totalBookings = bookings.length;
  
  // Calculate today's bookings (using a fixed mock date or dynamic date)
  // For demo purposes, let's just count all CONFIRMED bookings as "active"
  const confirmedBookings = bookings.filter(b => b.status === 'CONFIRMED');
  const cancelledBookings = bookings.filter(b => b.status === 'CANCELLED');
  
  const revenue = confirmedBookings.reduce((sum, b) => sum + b.totalAmount, 0);

  return (
    <div className="max-w-7xl mx-auto">
      <div className="mb-8 flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Staff Dashboard</h1>
          <p className="text-gray-400">Overview of today's cinema operations and bookings.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="glass p-6 rounded-xl border border-gray-800">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-blue-500/20 text-blue-500 flex items-center justify-center">
              <Ticket size={24} />
            </div>
            <div>
              <p className="text-sm text-gray-400 mb-1">Total Bookings</p>
              <h3 className="text-2xl font-bold text-white">{totalBookings}</h3>
            </div>
          </div>
        </div>

        <div className="glass p-6 rounded-xl border border-gray-800">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-green-500/20 text-green-500 flex items-center justify-center">
              <CalendarIcon size={24} />
            </div>
            <div>
              <p className="text-sm text-gray-400 mb-1">Confirmed</p>
              <h3 className="text-2xl font-bold text-white">{confirmedBookings.length}</h3>
            </div>
          </div>
        </div>

        <div className="glass p-6 rounded-xl border border-gray-800">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-red-500/20 text-red-500 flex items-center justify-center">
              <Users size={24} />
            </div>
            <div>
              <p className="text-sm text-gray-400 mb-1">Cancelled</p>
              <h3 className="text-2xl font-bold text-white">{cancelledBookings.length}</h3>
            </div>
          </div>
        </div>

        <div className="glass p-6 rounded-xl border border-gray-800">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-primary-500/20 text-primary-500 flex items-center justify-center">
              <DollarSign size={24} />
            </div>
            <div>
              <p className="text-sm text-gray-400 mb-1">Total Revenue</p>
              <h3 className="text-2xl font-bold text-white">₹{revenue}</h3>
            </div>
          </div>
        </div>
      </div>

      <div className="glass rounded-xl border border-gray-800 overflow-hidden">
        <div className="p-6 border-b border-gray-800 flex justify-between items-center">
          <h2 className="text-xl font-bold text-white">Recent Bookings</h2>
          <Link to="/staff/bookings" className="text-primary-500 hover:text-primary-400 text-sm font-medium">Manage All</Link>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-gray-800/50 text-gray-400 text-sm border-b border-gray-800">
              <tr>
                <th className="px-6 py-4 font-medium">ID</th>
                <th className="px-6 py-4 font-medium">User ID</th>
                <th className="px-6 py-4 font-medium">Show ID</th>
                <th className="px-6 py-4 font-medium">Seats</th>
                <th className="px-6 py-4 font-medium">Amount</th>
                <th className="px-6 py-4 font-medium">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-800">
              {bookings.length > 0 ? (
                bookings.slice().reverse().slice(0, 10).map(booking => (
                  <tr key={booking.id} className="hover:bg-gray-800/30 transition-colors">
                    <td className="px-6 py-4 text-white font-medium text-sm">{booking.id}</td>
                    <td className="px-6 py-4 text-gray-400 text-sm">{booking.userId}</td>
                    <td className="px-6 py-4 text-gray-400 text-sm">{booking.showId}</td>
                    <td className="px-6 py-4 text-gray-400 text-sm">{booking.seats.length}</td>
                    <td className="px-6 py-4 text-gray-400 text-sm">₹{booking.totalAmount}</td>
                    <td className="px-6 py-4">
                      <Badge 
                        variant={
                          booking.status === 'CONFIRMED' ? 'success' :
                          booking.status === 'COMPLETED' ? 'outline' : 'danger'
                        }
                      >
                        {booking.status}
                      </Badge>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={6} className="px-6 py-8 text-center text-gray-500">
                    No bookings found in the system.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default StaffDashboard;
