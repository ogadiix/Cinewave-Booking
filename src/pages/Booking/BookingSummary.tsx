import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { getShows, getMovies, getTheatres, getBookings, saveBookings, getCurrentUser } from '../../utils/storage';
import type { Show, Movie, Theatre } from '../../types';
import Button from '../../components/ui/Button';
import { useToast } from '../../context/ToastContext';
import { ArrowLeft, Ticket, CreditCard, ShieldCheck } from 'lucide-react';

const BookingSummary = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { addToast } = useToast();
  
  const showId = location.state?.showId;
  const selectedSeats = location.state?.selectedSeats || [];
  
  const [show, setShow] = useState<Show | null>(null);
  const [movie, setMovie] = useState<Movie | null>(null);
  const [theatre, setTheatre] = useState<Theatre | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);

  useEffect(() => {
    if (!showId || selectedSeats.length === 0) {
      navigate('/movies');
      return;
    }

    const currentShow = getShows().find(s => s.id === showId);
    if (currentShow) {
      setShow(currentShow);
      setMovie(getMovies().find(m => m.id === currentShow.movieId) || null);
      setTheatre(getTheatres().find(t => t.id === currentShow.theatreId) || null);
    }
  }, [showId, selectedSeats, navigate]);

  const handleConfirmBooking = () => {
    const user = getCurrentUser();
    
    if (!user) {
      addToast('Please login to continue booking', 'info');
      // Save pending booking info to localStorage or state before redirecting
      // For simplicity in this demo, just redirect to login
      navigate('/login', { state: { returnTo: '/booking/summary', showId, selectedSeats } });
      return;
    }

    setIsProcessing(true);

    // Simulate network delay
    setTimeout(() => {
      if (!show) return;
      
      const newBooking = {
        id: `CW-${new Date().getFullYear()}-${Math.floor(Math.random() * 1000000).toString().padStart(6, '0')}`,
        userId: user.id,
        showId: show.id,
        seats: selectedSeats,
        totalAmount: selectedSeats.length * show.ticketPrice,
        status: 'CONFIRMED' as const,
        bookingDate: new Date().toISOString()
      };

      const bookings = getBookings();
      saveBookings([...bookings, newBooking]);

      setIsProcessing(false);
      addToast('Booking confirmed successfully!', 'success');
      navigate('/booking/confirmation', { state: { bookingId: newBooking.id } });
    }, 1500);
  };

  if (!show || !movie || !theatre) return null;

  const subtotal = selectedSeats.length * show.ticketPrice;
  const convenienceFee = selectedSeats.length * 30; // 30 per ticket
  const taxes = subtotal * 0.18; // 18% GST
  const total = subtotal + convenienceFee + taxes;

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <button 
        onClick={() => navigate(-1)} 
        className="flex items-center gap-2 text-gray-400 hover:text-white mb-6 transition-colors"
      >
        <ArrowLeft size={20} /> Back to Seats
      </button>

      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">Booking Summary</h1>
        <p className="text-gray-400">Review your booking details before confirmation.</p>
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        <div className="flex-1 space-y-6">
          <div className="glass p-6 rounded-xl border border-gray-800">
            <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
              <Ticket className="text-primary-500" /> Tickets
            </h3>
            
            <div className="flex gap-4">
              <img src={movie.poster} alt={movie.title} className="w-24 h-36 object-cover rounded-lg shadow-md" />
              <div>
                <h4 className="text-xl font-bold text-white mb-1">{movie.title}</h4>
                <p className="text-sm text-gray-400 mb-4">{movie.language} • {movie.duration}</p>
                
                <div className="space-y-1 text-sm text-gray-300">
                  <p><span className="text-gray-500 mr-2">Theatre:</span> {theatre.name}, {theatre.location}</p>
                  <p><span className="text-gray-500 mr-2">Date:</span> {new Date(show.date).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
                  <p><span className="text-gray-500 mr-2">Time:</span> {show.time}</p>
                  <p><span className="text-gray-500 mr-2">Seats:</span> <span className="font-medium text-white">{selectedSeats.join(', ')}</span> ({selectedSeats.length} Tickets)</p>
                </div>
              </div>
            </div>
          </div>

          <div className="glass p-6 rounded-xl border border-gray-800">
            <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
              <ShieldCheck className="text-primary-500" /> Cancellation Policy
            </h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              Cancellations are allowed up to 4 hours before the showtime. A cancellation fee of 20% will be deducted from the refund amount. Convenience fees are non-refundable.
            </p>
          </div>
        </div>

        <div className="w-full md:w-80">
          <div className="glass p-6 rounded-xl border border-gray-800 sticky top-24">
            <h3 className="text-xl font-bold text-white mb-6">Payment Summary</h3>
            
            <div className="space-y-4 mb-6 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-400">Tickets ({selectedSeats.length} × ₹{show.ticketPrice})</span>
                <span className="text-white">₹{subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Convenience Fee</span>
                <span className="text-white">₹{convenienceFee.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Taxes (18% GST)</span>
                <span className="text-white">₹{taxes.toFixed(2)}</span>
              </div>
            </div>

            <div className="pt-4 border-t border-gray-800 mb-8">
              <div className="flex justify-between items-center">
                <span className="text-white font-medium">Amount Payable</span>
                <span className="text-2xl font-bold text-primary-500">₹{total.toFixed(2)}</span>
              </div>
            </div>

            <Button 
              className="w-full" 
              size="lg"
              isLoading={isProcessing}
              onClick={handleConfirmBooking}
            >
              <CreditCard className="mr-2" size={20} /> 
              {isProcessing ? 'Processing...' : 'Confirm Booking'}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingSummary;
