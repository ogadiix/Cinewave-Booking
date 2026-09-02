import React, { useState, useEffect } from 'react';
import { Search, Filter } from 'lucide-react';
import { getMovies } from '../../utils/storage';
import type { Movie } from '../../types';
import MovieCard from '../../components/ui/MovieCard';
import Button from '../../components/ui/Button';
import { motion, AnimatePresence } from 'framer-motion';

const Movies = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [filteredMovies, setFilteredMovies] = useState<Movie[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [genreFilter, setGenreFilter] = useState('');
  const [languageFilter, setLanguageFilter] = useState('');

  useEffect(() => {
    const loadedMovies = getMovies();
    setMovies(loadedMovies);
    setFilteredMovies(loadedMovies);
  }, []);

  useEffect(() => {
    let result = movies;

    if (searchTerm) {
      result = result.filter(m => m.title.toLowerCase().includes(searchTerm.toLowerCase()));
    }
    
    if (genreFilter) {
      result = result.filter(m => m.genre.includes(genreFilter));
    }
    
    if (languageFilter) {
      result = result.filter(m => m.language === languageFilter);
    }

    setFilteredMovies(result);
  }, [searchTerm, genreFilter, languageFilter, movies]);

  // Extract unique genres and languages for filters
  const genres = Array.from(new Set(movies.flatMap(m => m.genre.split(', '))));
  const languages = Array.from(new Set(movies.map(m => m.language)));

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="container mx-auto px-4 py-8 min-h-screen"
    >
      <motion.div 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="mb-10"
      >
        <h1 className="text-4xl font-bold text-white mb-4">Explore Movies</h1>
        <p className="text-gray-400">Discover and book tickets for the latest movies.</p>
      </motion.div>

      <motion.div 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.1 }}
        className="flex flex-col md:flex-row gap-4 mb-8 p-4 glass rounded-2xl border border-gray-800"
      >
        <div className="relative flex-1">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
          <input 
            type="text" 
            placeholder="Search movies..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-gray-900/50 border border-gray-700 text-white rounded-xl pl-12 pr-4 py-3 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-all shadow-inner"
          />
        </div>
        
        <div className="flex gap-4">
          <div className="relative flex-1 md:flex-none">
            <Filter className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <select 
              value={genreFilter}
              onChange={(e) => setGenreFilter(e.target.value)}
              className="w-full md:w-auto appearance-none bg-gray-900/50 border border-gray-700 text-white rounded-xl pl-12 pr-10 py-3 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-all cursor-pointer shadow-inner"
            >
              <option value="">All Genres</option>
              {genres.map(g => <option key={g} value={g}>{g}</option>)}
            </select>
          </div>
          
          <select 
            value={languageFilter}
            onChange={(e) => setLanguageFilter(e.target.value)}
            className="flex-1 md:flex-none bg-gray-900/50 border border-gray-700 text-white rounded-xl px-4 py-3 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-all cursor-pointer shadow-inner"
          >
            <option value="">All Languages</option>
            {languages.map(l => <option key={l} value={l}>{l}</option>)}
          </select>
        </div>
      </motion.div>

      {filteredMovies.length > 0 ? (
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-6"
        >
          <AnimatePresence>
            {filteredMovies.map(movie => (
              <motion.div
                key={movie.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.2 }}
              >
                <MovieCard movie={movie} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      ) : (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-20 glass rounded-2xl border border-gray-800"
        >
          <h3 className="text-xl font-bold text-white mb-2">No movies found</h3>
          <p className="text-gray-400 mb-6">Try adjusting your filters or search term.</p>
          <Button variant="outline" onClick={() => {
            setSearchTerm('');
            setGenreFilter('');
            setLanguageFilter('');
          }}>
            Clear Filters
          </Button>
        </motion.div>
      )}
    </motion.div>
  );
};

export default Movies;
