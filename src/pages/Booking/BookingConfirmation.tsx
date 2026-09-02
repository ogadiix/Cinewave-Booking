import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { getBookings, getShows, getMovies, getTheatres } from '../../utils/storage';
import type { Booking, Show, Movie, Theatre } from '../../types';
import Button from '../../components/ui/Button';
import { CheckCircle2, QrCode, ArrowRight, Download } from 'lucide-react';

const BookingConfirmation = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
  const bookingId = location.state?.bookingId;
  
  const [booking, setBooking] = useState<Booking | null>(null);
  const [show, setShow] = useState<Show | null>(null);
  const [movie, setMovie] = useState<Movie | null>(null);
  const [theatre, setTheatre] = useState<Theatre | null>(null);

  useEffect(() => {
    if (!bookingId) {
      navigate('/movies');
      return;
    }

    const currentBooking = getBookings().find(b => b.id === bookingId);
    if (currentBooking) {
      setBooking(currentBooking);
      
      const currentShow = getShows().find(s => s.id === currentBooking.showId);
      if (currentShow) {
        setShow(currentShow);
        setMovie(getMovies().find(m => m.id === currentShow.movieId) || null);
        setTheatre(getTheatres().find(t => t.id === currentShow.theatreId) || null);
      }
    } else {
      navigate('/movies');
    }
  }, [bookingId, navigate]);

  if (!booking || !show || !movie || !theatre) return null;

  return (
    <div className="container mx-auto px-4 py-12 max-w-2xl text-center">
      <div className="flex justify-center mb-6 animate-bounce">
        <CheckCircle2 size={80} className="text-green-500" />
      </div>
      
      <h1 className="text-4xl font-bold text-white mb-2">Booking Confirmed!</h1>
      <p className="text-gray-400 mb-8">Your tickets have been successfully booked.</p>

      <div className="glass p-8 rounded-2xl border border-green-500/30 bg-green-500/5 mb-8 relative overflow-hidden text-left shadow-lg shadow-green-500/10">
        <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/10 rounded-bl-full pointer-events-none" />
        
        <div className="flex flex-col md:flex-row gap-6 items-center md:items-start border-b border-gray-800 pb-6 mb-6">
          <img src={movie.poster} alt={movie.title} className="w-24 h-36 object-cover rounded-lg shadow-md" />
          <div className="flex-1 text-center md:text-left">
            <div className="text-sm text-green-400 font-medium mb-1">Booking Reference</div>
            <h2 className="text-2xl font-bold text-white mb-4 tracking-wider">{booking.id}</h2>
            <h3 className="text-xl font-bold text-white">{movie.title}</h3>
            <p className="text-gray-400">{movie.language} • {movie.rating}</p>
          </div>
          <div className="p-4 bg-white rounded-xl">
            <QrCode size={80} className="text-gray-900" />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <p className="text-gray-500 mb-1">Theatre</p>
            <p className="text-white font-medium">{theatre.name}</p>
            <p className="text-gray-400 text-xs">{theatre.location}</p>
          </div>
          <div>
            <p className="text-gray-500 mb-1">Date & Time</p>
            <p className="text-white font-medium">{new Date(show.date).toLocaleDateString()}</p>
            <p className="text-gray-400 text-xs">{show.time}</p>
          </div>
          <div>
            <p className="text-gray-500 mb-1">Tickets ({booking.seats.length})</p>
            <p className="text-white font-medium">{booking.seats.join(', ')}</p>
          </div>
          <div>
            <p className="text-gray-500 mb-1">Total Paid</p>
            <p className="text-white font-medium">₹{booking.totalAmount}</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <Link to={`/ticket/${booking.id}`}>
          <Button size="lg" className="w-full sm:w-auto">
            <Download className="mr-2" size={20} /> View & Download Ticket
          </Button>
        </Link>
        <Link to="/customer/bookings">
          <Button variant="outline" size="lg" className="w-full sm:w-auto">
            My Bookings <ArrowRight className="ml-2" size={20} />
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default BookingConfirmation;
