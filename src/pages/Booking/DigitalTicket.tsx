import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getBookings, getShows, getMovies, getTheatres } from '../../utils/storage';
import type { Booking, Show, Movie, Theatre } from '../../types';
import Button from '../../components/ui/Button';
import { ArrowLeft, Printer, Download, Film, QrCode } from 'lucide-react';

const DigitalTicket = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  const [booking, setBooking] = useState<Booking | null>(null);
  const [show, setShow] = useState<Show | null>(null);
  const [movie, setMovie] = useState<Movie | null>(null);
  const [theatre, setTheatre] = useState<Theatre | null>(null);

  useEffect(() => {
    if (!id) {
      navigate('/movies');
      return;
    }

    const currentBooking = getBookings().find(b => b.id === id);
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
  }, [id, navigate]);

  if (!booking || !show || !movie || !theatre) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="flex justify-between items-center mb-8 print:hidden">
        <button 
          onClick={() => navigate(-1)} 
          className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
        >
          <ArrowLeft size={20} /> Back
        </button>
        <div className="flex gap-4">
          <Button variant="outline" onClick={handlePrint}>
            <Printer className="mr-2" size={18} /> Print
          </Button>
          <Button onClick={handlePrint}>
            <Download className="mr-2" size={18} /> Download
          </Button>
        </div>
      </div>

      {/* Ticket Container */}
      <div className="flex justify-center">
        <div className="bg-white text-gray-900 rounded-2xl overflow-hidden shadow-2xl flex flex-col md:flex-row w-full max-w-3xl relative border border-gray-200">
          
          {/* Decorative perforations */}
          <div className="absolute top-0 bottom-0 left-[30%] border-l-2 border-dashed border-gray-300 hidden md:block" />
          <div className="absolute top-[-10px] left-[30%] w-5 h-5 bg-gray-900 rounded-full transform -translate-x-1/2 hidden md:block" />
          <div className="absolute bottom-[-10px] left-[30%] w-5 h-5 bg-gray-900 rounded-full transform -translate-x-1/2 hidden md:block" />

          {/* Left Side - Movie Info (70%) */}
          <div className="w-full md:w-[70%] p-8 md:pr-12 bg-white relative">
            <div className="flex items-center gap-2 text-primary-600 mb-6 font-bold text-xl tracking-tight">
              <Film size={24} /> CineWave
            </div>

            <div className="flex flex-col sm:flex-row gap-6">
              <img src={movie.poster} alt={movie.title} className="w-32 h-48 object-cover rounded-lg shadow-md hidden sm:block" />
              
              <div className="flex-1">
                <div className="mb-6">
                  <h2 className="text-3xl font-extrabold text-gray-900 leading-tight mb-1">{movie.title}</h2>
                  <p className="text-gray-500 font-medium">{movie.language} • {movie.rating} • {movie.duration}</p>
                </div>

                <div className="grid grid-cols-2 gap-y-4 gap-x-2">
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold mb-1">Date</p>
                    <p className="font-bold text-gray-900">{new Date(show.date).toLocaleDateString('en-US', { day: '2-digit', month: 'short', year: 'numeric' })}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold mb-1">Time</p>
                    <p className="font-bold text-gray-900">{show.time}</p>
                  </div>
                  <div className="col-span-2">
                    <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold mb-1">Theatre</p>
                    <p className="font-bold text-gray-900">{theatre.name}</p>
                    <p className="text-sm text-gray-600">{theatre.location}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Ticket Stub (30%) */}
          <div className="w-full md:w-[30%] bg-gray-50 p-8 border-t md:border-t-0 md:border-l border-dashed border-gray-300 flex flex-col justify-between items-center text-center">
            
            <div className="w-full mb-6">
              <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold mb-1">Booking Ref</p>
              <p className="font-mono font-bold text-lg text-gray-900">{booking.id}</p>
            </div>

            <div className="bg-white p-3 rounded-xl shadow-sm mb-6 border border-gray-200">
              <QrCode size={120} className="text-gray-900" />
            </div>

            <div className="w-full grid grid-cols-2 gap-4 text-center">
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold mb-1">Seats</p>
                <p className="font-bold text-lg text-primary-600">{booking.seats.length}</p>
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold mb-1">Class</p>
                <p className="font-bold text-lg text-gray-900">VIP</p>
              </div>
              <div className="col-span-2 bg-gray-200 py-2 rounded-lg mt-2">
                <p className="font-bold text-xl tracking-widest">{booking.seats.join(', ')}</p>
              </div>
            </div>

            <p className="text-[10px] text-gray-400 mt-6 uppercase tracking-widest">Admit {booking.seats.length}</p>
          </div>

        </div>
      </div>
      
      <style dangerouslySetInnerHTML={{__html: `
        @media print {
          body * {
            visibility: hidden;
          }
          .print\\:hidden {
            display: none !important;
          }
          .container {
            max-width: 100% !important;
            margin: 0 !important;
            padding: 0 !important;
          }
          /* Ensure the ticket is printed correctly */
          .bg-white {
            visibility: visible;
          }
          .bg-white * {
            visibility: visible;
          }
          .bg-white {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
          }
          /* Force background colors for print */
          * {
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
          }
        }
      `}} />
    </div>
  );
};

export default DigitalTicket;
