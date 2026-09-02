import React, { useEffect, useState } from 'react';
import { getCurrentUser, getBookings } from '../../utils/storage';
import type { Booking } from '../../types';
import { Ticket, Clock, CheckCircle2, XCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const CustomerDashboard = () => {
  const user = getCurrentUser();
  const [bookings, setBookings] = useState<Booking[]>([]);

  useEffect(() => {
    if (user) {
      const userBookings = getBookings().filter(b => b.userId === user.id);
      setBookings(userBookings.sort((a, b) => new Date(b.bookingDate).getTime() - new Date(a.bookingDate).getTime()).reverse());
    }
  }, [user]);

  const activeBookings = bookings.filter(b => b.status === 'CONFIRMED');
  const completedBookings = bookings.filter(b => b.status === 'COMPLETED');
  const cancelledBookings = bookings.filter(b => b.status === 'CANCELLED');

  return (
    <div className="max-w-6xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">Welcome, {user?.name}</h1>
        <p className="text-gray-400">Here is an overview of your bookings and activities.</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
        <div className="glass p-6 rounded-xl border border-gray-800">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-primary-500/20 text-primary-500 flex items-center justify-center">
              <Ticket size={24} />
            </div>
            <div>
              <p className="text-sm text-gray-400 mb-1">Total Bookings</p>
              <h3 className="text-2xl font-bold text-white">{bookings.length}</h3>
            </div>
          </div>
        </div>
        
        <div className="glass p-6 rounded-xl border border-gray-800">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-blue-500/20 text-blue-500 flex items-center justify-center">
              <Clock size={24} />
            </div>
            <div>
              <p className="text-sm text-gray-400 mb-1">Upcoming</p>
              <h3 className="text-2xl font-bold text-white">{activeBookings.length}</h3>
            </div>
          </div>
        </div>
        
        <div className="glass p-6 rounded-xl border border-gray-800">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-green-500/20 text-green-500 flex items-center justify-center">
              <CheckCircle2 size={24} />
            </div>
            <div>
              <p className="text-sm text-gray-400 mb-1">Completed</p>
              <h3 className="text-2xl font-bold text-white">{completedBookings.length}</h3>
            </div>
          </div>
        </div>

        <div className="glass p-6 rounded-xl border border-gray-800">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-red-500/20 text-red-500 flex items-center justify-center">
              <XCircle size={24} />
            </div>
            <div>
              <p className="text-sm text-gray-400 mb-1">Cancelled</p>
              <h3 className="text-2xl font-bold text-white">{cancelledBookings.length}</h3>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Bookings Overview */}
      <div>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-white">Recent Activity</h2>
          <Link to="/customer/bookings" className="text-primary-500 hover:text-primary-400 text-sm font-medium">View All</Link>
        </div>
        
        {bookings.length > 0 ? (
          <div className="glass rounded-xl border border-gray-800 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead className="bg-gray-800/50 text-gray-400 text-sm">
                  <tr>
                    <th className="px-6 py-4 font-medium">Booking ID</th>
                    <th className="px-6 py-4 font-medium">Date Booked</th>
                    <th className="px-6 py-4 font-medium">Tickets</th>
                    <th className="px-6 py-4 font-medium">Amount</th>
                    <th className="px-6 py-4 font-medium">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-800">
                  {bookings.slice(0, 5).map((booking) => (
                    <tr key={booking.id} className="hover:bg-gray-800/30 transition-colors">
                      <td className="px-6 py-4 text-white font-medium">{booking.id}</td>
                      <td className="px-6 py-4 text-gray-400">{new Date(booking.bookingDate).toLocaleDateString()}</td>
                      <td className="px-6 py-4 text-gray-400">{booking.seats.length}</td>
                      <td className="px-6 py-4 text-gray-400">₹{booking.totalAmount}</td>
                      <td className="px-6 py-4">
                        <span className={`inline-flex px-2.5 py-1 rounded-full text-xs font-medium
                          ${booking.status === 'CONFIRMED' ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30' :
                            booking.status === 'COMPLETED' ? 'bg-green-500/20 text-green-400 border border-green-500/30' :
                            'bg-red-500/20 text-red-400 border border-red-500/30'
                          }
                        `}>
                          {booking.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ) : (
          <div className="glass p-12 rounded-xl border border-gray-800 text-center">
            <div className="w-16 h-16 rounded-full bg-gray-800 flex items-center justify-center mx-auto mb-4">
              <Ticket size={32} className="text-gray-500" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">No bookings yet</h3>
            <p className="text-gray-400 mb-6">Looks like you haven't booked any movies yet.</p>
            <Link to="/movies" className="inline-flex items-center justify-center h-10 px-6 rounded-md bg-primary-600 text-white font-medium hover:bg-primary-500 transition-colors">
              Explore Movies
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default CustomerDashboard;
