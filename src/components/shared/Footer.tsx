import React from 'react';
import { Film } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 pt-16 pb-8 mt-auto">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center gap-2 text-primary-500 mb-4">
              <Film size={28} strokeWidth={2.5} />
              <span className="text-xl font-bold tracking-tight">CineWave</span>
            </Link>
            <p className="text-gray-400 text-sm mb-6 leading-relaxed">
              Experience the magic of cinema with the best seats in the house. Your ultimate destination for movie tickets.
            </p>
            <div className="flex gap-4 text-gray-400">
              <a href="#" className="hover:text-primary-500 transition-colors">Facebook</a>
              <a href="#" className="hover:text-primary-500 transition-colors">Twitter</a>
              <a href="#" className="hover:text-primary-500 transition-colors">Instagram</a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link to="/movies" className="hover:text-primary-500 transition-colors">Now Showing</Link></li>
              <li><Link to="/theatres" className="hover:text-primary-500 transition-colors">Theatres</Link></li>
              <li><Link to="/about" className="hover:text-primary-500 transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-primary-500 transition-colors">Contact Us</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link to="/contact" className="hover:text-primary-500 transition-colors">Help Center</Link></li>
              <li><a href="#" className="hover:text-primary-500 transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-primary-500 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-primary-500 transition-colors">Refund Policy</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Newsletter</h4>
            <p className="text-gray-400 text-sm mb-4">Subscribe for the latest updates and exclusive offers.</p>
            <form className="flex" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Your email address" 
                className="bg-gray-800 border border-gray-700 text-white text-sm rounded-l-md px-4 py-2 w-full focus:outline-none focus:border-primary-500"
              />
              <button type="submit" className="bg-primary-600 hover:bg-primary-500 px-4 py-2 rounded-r-md text-white transition-colors">
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>&copy; 2026 CineWave Entertainment. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Academic Project - Frontend Only</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
