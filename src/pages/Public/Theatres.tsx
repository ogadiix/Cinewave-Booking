import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, MonitorPlay } from 'lucide-react';
import { useLocation } from '../../context/LocationContext';
import { getTheatres } from '../../utils/storage';
import type { Theatre } from '../../types';
import Button from '../../components/ui/Button';
import Badge from '../../components/ui/Badge';

const Theatres = () => {
  const [theatres, setTheatres] = useState<Theatre[]>([]);
  const { city } = useLocation();

  useEffect(() => {
    const allTheatres = getTheatres();
    const cityTheatres = allTheatres.filter(t => t.location === city);
    setTheatres(cityTheatres.length > 0 ? cityTheatres : allTheatres);
  }, [city]);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-10 text-center md:text-left">
        <h1 className="text-4xl font-bold text-white mb-4">Our Theatres</h1>
        <p className="text-gray-400">Find a CineWave cinema near you and experience the magic of movies.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {theatres.map((theatre) => (
          <div key={theatre.id} className="glass rounded-xl border border-gray-800 overflow-hidden hover:border-primary-500/50 transition-colors group">
            <div className="h-48 overflow-hidden relative">
              <img 
                src="https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?q=80&w=2070&auto=format&fit=crop" 
                alt="Cinema Exterior" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-90" />
              <div className="absolute bottom-4 left-4">
                <Badge variant="success" className="bg-primary-500 text-white border-none shadow-lg">PREMIUM</Badge>
              </div>
            </div>
            
            <div className="p-6">
              <h3 className="text-2xl font-bold text-white mb-2">{theatre.name}</h3>
              
              <div className="flex flex-col gap-3 mb-6">
                <div className="flex items-center gap-3 text-gray-400">
                  <div className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center text-primary-500">
                    <MapPin size={16} />
                  </div>
                  <span>{theatre.location}</span>
                </div>
                <div className="flex items-center gap-3 text-gray-400">
                  <div className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center text-primary-500">
                    <MonitorPlay size={16} />
                  </div>
                  <span>{theatre.screens} Screens</span>
                </div>
              </div>
              
              <Link to="/movies">
                <Button className="w-full">View Showing Movies</Button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Theatres;
