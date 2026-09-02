import React from 'react';
import { Link } from 'react-router-dom';
import { Play, Star, Clock } from 'lucide-react';
import type { Movie } from '../../types';
import Button from './Button';
import Badge from './Badge';

interface MovieCardProps {
  movie: Movie;
}

const MovieCard = ({ movie }: MovieCardProps) => {
  return (
    <div className="group relative rounded-xl overflow-hidden bg-gray-900 border border-gray-800 transition-all hover:shadow-2xl hover:shadow-primary-500/20 hover:-translate-y-1">
      <div className="aspect-[2/3] relative overflow-hidden">
        <img 
          src={movie.poster} 
          alt={movie.title} 
          className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent opacity-80" />
        
        {/* Play button overlay on hover */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Link to={`/movies/${movie.id}`}>
            <div className="w-16 h-16 rounded-full bg-primary-600/90 flex items-center justify-center backdrop-blur-sm text-white transform scale-75 group-hover:scale-100 transition-transform duration-300">
              <Play fill="currentColor" size={24} className="ml-1" />
            </div>
          </Link>
        </div>
        
        {/* Badges */}
        <div className="absolute top-4 left-4 flex gap-2">
          <Badge variant="success" className="bg-green-500/80 text-white border-none shadow-sm">{movie.rating}</Badge>
        </div>
      </div>
      
      <div className="p-5">
        <h3 className="text-xl font-bold text-white mb-2 line-clamp-1 group-hover:text-primary-400 transition-colors">
          {movie.title}
        </h3>
        
        <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
          <span className="flex items-center gap-1">
            <Clock size={14} />
            {movie.duration}
          </span>
          <span className="flex items-center gap-1">
            <Star size={14} className="text-yellow-500" />
            {movie.language}
          </span>
        </div>
        
        <p className="text-sm text-gray-400 mb-6 line-clamp-2">
          {movie.genre}
        </p>
        
        <Link to={`/movies/${movie.id}`} className="block w-full">
          <Button variant="primary" className="w-full">
            Book Tickets
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default MovieCard;
