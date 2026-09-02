import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { getShows, getMovies, getTheatres, getBookings, saveBookings, getCurrentUser } from '../../utils/storage';
import type { Show, Movie, Theatre } from '../../types';
import Button from '../../components/ui/Button';
import { useToast } from '../../context/ToastContext';
import { ArrowLeft, Ticket, CreditCard, ShieldCheck, Lock, Smartphone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const BookingSummary = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { addToast } = useToast();
  
  const showId = location.state?.showId;
  const selectedSeats = location.state?.selectedSeats || [];
  
  const [show, setShow] = useState<Show | null>(null);
  const [movie, setMovie] = useState<Movie | null>(null);
  const [theatre, setTheatre] = useState<Theatre | null>(null);
  
  const [paymentStep, setPaymentStep] = useState<'summary' | 'payment' | 'processing'>('summary');
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'upi'>('card');

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

  const handleProceedToPayment = () => {
    const user = getCurrentUser();
    if (!user) {
      addToast('Please login to continue booking', 'info');
      navigate('/login', { state: { returnTo: '/booking/summary', showId, selectedSeats } });
      return;
    }
    setPaymentStep('payment');
  };

  const handleProcessPayment = (e: React.FormEvent) => {
    e.preventDefault();
    setPaymentStep('processing');

    setTimeout(() => {
      if (!show) return;
      const user = getCurrentUser();
      
      const newBooking = {
        id: `CW-${new Date().getFullYear()}-${Math.floor(Math.random() * 1000000).toString().padStart(6, '0')}`,
        userId: user!.id,
        showId: show.id,
        seats: selectedSeats,
        totalAmount: selectedSeats.length * show.ticketPrice,
        status: 'CONFIRMED' as const,
        bookingDate: new Date().toISOString()
      };

      const bookings = getBookings();
      saveBookings([...bookings, newBooking]);

      addToast('Payment successful!', 'success');
      navigate('/booking/confirmation', { state: { bookingId: newBooking.id } });
    }, 2500); // Simulate network delay
  };

  if (!show || !movie || !theatre) return null;

  const subtotal = selectedSeats.length * show.ticketPrice;
  const convenienceFee = selectedSeats.length * 30; // 30 per ticket
  const taxes = subtotal * 0.18; // 18% GST
  const total = subtotal + convenienceFee + taxes;

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl relative min-h-[70vh]">
      {paymentStep === 'summary' && (
        <button 
          onClick={() => navigate(-1)} 
          className="flex items-center gap-2 text-gray-400 hover:text-white mb-6 transition-colors"
        >
          <ArrowLeft size={20} /> Back to Seats
        </button>
      )}

      {paymentStep === 'payment' && (
        <button 
          onClick={() => setPaymentStep('summary')} 
          className="flex items-center gap-2 text-gray-400 hover:text-white mb-6 transition-colors"
        >
          <ArrowLeft size={20} /> Back to Summary
        </button>
      )}

      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">
          {paymentStep === 'summary' ? 'Booking Summary' : paymentStep === 'payment' ? 'Secure Payment' : 'Processing...'}
        </h1>
        <p className="text-gray-400">
          {paymentStep === 'summary' ? 'Review your booking details before confirmation.' : paymentStep === 'payment' ? 'Choose a payment method to complete your booking.' : 'Please do not refresh the page.'}
        </p>
      </div>

      <AnimatePresence mode="wait">
        {paymentStep === 'summary' && (
          <motion.div 
            key="summary"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col md:flex-row gap-8"
          >
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

                <Button className="w-full" size="lg" onClick={handleProceedToPayment}>
                  Proceed to Payment
                </Button>
              </div>
            </div>
          </motion.div>
        )}

        {paymentStep === 'payment' && (
          <motion.div 
            key="payment"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col md:flex-row gap-8"
          >
            <div className="flex-1">
              <div className="glass p-8 rounded-2xl border border-gray-800">
                <div className="flex gap-4 mb-8">
                  <button 
                    onClick={() => setPaymentMethod('card')}
                    className={`flex-1 py-4 rounded-xl border-2 flex flex-col items-center justify-center gap-2 transition-all ${paymentMethod === 'card' ? 'border-primary-500 bg-primary-500/10 text-white' : 'border-gray-700 text-gray-400 hover:border-gray-600 hover:text-gray-300'}`}
                  >
                    <CreditCard size={24} />
                    <span className="font-medium">Credit / Debit Card</span>
                  </button>
                  <button 
                    onClick={() => setPaymentMethod('upi')}
                    className={`flex-1 py-4 rounded-xl border-2 flex flex-col items-center justify-center gap-2 transition-all ${paymentMethod === 'upi' ? 'border-primary-500 bg-primary-500/10 text-white' : 'border-gray-700 text-gray-400 hover:border-gray-600 hover:text-gray-300'}`}
                  >
                    <Smartphone size={24} />
                    <span className="font-medium">UPI</span>
                  </button>
                </div>

                <form onSubmit={handleProcessPayment}>
                  {paymentMethod === 'card' ? (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-400 mb-2">Card Number</label>
                        <div className="relative">
                          <input type="text" required placeholder="4111 1111 1111 1111" className="w-full bg-gray-900 border border-gray-700 rounded-lg py-3 px-4 text-white focus:outline-none focus:border-primary-500 pl-12" />
                          <CreditCard className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500" size={18} />
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-400 mb-2">Expiry Date</label>
                          <input type="text" required placeholder="MM/YY" className="w-full bg-gray-900 border border-gray-700 rounded-lg py-3 px-4 text-white focus:outline-none focus:border-primary-500" />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-400 mb-2">CVV</label>
                          <input type="password" required placeholder="123" maxLength={3} className="w-full bg-gray-900 border border-gray-700 rounded-lg py-3 px-4 text-white focus:outline-none focus:border-primary-500" />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-400 mb-2">Name on Card</label>
                        <input type="text" required placeholder="John Doe" className="w-full bg-gray-900 border border-gray-700 rounded-lg py-3 px-4 text-white focus:outline-none focus:border-primary-500" />
                      </div>
                    </motion.div>
                  ) : (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4 py-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-400 mb-2">UPI ID</label>
                        <input type="text" required placeholder="username@upi" className="w-full bg-gray-900 border border-gray-700 rounded-lg py-3 px-4 text-white focus:outline-none focus:border-primary-500" />
                      </div>
                      <p className="text-sm text-gray-500 mt-4 text-center">A payment request will be sent to your UPI app.</p>
                    </motion.div>
                  )}

                  <div className="mt-8 flex items-center justify-between">
                    <div className="flex items-center gap-2 text-gray-400 text-sm">
                      <Lock size={16} /> 256-bit secure connection
                    </div>
                    <Button type="submit" size="lg" className="w-48">
                      Pay ₹{total.toFixed(2)}
                    </Button>
                  </div>
                </form>
              </div>
            </div>

            <div className="w-full md:w-80 hidden md:block">
              <div className="glass p-6 rounded-xl border border-gray-800 sticky top-24">
                <div className="flex gap-4 mb-4 pb-4 border-b border-gray-800">
                  <img src={movie.poster} alt={movie.title} className="w-12 h-16 object-cover rounded-md" />
                  <div>
                    <h4 className="font-bold text-white text-sm line-clamp-1">{movie.title}</h4>
                    <p className="text-xs text-gray-400">{selectedSeats.length} Tickets</p>
                  </div>
                </div>
                <div className="flex justify-between items-center text-lg">
                  <span className="text-white font-medium">Total Payable</span>
                  <span className="font-bold text-primary-500">₹{total.toFixed(2)}</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {paymentStep === 'processing' && (
          <motion.div 
            key="processing"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="absolute inset-0 flex flex-col items-center justify-center glass rounded-2xl border border-gray-800 z-10 p-12"
          >
            <div className="relative mb-8">
              <div className="w-20 h-20 border-4 border-gray-800 rounded-full"></div>
              <div className="w-20 h-20 border-4 border-primary-500 rounded-full border-t-transparent animate-spin absolute inset-0"></div>
              <Lock className="absolute inset-0 m-auto text-primary-500" size={24} />
            </div>
            <h2 className="text-2xl font-bold text-white mb-2">Processing Payment</h2>
            <p className="text-gray-400 max-w-md text-center">Please wait while we securely process your payment. Do not hit back or close the browser.</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default BookingSummary;
