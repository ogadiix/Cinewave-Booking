import React, { useState, useEffect } from 'react';
import { Search, Filter } from 'lucide-react';
import { getMovies } from '../../utils/storage';
import type { Movie } from '../../types';
import MovieCard from '../../components/ui/MovieCard';
import Button from '../../components/ui/Button';

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
    <div className="container mx-auto px-4 py-8">
      <div className="mb-10">
        <h1 className="text-4xl font-bold text-white mb-4">Explore Movies</h1>
        <p className="text-gray-400">Discover and book tickets for the latest movies.</p>
      </div>

      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={20} />
          <input 
            type="text" 
            placeholder="Search movies..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-gray-800 border border-gray-700 text-white rounded-lg pl-10 pr-4 py-3 focus:outline-none focus:border-primary-500 transition-colors"
          />
        </div>
        
        <div className="flex gap-4">
          <div className="relative">
            <Filter className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
            <select 
              value={genreFilter}
              onChange={(e) => setGenreFilter(e.target.value)}
              className="appearance-none bg-gray-800 border border-gray-700 text-white rounded-lg pl-10 pr-10 py-3 focus:outline-none focus:border-primary-500 transition-colors cursor-pointer"
            >
              <option value="">All Genres</option>
              {genres.map(g => <option key={g} value={g}>{g}</option>)}
            </select>
          </div>
          
          <select 
            value={languageFilter}
            onChange={(e) => setLanguageFilter(e.target.value)}
            className="bg-gray-800 border border-gray-700 text-white rounded-lg px-4 py-3 focus:outline-none focus:border-primary-500 transition-colors cursor-pointer"
          >
            <option value="">All Languages</option>
            {languages.map(l => <option key={l} value={l}>{l}</option>)}
          </select>
        </div>
      </div>

      {filteredMovies.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {filteredMovies.map(movie => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20 bg-gray-800/30 rounded-xl border border-gray-800">
          <h3 className="text-xl font-bold text-white mb-2">No movies found</h3>
          <p className="text-gray-400 mb-6">Try adjusting your filters or search term.</p>
          <Button variant="outline" onClick={() => {
            setSearchTerm('');
            setGenreFilter('');
            setLanguageFilter('');
          }}>
            Clear Filters
          </Button>
        </div>
      )}
    </div>
  );
};

export default Movies;
