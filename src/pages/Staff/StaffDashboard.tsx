import React, { useEffect, useState } from 'react';
import { getBookings, getShows } from '../../utils/storage';
import type { Booking, Show } from '../../types';
import { Ticket, DollarSign, Calendar as CalendarIcon, Users, ScanLine, CheckCircle2 } from 'lucide-react';
import Badge from '../../components/ui/Badge';
import Button from '../../components/ui/Button';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useToast } from '../../context/ToastContext';

const StaffDashboard = () => {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [shows, setShows] = useState<Show[]>([]);
  const [scanInput, setScanInput] = useState('');
  const [scanResult, setScanResult] = useState<{success: boolean, message: string} | null>(null);
  const { addToast } = useToast();

  useEffect(() => {
    setBookings(getBookings());
    setShows(getShows());
  }, []);

  const totalBookings = bookings.length;
  const confirmedBookings = bookings.filter(b => b.status === 'CONFIRMED');
  const cancelledBookings = bookings.filter(b => b.status === 'CANCELLED');
  const revenue = confirmedBookings.reduce((sum, b) => sum + b.totalAmount, 0);

  const handleScan = (e: React.FormEvent) => {
    e.preventDefault();
    if (!scanInput.trim()) return;

    // Simulate scanning delay
    setTimeout(() => {
      const booking = bookings.find(b => b.id === scanInput.trim());
      if (booking) {
        if (booking.status === 'CONFIRMED') {
          setScanResult({ success: true, message: `Ticket Valid! Admitting ${booking.seats.length} guests for seats ${booking.seats.join(', ')}.` });
          addToast('Ticket scanned successfully.', 'success');
        } else {
          setScanResult({ success: false, message: `Invalid Ticket Status: ${booking.status}` });
          addToast('Invalid ticket status.', 'error');
        }
      } else {
        setScanResult({ success: false, message: 'Ticket not found in the system.' });
        addToast('Ticket not found.', 'error');
      }
      setScanInput('');
    }, 800);
  };

  const statCards = [
    { title: 'Total Bookings', value: totalBookings, icon: <Ticket size={24} />, color: 'text-blue-500', bg: 'bg-blue-500/20' },
    { title: 'Confirmed', value: confirmedBookings.length, icon: <CalendarIcon size={24} />, color: 'text-green-500', bg: 'bg-green-500/20' },
    { title: 'Cancelled', value: cancelledBookings.length, icon: <Users size={24} />, color: 'text-red-500', bg: 'bg-red-500/20' },
    { title: 'Total Revenue', value: `₹${revenue}`, icon: <DollarSign size={24} />, color: 'text-primary-500', bg: 'bg-primary-500/20' }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-7xl mx-auto"
    >
      <div className="mb-8 flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Staff Dashboard</h1>
          <p className="text-gray-400">Overview of today's cinema operations and ticket scanning.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
        <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {statCards.map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="glass p-6 rounded-xl border border-gray-800"
            >
              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 rounded-full ${card.bg} ${card.color} flex items-center justify-center`}>
                  {card.icon}
                </div>
                <div>
                  <p className="text-sm text-gray-400 mb-1">{card.title}</p>
                  <h3 className="text-2xl font-bold text-white">{card.value}</h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Ticket Scanner Tool */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="glass p-6 rounded-xl border border-primary-500/30 bg-primary-500/5 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 p-4 opacity-10">
            <ScanLine size={100} />
          </div>
          <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2 relative z-10">
            <ScanLine className="text-primary-500" /> Ticket Scanner
          </h2>
          <form onSubmit={handleScan} className="relative z-10">
            <input 
              type="text" 
              value={scanInput}
              onChange={(e) => setScanInput(e.target.value.toUpperCase())}
              placeholder="Enter Booking ID (e.g. CW-2026-...)" 
              className="w-full bg-gray-900 border border-gray-700 text-white rounded-lg px-4 py-3 mb-4 focus:outline-none focus:border-primary-500 font-mono"
            />
            <Button type="submit" className="w-full">Verify Ticket</Button>
          </form>

          {scanResult && (
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`mt-4 p-3 rounded-lg flex items-start gap-2 text-sm ${scanResult.success ? 'bg-green-500/20 text-green-400 border border-green-500/30' : 'bg-red-500/20 text-red-400 border border-red-500/30'}`}
            >
              {scanResult.success ? <CheckCircle2 size={18} className="shrink-0 mt-0.5" /> : <ScanLine size={18} className="shrink-0 mt-0.5" />}
              <p>{scanResult.message}</p>
            </motion.div>
          )}
        </motion.div>
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
    </motion.div>
  );
};

export default StaffDashboard;
