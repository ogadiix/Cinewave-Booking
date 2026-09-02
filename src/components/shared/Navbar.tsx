import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Film, User, LogOut, Search, MapPin, Menu, X } from 'lucide-react';
import { getCurrentUser, clearCurrentUser } from '../../utils/storage';
import { useLocation } from '../../context/LocationContext';

const Navbar = () => {
  const navigate = useNavigate();
  const user = getCurrentUser();
  const { city, setCity, availableCities } = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleLogout = () => {
    clearCurrentUser();
    navigate('/');
  };

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 glass">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 text-primary-500 hover:text-primary-400 transition-colors" onClick={closeMobileMenu}>
          <Film size={32} strokeWidth={2.5} />
          <span className="text-2xl font-bold tracking-tight">CineWave</span>
        </Link>
        
        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <Link to="/" className="text-gray-300 hover:text-white font-medium transition-colors">Home</Link>
          <Link to="/movies" className="text-gray-300 hover:text-white font-medium transition-colors">Movies</Link>
          <Link to="/theatres" className="text-gray-300 hover:text-white font-medium transition-colors">Theatres</Link>
          <Link to="/about" className="text-gray-300 hover:text-white font-medium transition-colors">About</Link>
          <Link to="/contact" className="text-gray-300 hover:text-white font-medium transition-colors">Contact</Link>
        </nav>

        <div className="flex items-center gap-2 sm:gap-4">
          {/* Desktop City Selector */}
          <div className="hidden md:flex items-center text-sm font-medium text-gray-300 hover:text-white transition-colors cursor-pointer mr-2">
            <MapPin size={16} className="mr-1" />
            <select 
              value={city} 
              onChange={(e) => setCity(e.target.value)}
              className="bg-transparent appearance-none focus:outline-none cursor-pointer"
            >
              {availableCities.map(c => (
                <option key={c} value={c} className="bg-gray-900 text-white">{c}</option>
              ))}
            </select>
          </div>
          
          <button className="p-2 text-gray-400 hover:text-white transition-colors hidden sm:block">
            <Search size={20} />
          </button>
          
          {user ? (
            <div className="hidden sm:flex items-center gap-4 sm:ml-4">
              <Link to={`/${user.role}/dashboard`} className="flex items-center gap-2 text-sm font-medium text-gray-300 hover:text-white transition-colors">
                <User size={18} />
                <span className="hidden lg:inline">{user.name}</span>
              </Link>
              <button onClick={handleLogout} className="p-2 text-gray-400 hover:text-primary-500 transition-colors" title="Logout">
                <LogOut size={18} />
              </button>
            </div>
          ) : (
            <Link to="/login" className="hidden sm:inline-block ml-2 px-6 py-2 bg-primary-600 hover:bg-primary-500 text-white rounded-full font-medium transition-colors">
              Sign In
            </Link>
          )}

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2 text-gray-300 hover:text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-gray-900 border-b border-gray-800 shadow-xl py-4 px-4 flex flex-col gap-4">
          <div className="flex items-center text-sm font-medium text-gray-300 pb-2 border-b border-gray-800">
            <MapPin size={16} className="mr-2 text-primary-500" />
            <select 
              value={city} 
              onChange={(e) => {
                setCity(e.target.value);
                closeMobileMenu();
              }}
              className="bg-transparent focus:outline-none cursor-pointer flex-1"
            >
              {availableCities.map(c => (
                <option key={c} value={c} className="bg-gray-900 text-white">{c}</option>
              ))}
            </select>
          </div>

          <nav className="flex flex-col gap-3">
            <Link to="/" onClick={closeMobileMenu} className="text-gray-300 hover:text-white font-medium py-2">Home</Link>
            <Link to="/movies" onClick={closeMobileMenu} className="text-gray-300 hover:text-white font-medium py-2">Movies</Link>
            <Link to="/theatres" onClick={closeMobileMenu} className="text-gray-300 hover:text-white font-medium py-2">Theatres</Link>
            <Link to="/about" onClick={closeMobileMenu} className="text-gray-300 hover:text-white font-medium py-2">About</Link>
            <Link to="/contact" onClick={closeMobileMenu} className="text-gray-300 hover:text-white font-medium py-2">Contact</Link>
          </nav>

          <div className="pt-4 border-t border-gray-800 flex flex-col gap-3">
            {user ? (
              <>
                <Link to={`/${user.role}/dashboard`} onClick={closeMobileMenu} className="flex items-center gap-2 text-gray-300 hover:text-white py-2">
                  <User size={18} />
                  <span>Dashboard ({user.name})</span>
                </Link>
                <button onClick={() => { handleLogout(); closeMobileMenu(); }} className="flex items-center gap-2 text-gray-400 hover:text-primary-500 py-2 text-left w-full">
                  <LogOut size={18} />
                  <span>Logout</span>
                </button>
              </>
            ) : (
              <Link to="/login" onClick={closeMobileMenu} className="w-full text-center px-6 py-3 bg-primary-600 hover:bg-primary-500 text-white rounded-lg font-medium transition-colors">
                Sign In
              </Link>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
