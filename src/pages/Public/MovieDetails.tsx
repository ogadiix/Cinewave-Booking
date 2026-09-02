import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Calendar, Clock, MapPin, Play, Star, Ticket } from 'lucide-react';
import { format } from 'date-fns';
import { getMovies, getShows, getTheatres, getReviews, getUsers } from '../../utils/storage';
import type { Movie, Show, Theatre, Review, User } from '../../types';
import Button from '../../components/ui/Button';
import Badge from '../../components/ui/Badge';
import { motion } from 'framer-motion';

import { useLocation } from '../../context/LocationContext';

const MovieDetails = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [movie, setMovie] = useState<Movie | null>(null);
  const [shows, setShows] = useState<Show[]>([]);
  const [theatres, setTheatres] = useState<Record<string, Theatre>>({});
  const [reviews, setReviews] = useState<(Review & { user?: User })[]>([]);
  
  const [selectedDate, setSelectedDate] = useState<string>('');
  const { city } = useLocation();
  
  useEffect(() => {
    if (id) {
      const allMovies = getMovies();
      const foundMovie = allMovies.find(m => m.id === id);
      if (foundMovie) {
        setMovie(foundMovie);
        
        // Load theatres mapping for the current city
        const allTheatres = getTheatres();
        // If there are no theatres in this city playing this movie, we still filter theatres by city.
        const cityTheatres = allTheatres.filter(t => t.location === city);
        // Fallback to all theatres if city has none (just for demo purposes)
        const theatresToUse = cityTheatres.length > 0 ? cityTheatres : allTheatres;
        
        const theatreMap = theatresToUse.reduce((acc, theatre) => {
          acc[theatre.id] = theatre;
          return acc;
        }, {} as Record<string, Theatre>);
        
        setTheatres(theatreMap);
        
        // Load shows for this movie in the filtered theatres
        const theatreIds = Object.keys(theatreMap);
        const allShows = getShows().filter(s => s.movieId === id && theatreIds.includes(s.theatreId));
        setShows(allShows);
        
        // Set default date if shows exist
        if (allShows.length > 0) {
          // Get unique dates sorted
          const dates = Array.from(new Set(allShows.map(s => s.date))).sort();
          setSelectedDate(dates[0]);
        } else {
          setSelectedDate('');
        }

        // Fetch and enrich reviews
        const movieReviews = getReviews().filter(r => r.movieId === id);
        const allUsers = getUsers();
        const enrichedReviews = movieReviews.map(r => ({
          ...r,
          user: allUsers.find(u => u.id === r.userId)
        }));
        setReviews(enrichedReviews.reverse()); // Latest first
      }
    }
  }, [id, city]);

  if (!movie) {
    return (
      <div className="flex-1 flex items-center justify-center min-h-[60vh]">
        <div className="animate-spin w-8 h-8 border-4 border-primary-500 border-t-transparent rounded-full" />
      </div>
    );
  }

  // Get unique dates for the date selector
  const availableDates = Array.from(new Set(shows.map(s => s.date))).sort();
  
  // Filter shows by selected date
  const filteredShows = shows.filter(s => s.date === selectedDate);
  
  // Group shows by theatre for the selected date
  const showsByTheatre = filteredShows.reduce((acc, show) => {
    if (!acc[show.theatreId]) {
      acc[show.theatreId] = [];
    }
    acc[show.theatreId].push(show);
    return acc;
  }, {} as Record<string, Show[]>);

  const averageRating = reviews.length > 0 
    ? (reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length).toFixed(1)
    : 'New';

  const handleShowSelect = (show: Show) => {
    // Navigate to seat selection with show data
    navigate('/booking/seats', { state: { showId: show.id } });
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pb-20"
    >
      {/* Hero Banner */}
      <div className="relative h-[50vh] md:h-[60vh] overflow-hidden bg-black">
        <motion.div 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 opacity-40 bg-cover bg-center filter blur-sm"
          style={{ backgroundImage: `url(${movie.poster})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/80 to-transparent" />
        
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="container mx-auto flex flex-col md:flex-row gap-8 items-end">
            <motion.div 
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
              className="hidden md:block w-64 h-96 rounded-xl overflow-hidden border-4 border-gray-900 shadow-2xl relative -mb-16 z-10 shadow-primary-900/40"
            >
              <img src={movie.poster} alt={movie.title} className="w-full h-full object-cover" />
            </motion.div>
            
            <motion.div 
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="flex-1 text-white z-10 mb-4 md:mb-0"
            >
              <div className="flex gap-2 mb-4">
                <Badge variant="success" className="bg-green-500/20 text-green-400">{movie.rating}</Badge>
                <Badge variant="outline">{movie.language}</Badge>
                <Badge variant="outline" className="flex items-center gap-1"><Clock size={12} /> {movie.duration}</Badge>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">{movie.title}</h1>
              <div className="flex items-center gap-4 text-xl text-gray-300 mb-6">
                <span>{movie.genre}</span>
                <span className="flex items-center gap-1 text-yellow-400 font-bold">
                  <Star fill="currentColor" size={20} />
                  {averageRating} {reviews.length > 0 && <span className="text-sm font-normal text-gray-400">({reviews.length} reviews)</span>}
                </span>
              </div>
              
              <div className="flex gap-4">
                <Button size="lg" className="px-8 rounded-full shadow-lg shadow-primary-600/20" onClick={() => {
                  document.getElementById('booking-section')?.scrollIntoView({ behavior: 'smooth' });
                }}>
                  <Ticket className="mr-2" size={20} /> Book Tickets
                </Button>
                <Button variant="outline" size="lg" className="rounded-full px-6 glass hover:bg-white/10 transition-colors">
                  <Play className="mr-2" size={20} /> Watch Trailer
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 mt-20 md:mt-16 grid grid-cols-1 lg:grid-cols-3 gap-12">
        <motion.div 
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="lg:col-span-2 space-y-12"
        >
          {/* About Movie */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">About the Movie</h2>
            <p className="text-gray-400 leading-relaxed text-lg mb-8">
              {movie.description}
            </p>
          </section>

          {/* User Reviews Section */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-6">User Reviews</h2>
            {reviews.length > 0 ? (
              <div className="space-y-4">
                {reviews.map(review => (
                  <div key={review.id} className="glass p-5 rounded-xl border border-gray-800">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-primary-900 flex items-center justify-center font-bold text-primary-400 text-sm">
                          {review.user?.name.charAt(0) || 'U'}
                        </div>
                        <span className="font-semibold text-white">{review.user?.name || 'User'}</span>
                      </div>
                      <span className="text-xs text-gray-500">{format(new Date(review.date), 'dd MMM yyyy')}</span>
                    </div>
                    <div className="flex text-yellow-400 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={14} fill={i < review.rating ? "currentColor" : "none"} className={i >= review.rating ? "text-gray-600" : ""} />
                      ))}
                    </div>
                    <p className="text-gray-300 text-sm">{review.comment}</p>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-500 italic">No reviews yet for this movie.</p>
            )}
          </section>

          {/* Booking Section */}
          <section id="booking-section" className="pt-8 scroll-mt-20">
            <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-2">
              <Ticket className="text-primary-500" /> Select Theatre & Show
            </h2>

            {availableDates.length > 0 ? (
              <>
                {/* Date Selector */}
                <div className="flex gap-4 overflow-x-auto pb-4 mb-8 snap-x hide-scrollbar">
                  {availableDates.map(date => {
                    const dateObj = new Date(date);
                    const isSelected = selectedDate === date;
                    return (
                      <button
                        key={date}
                        onClick={() => setSelectedDate(date)}
                        className={`flex flex-col items-center justify-center min-w-[80px] h-20 rounded-xl border transition-all snap-start ${
                          isSelected 
                            ? 'bg-primary-600 border-primary-500 text-white shadow-lg shadow-primary-600/20' 
                            : 'bg-gray-800 border-gray-700 text-gray-400 hover:border-primary-500/50 hover:text-white'
                        }`}
                      >
                        <span className="text-xs font-medium uppercase mb-1">{format(dateObj, 'MMM')}</span>
                        <span className="text-2xl font-bold">{format(dateObj, 'dd')}</span>
                        <span className="text-xs">{format(dateObj, 'EEE')}</span>
                      </button>
                    );
                  })}
                </div>

                {/* Theatres and Shows List */}
                <div className="space-y-6">
                  {Object.keys(showsByTheatre).length > 0 ? (
                    Object.entries(showsByTheatre).map(([theatreId, theatreShows]) => {
                      const theatre = theatres[theatreId];
                      if (!theatre) return null;
                      
                      return (
                        <div key={theatreId} className="glass p-6 rounded-xl border border-white/5">
                          <div className="flex items-start justify-between mb-6">
                            <div>
                              <h3 className="text-xl font-bold text-white mb-1 flex items-center gap-2">
                                {theatre.name}
                              </h3>
                              <p className="text-gray-400 text-sm flex items-center gap-1">
                                <MapPin size={14} /> {theatre.location}
                              </p>
                            </div>
                            <Badge variant="outline" className="border-green-500/30 text-green-400 bg-green-500/10">
                              Tickets Available
                            </Badge>
                          </div>
                          
                          <div className="flex flex-wrap gap-4">
                            {theatreShows.sort((a,b) => a.time.localeCompare(b.time)).map(show => (
                              <button
                                key={show.id}
                                onClick={() => handleShowSelect(show)}
                                className="group flex flex-col items-center justify-center px-6 py-3 rounded-lg border border-gray-700 bg-gray-800/50 hover:border-primary-500 hover:bg-primary-500/10 transition-all text-sm relative overflow-hidden"
                              >
                                <span className="font-semibold text-white group-hover:text-primary-400 mb-1">{show.time}</span>
                                <span className="text-gray-500 text-xs">₹{show.ticketPrice}</span>
                              </button>
                            ))}
                          </div>
                        </div>
                      );
                    })
                  ) : (
                    <div className="text-center py-12 bg-gray-800/30 rounded-xl border border-gray-800">
                      <p className="text-gray-400">No shows available for the selected date.</p>
                    </div>
                  )}
                </div>
              </>
            ) : (
              <div className="text-center py-12 bg-gray-800/30 rounded-xl border border-gray-800">
                <p className="text-gray-400 mb-4">No shows currently scheduled for this movie.</p>
                <Button variant="outline" onClick={() => navigate('/movies')}>Browse Other Movies</Button>
              </div>
            )}
          </section>
        </motion.div>
        
        {/* Sidebar Info */}
        <div className="space-y-6">
          <div className="glass p-6 rounded-xl border border-white/5">
            <h3 className="text-lg font-bold text-white mb-4">Movie Info</h3>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex justify-between border-b border-gray-700/50 pb-2">
                <span>Release Date</span>
                <span className="text-white font-medium">{format(new Date(movie.releaseDate), 'dd MMM yyyy')}</span>
              </li>
              <li className="flex justify-between border-b border-gray-700/50 pb-2">
                <span>Duration</span>
                <span className="text-white font-medium">{movie.duration}</span>
              </li>
              <li className="flex justify-between border-b border-gray-700/50 pb-2">
                <span>Language</span>
                <span className="text-white font-medium">{movie.language}</span>
              </li>
              <li className="flex justify-between border-b border-gray-700/50 pb-2">
                <span>Rating</span>
                <span className="text-white font-medium">{movie.rating}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default MovieDetails;
