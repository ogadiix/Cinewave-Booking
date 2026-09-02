import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { getShows, getMovies, getTheatres, getBookings } from '../../utils/storage';
import type { Show, Movie, Theatre } from '../../types';
import Button from '../../components/ui/Button';
import { useToast } from '../../context/ToastContext';
import { ArrowLeft, Monitor } from 'lucide-react';

const SeatSelection = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { addToast } = useToast();
  
  const showId = location.state?.showId;
  
  const [show, setShow] = useState<Show | null>(null);
  const [movie, setMovie] = useState<Movie | null>(null);
  const [theatre, setTheatre] = useState<Theatre | null>(null);
  
  const [bookedSeats, setBookedSeats] = useState<string[]>([]);
  const [selectedSeats, setSelectedSeats] = useState<string[]>([]);
  
  // Seat layout configuration
  const rows = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
  const seatsPerRow = 8;
  const maxSelection = 8;

  useEffect(() => {
    if (!showId) {
      addToast('No show selected', 'error');
      navigate('/movies');
      return;
    }

    const currentShow = getShows().find(s => s.id === showId);
    if (currentShow) {
      setShow(currentShow);
      setMovie(getMovies().find(m => m.id === currentShow.movieId) || null);
      setTheatre(getTheatres().find(t => t.id === currentShow.theatreId) || null);

      // Find booked seats for this show
      const bookings = getBookings().filter(b => b.showId === showId && b.status === 'CONFIRMED');
      const allBookedSeats = bookings.flatMap(b => b.seats);
      setBookedSeats(allBookedSeats);
    } else {
      navigate('/movies');
    }
  }, [showId, navigate, addToast]);

  const toggleSeat = (seatId: string) => {
    if (bookedSeats.includes(seatId)) return;

    setSelectedSeats(prev => {
      if (prev.includes(seatId)) {
        return prev.filter(id => id !== seatId);
      } else {
        if (prev.length >= maxSelection) {
          addToast(`You can only select up to ${maxSelection} seats`, 'warning');
          return prev;
        }
        return [...prev, seatId];
      }
    });
  };

  const handleProceed = () => {
    if (selectedSeats.length === 0) {
      addToast('Please select at least one seat', 'warning');
      return;
    }
    
    navigate('/booking/summary', { 
      state: { 
        showId,
        selectedSeats
      } 
    });
  };

  if (!show || !movie || !theatre) return null;

  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <button 
        onClick={() => navigate(-1)} 
        className="flex items-center gap-2 text-gray-400 hover:text-white mb-6 transition-colors"
      >
        <ArrowLeft size={20} /> Back
      </button>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Main Seat Layout */}
        <div className="flex-1 glass p-8 rounded-2xl border border-gray-800">
          <div className="mb-12">
            <div className="h-2 bg-primary-500/50 rounded-full w-3/4 mx-auto blur-[2px] mb-2" />
            <div className="screen-curve" />
            <p className="text-center text-gray-400 text-sm flex items-center justify-center gap-2">
              <Monitor size={16} /> All eyes this way
            </p>
          </div>

          <div className="flex flex-col gap-4 items-center overflow-x-auto pb-4 hide-scrollbar">
            <div className="min-w-max pr-4 pl-2">
              {rows.map(row => (
                <div key={row} className="flex items-center gap-4 mb-4">
                  <span className="w-6 text-center text-gray-500 font-bold">{row}</span>
                  <div className="flex gap-2 sm:gap-3">
                    {Array.from({ length: seatsPerRow }).map((_, idx) => {
                      const seatId = `${row}${idx + 1}`;
                      const isBooked = bookedSeats.includes(seatId);
                      const isSelected = selectedSeats.includes(seatId);
                      
                      // Create an aisle in the middle
                      const isAisle = idx === Math.floor(seatsPerRow / 2) - 1;
                      
                      return (
                        <React.Fragment key={seatId}>
                          <button
                            onClick={() => toggleSeat(seatId)}
                            disabled={isBooked}
                            className={`
                              w-8 h-8 sm:w-10 sm:h-10 rounded-t-lg rounded-b-sm text-xs font-medium transition-all
                              flex items-center justify-center
                              ${isBooked 
                                ? 'bg-gray-800 text-gray-600 cursor-not-allowed border border-gray-700' 
                                : isSelected
                                  ? 'bg-primary-500 text-white shadow-lg shadow-primary-500/40 transform -translate-y-1'
                                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600 border border-gray-600'
                              }
                            `}
                          >
                            {isSelected ? seatId : ''}
                          </button>
                          {isAisle && <div className="w-4 sm:w-8" />} {/* Aisle */}
                        </React.Fragment>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 flex justify-center gap-8">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-t text-xs font-medium bg-gray-700 border border-gray-600" />
              <span className="text-sm text-gray-400">Available</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-t text-xs font-medium bg-primary-500 shadow-md shadow-primary-500/40" />
              <span className="text-sm text-gray-400">Selected</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-t text-xs font-medium bg-gray-800 border border-gray-700" />
              <span className="text-sm text-gray-400">Sold</span>
            </div>
          </div>
        </div>

        {/* Sidebar Summary */}
        <div className="w-full lg:w-80">
          <div className="glass p-6 rounded-xl border border-gray-800 sticky top-24">
            <h3 className="text-xl font-bold text-white mb-4">Booking Details</h3>
            
            <div className="flex gap-4 mb-6 pb-6 border-b border-gray-800">
              <img src={movie.poster} alt={movie.title} className="w-16 h-24 object-cover rounded-md" />
              <div>
                <h4 className="font-bold text-white mb-1">{movie.title}</h4>
                <p className="text-sm text-gray-400">{movie.language} • {movie.rating}</p>
                <p className="text-sm text-gray-400 mt-2">{theatre.name}</p>
              </div>
            </div>
            
            <div className="mb-6 space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-400">Date</span>
                <span className="text-white font-medium">{new Date(show.date).toLocaleDateString()}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Time</span>
                <span className="text-white font-medium">{show.time}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Tickets</span>
                <span className="text-white font-medium">{selectedSeats.length}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Seats</span>
                <span className="text-white font-medium text-right max-w-[150px]">
                  {selectedSeats.length > 0 ? selectedSeats.join(', ') : '-'}
                </span>
              </div>
            </div>

            <div className="pt-6 border-t border-gray-800 mb-6">
              <div className="flex justify-between items-center">
                <span className="text-gray-400">Total Amount</span>
                <span className="text-2xl font-bold text-white">₹{selectedSeats.length * show.ticketPrice}</span>
              </div>
            </div>

            <Button 
              className="w-full" 
              size="lg"
              disabled={selectedSeats.length === 0}
              onClick={handleProceed}
            >
              Proceed to Summary
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeatSelection;
