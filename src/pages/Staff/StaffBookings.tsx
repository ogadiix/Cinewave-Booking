import React, { useState, useEffect } from 'react';
import { getBookings, saveBookings, getUsers, getShows, getMovies } from '../../utils/storage';
import type { Booking, User, Show, Movie } from '../../types';
import Badge from '../../components/ui/Badge';
import { useToast } from '../../context/ToastContext';
import { Search, Filter } from 'lucide-react';

interface EnrichedBooking extends Booking {
  user?: User;
  show?: Show;
  movie?: Movie;
}

const StaffBookings = () => {
  const [bookings, setBookings] = useState<EnrichedBooking[]>([]);
  const [filteredBookings, setFilteredBookings] = useState<EnrichedBooking[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('');
  
  const { addToast } = useToast();

  const loadBookings = () => {
    const allBookings = getBookings();
    const allUsers = getUsers();
    const allShows = getShows();
    const allMovies = getMovies();
    
    const enriched = allBookings.map(b => {
      const user = allUsers.find(u => u.id === b.userId);
      const show = allShows.find(s => s.id === b.showId);
      const movie = show ? allMovies.find(m => m.id === show.movieId) : undefined;
      
      return { ...b, user, show, movie };
    });
    
    // Sort by newest first
    const sorted = enriched.sort((a, b) => new Date(b.bookingDate).getTime() - new Date(a.bookingDate).getTime()).reverse();
    setBookings(sorted);
    setFilteredBookings(sorted);
  };

  useEffect(() => {
    loadBookings();
  }, []);

  useEffect(() => {
    let result = bookings;
    
    if (searchTerm) {
      const lower = searchTerm.toLowerCase();
      result = result.filter(b => 
        b.id.toLowerCase().includes(lower) || 
        b.user?.name.toLowerCase().includes(lower) || 
        b.movie?.title.toLowerCase().includes(lower)
      );
    }
    
    if (statusFilter) {
      result = result.filter(b => b.status === statusFilter);
    }
    
    setFilteredBookings(result);
  }, [searchTerm, statusFilter, bookings]);

  const handleStatusChange = (bookingId: string, newStatus: 'CONFIRMED' | 'CANCELLED' | 'COMPLETED') => {
    const allBookings = getBookings();
    const updatedBookings = allBookings.map(b => 
      b.id === bookingId ? { ...b, status: newStatus } : b
    );
    
    saveBookings(updatedBookings);
    addToast(`Booking ${bookingId} marked as ${newStatus}`, 'success');
    loadBookings();
  };

  return (
    <div className="max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">Manage Bookings</h1>
        <p className="text-gray-400">View and update customer booking statuses.</p>
      </div>
      
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={20} />
          <input 
            type="text" 
            placeholder="Search by ID, User, or Movie..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-gray-800 border border-gray-700 text-white rounded-lg pl-10 pr-4 py-2.5 focus:outline-none focus:border-primary-500 transition-colors"
          />
        </div>
        
        <div className="relative w-full md:w-64">
          <Filter className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
          <select 
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="w-full appearance-none bg-gray-800 border border-gray-700 text-white rounded-lg pl-10 pr-10 py-2.5 focus:outline-none focus:border-primary-500 transition-colors cursor-pointer"
          >
            <option value="">All Statuses</option>
            <option value="CONFIRMED">Confirmed</option>
            <option value="COMPLETED">Completed</option>
            <option value="CANCELLED">Cancelled</option>
          </select>
        </div>
      </div>
      
      <div className="glass rounded-xl border border-gray-800 overflow-hidden">
        <div className="overflow-x-auto min-h-[400px]">
          <table className="w-full text-left">
            <thead className="bg-gray-800/50 text-gray-400 text-sm border-b border-gray-800">
              <tr>
                <th className="px-6 py-4 font-medium">Booking ID</th>
                <th className="px-6 py-4 font-medium">Customer</th>
                <th className="px-6 py-4 font-medium">Movie & Show</th>
                <th className="px-6 py-4 font-medium">Seats & Amount</th>
                <th className="px-6 py-4 font-medium">Status</th>
                <th className="px-6 py-4 font-medium text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-800">
              {filteredBookings.length > 0 ? (
                filteredBookings.map(booking => (
                  <tr key={booking.id} className="hover:bg-gray-800/30 transition-colors">
                    <td className="px-6 py-4 text-white font-medium text-sm">
                      {booking.id}
                      <div className="text-xs text-gray-500 font-normal mt-1">{new Date(booking.bookingDate).toLocaleDateString()}</div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-white text-sm">{booking.user?.name || 'Unknown User'}</div>
                      <div className="text-xs text-gray-500">{booking.user?.email}</div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-white text-sm line-clamp-1">{booking.movie?.title || 'Unknown Movie'}</div>
                      <div className="text-xs text-gray-500">
                        {booking.show ? `${new Date(booking.show.date).toLocaleDateString()} • ${booking.show.time}` : 'Unknown Show'}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-white text-sm">{booking.seats.length} Seats: {booking.seats.join(',')}</div>
                      <div className="text-xs text-gray-500">₹{booking.totalAmount}</div>
                    </td>
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
                    <td className="px-6 py-4 text-right">
                      <div className="flex justify-end gap-2">
                        {booking.status === 'CONFIRMED' && (
                          <>
                            <button 
                              onClick={() => handleStatusChange(booking.id, 'COMPLETED')}
                              className="text-xs px-3 py-1.5 rounded-md bg-green-500/10 text-green-500 hover:bg-green-500/20 transition-colors border border-green-500/20"
                            >
                              Complete
                            </button>
                            <button 
                              onClick={() => handleStatusChange(booking.id, 'CANCELLED')}
                              className="text-xs px-3 py-1.5 rounded-md bg-red-500/10 text-red-500 hover:bg-red-500/20 transition-colors border border-red-500/20"
                            >
                              Cancel
                            </button>
                          </>
                        )}
                        {booking.status !== 'CONFIRMED' && (
                          <span className="text-xs text-gray-500 italic">No actions available</span>
                        )}
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={6} className="px-6 py-12 text-center text-gray-500">
                    No bookings match your search criteria.
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

export default StaffBookings;
