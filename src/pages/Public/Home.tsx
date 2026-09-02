import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Ticket, Video, Popcorn } from 'lucide-react';
import { motion } from 'framer-motion';
import Button from '../../components/ui/Button';
import MovieCard from '../../components/ui/MovieCard';
import { useLocation } from '../../context/LocationContext';
import { getMovies, getShows, getTheatres } from '../../utils/storage';
import type { Movie, Show, Theatre } from '../../types';

const Home = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const { city } = useLocation();

  useEffect(() => {
    const allMovies = getMovies();
    const allShows = getShows();
    const allTheatres = getTheatres();

    // Find theatres in the selected city
    const cityTheatres = allTheatres.filter(t => t.location === city).map(t => t.id);
    
    // Find movies that have shows in these theatres
    const cityMovieIds = new Set(allShows.filter(s => cityTheatres.includes(s.theatreId)).map(s => s.movieId));
    
    // Filter movies
    const availableMovies = allMovies.filter(m => cityMovieIds.has(m.id));
    
    // If no movies found for city, just show some default ones or all to avoid empty state, but normally we filter
    setMovies(availableMovies.length > 0 ? availableMovies : allMovies);
  }, [city]);

  const nowShowing = movies.slice(0, 4);
  const comingSoon = movies.slice(4, 8);

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }} 
      className="flex flex-col min-h-screen"
    >
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <motion.div 
          className="absolute inset-0 z-0"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <img 
            src="https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=2070&auto=format&fit=crop" 
            alt="Cinema Hero" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent" />
        </motion.div>
        
        <div className="container relative z-10 mx-auto px-4 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <Badge className="mb-6">PREMIUM EXPERIENCE</Badge>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-5xl md:text-7xl font-extrabold text-white mb-6 tracking-tight"
          >
            Your Movie.<br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-600">
              Your Seats.
            </span><br/>
            Your Experience.
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto font-light"
          >
            Discover the latest movies and book your perfect seats at CineWave Entertainment. Immerse yourself in cinematic brilliance.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link to="/movies">
              <Button size="lg" className="w-full sm:w-auto text-lg px-8 py-6 rounded-full shadow-lg shadow-primary-600/30">
                BOOK TICKETS
              </Button>
            </Link>
            <Link to="/movies">
              <Button variant="outline" size="lg" className="w-full sm:w-auto text-lg px-8 py-6 rounded-full glass border-white/20 hover:bg-white/10">
                EXPLORE MOVIES
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Now Showing Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="flex items-end justify-between mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-2 flex items-center gap-3">
                <Video className="text-primary-500" /> Now Showing
              </h2>
              <p className="text-gray-400">Catch the latest blockbusters in our premium screens.</p>
            </div>
            <Link to="/movies" className="hidden sm:inline-flex text-primary-500 hover:text-primary-400 font-medium">
              View All
            </Link>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {nowShowing.map((movie, idx) => (
              <motion.div 
                key={movie.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <MovieCard movie={movie} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-800/50 overflow-hidden">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="container mx-auto px-4 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Why CineWave?</h2>
          <p className="text-gray-400 mb-16 max-w-2xl mx-auto">Experience cinema like never before with our state-of-the-art facilities and seamless booking process.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="glass p-8 rounded-2xl border border-white/5 text-center flex flex-col items-center"
            >
              <div className="w-16 h-16 rounded-full bg-primary-600/20 text-primary-500 flex items-center justify-center mb-6">
                <Ticket size={32} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Easy Booking</h3>
              <p className="text-gray-400">Book your tickets in just a few clicks. Fast, secure, and hassle-free.</p>
            </motion.div>
            
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="glass p-8 rounded-2xl border border-white/5 text-center flex flex-col items-center transform md:-translate-y-4 relative z-10 shadow-2xl shadow-primary-900/20 bg-gray-800"
            >
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <Badge variant="success" className="bg-primary-500 text-white border-none py-1">MOST POPULAR</Badge>
              </div>
              <div className="w-16 h-16 rounded-full bg-primary-600/20 text-primary-500 flex items-center justify-center mb-6 mt-4">
                <Popcorn size={32} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Choose Your Seats</h3>
              <p className="text-gray-400">Pick your favorite spot in the house with our interactive seating plan.</p>
            </motion.div>
            
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="glass p-8 rounded-2xl border border-white/5 text-center flex flex-col items-center"
            >
              <div className="w-16 h-16 rounded-full bg-primary-600/20 text-primary-500 flex items-center justify-center mb-6">
                <Video size={32} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Instant Confirmation</h3>
              <p className="text-gray-400">Get your digital ticket instantly. No printing required, just scan and enter.</p>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </motion.div>
  );
};

// Extracted Badge inline for Home component only
const Badge = ({ children, className, variant = 'default' }: { children: React.ReactNode, className?: string, variant?: 'default' | 'success' }) => (
  <span className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold tracking-wide uppercase ${variant === 'success' ? 'bg-green-500/20 text-green-400' : 'bg-primary-500/20 text-primary-400 border border-primary-500/30'} ${className}`}>
    {children}
  </span>
);

export default Home;
