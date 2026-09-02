import React, { useEffect, useState } from 'react';
import { getCurrentUser, getBookings, getShows, getMovies, getTheatres, saveBookings } from '../../utils/storage';
import type { Booking, Show, Movie, Theatre } from '../../types';
import Button from '../../components/ui/Button';
import { useToast } from '../../context/ToastContext';
import { Ticket, XCircle, Download, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import Badge from '../../components/ui/Badge';

// Helper interface to hold all related data for easy rendering
interface EnrichedBooking extends Booking {
  show?: Show;
  movie?: Movie;
  theatre?: Theatre;
}

const MyBookings = () => {
  const user = getCurrentUser();
  const { addToast } = useToast();
  const [bookings, setBookings] = useState<EnrichedBooking[]>([]);

  const loadBookings = () => {
    if (user) {
      const userBookings = getBookings().filter(b => b.userId === user.id);
      
      const allShows = getShows();
      const allMovies = getMovies();
      const allTheatres = getTheatres();

      const enriched = userBookings.map(b => {
        const show = allShows.find(s => s.id === b.showId);
        const movie = show ? allMovies.find(m => m.id === show.movieId) : undefined;
        const theatre = show ? allTheatres.find(t => t.id === show.theatreId) : undefined;
        
        return { ...b, show, movie, theatre };
      });

      setBookings(enriched.sort((a, b) => new Date(b.bookingDate).getTime() - new Date(a.bookingDate).getTime()).reverse());
    }
  };

  useEffect(() => {
    loadBookings();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  const handleCancelBooking = (bookingId: string) => {
    const confirmCancel = window.confirm('Are you sure you want to cancel this booking? A 20% cancellation fee will apply.');
    
    if (confirmCancel) {
      const allBookings = getBookings();
      const updatedBookings = allBookings.map(b => 
        b.id === bookingId ? { ...b, status: 'CANCELLED' as const } : b
      );
      
      saveBookings(updatedBookings);
      addToast('Booking cancelled successfully', 'success');
      loadBookings();
    }
  };

  return (
    <div className="max-w-6xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">My Bookings</h1>
        <p className="text-gray-400">View and manage your ticket bookings.</p>
      </div>

      {bookings.length > 0 ? (
        <div className="space-y-6">
          {bookings.map((booking) => (
            <div key={booking.id} className="glass rounded-xl border border-gray-800 overflow-hidden flex flex-col md:flex-row">
              {/* Left Side (Movie Info) */}
              <div className="md:w-1/3 bg-gray-800/50 p-6 flex items-start gap-4 border-b md:border-b-0 md:border-r border-gray-800">
                {booking.movie ? (
                  <img src={booking.movie.poster} alt={booking.movie.title} className="w-20 h-28 object-cover rounded-md shadow-md" />
                ) : (
                  <div className="w-20 h-28 bg-gray-700 rounded-md flex items-center justify-center">
                    <Ticket className="text-gray-500" />
                  </div>
                )}
                
                <div>
                  <h3 className="font-bold text-white mb-1 leading-tight">
                    {booking.movie?.title || 'Unknown Movie'}
                  </h3>
                  <p className="text-sm text-gray-400 mb-2">{booking.movie?.language}</p>
                  
                  <Badge 
                    variant={
                      booking.status === 'CONFIRMED' ? 'success' :
                      booking.status === 'COMPLETED' ? 'outline' : 'danger'
                    }
                  >
                    {booking.status}
                  </Badge>
                </div>
              </div>

              {/* Middle (Booking Details) */}
              <div className="md:w-1/2 p-6">
                <div className="grid grid-cols-2 gap-4 text-sm mb-4">
                  <div>
                    <p className="text-gray-500 mb-1">Booking ID</p>
                    <p className="text-white font-medium">{booking.id}</p>
                  </div>
                  <div>
                    <p className="text-gray-500 mb-1">Total Paid</p>
                    <p className="text-white font-medium">₹{booking.totalAmount}</p>
                  </div>
                  <div>
                    <p className="text-gray-500 mb-1">Date & Time</p>
                    <p className="text-white font-medium">
                      {booking.show ? new Date(booking.show.date).toLocaleDateString() : 'N/A'} • {booking.show?.time || 'N/A'}
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-500 mb-1">Theatre</p>
                    <p className="text-white font-medium">{booking.theatre?.name || 'N/A'}</p>
                  </div>
                </div>
                
                <div>
                  <p className="text-gray-500 text-sm mb-1">Seats ({booking.seats.length})</p>
                  <p className="text-white font-bold">{booking.seats.join(', ')}</p>
                </div>
              </div>

              {/* Right Side (Actions) */}
              <div className="md:w-1/6 p-6 flex flex-row md:flex-col justify-center gap-3 border-t md:border-t-0 md:border-l border-gray-800 bg-gray-800/30">
                {booking.status === 'CONFIRMED' && (
                  <>
                    <Link to={`/ticket/${booking.id}`} className="w-full">
                      <Button variant="outline" className="w-full h-10 px-0 flex-1">
                        <Download size={16} className="mr-2" /> Ticket
                      </Button>
                    </Link>
                    <Button 
                      variant="danger" 
                      className="w-full h-10 px-0 flex-1"
                      onClick={() => handleCancelBooking(booking.id)}
                    >
                      <XCircle size={16} className="mr-2" /> Cancel
                    </Button>
                  </>
                )}
                
                {booking.status === 'CANCELLED' && (
                  <p className="text-sm text-center text-red-400 w-full">Cancelled</p>
                )}
                
                {booking.status === 'COMPLETED' && (
                  <p className="text-sm text-center text-green-400 w-full">Completed</p>
                )}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="glass p-12 rounded-xl border border-gray-800 text-center">
          <div className="w-16 h-16 rounded-full bg-gray-800 flex items-center justify-center mx-auto mb-4">
            <Ticket size={32} className="text-gray-500" />
          </div>
          <h3 className="text-lg font-bold text-white mb-2">No bookings found</h3>
          <p className="text-gray-400 mb-6">You haven't made any bookings yet.</p>
          <Link to="/movies" className="inline-flex items-center justify-center h-10 px-6 rounded-md bg-primary-600 text-white font-medium hover:bg-primary-500 transition-colors">
            Book Tickets Now
          </Link>
        </div>
      )}
    </div>
  );
};

export default MyBookings;
