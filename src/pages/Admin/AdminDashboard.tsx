import React, { useEffect, useState } from 'react';
import { getMovies, getTheatres, getShows, getUsers, getBookings } from '../../utils/storage';
import { Users, Film, MapPin, CalendarClock, DollarSign, Ticket } from 'lucide-react';
import { Link } from 'react-router-dom';

const AdminDashboard = () => {
  const [stats, setStats] = useState({
    users: 0,
    movies: 0,
    theatres: 0,
    shows: 0,
    bookings: 0,
    revenue: 0
  });

  useEffect(() => {
    const users = getUsers();
    const movies = getMovies();
    const theatres = getTheatres();
    const shows = getShows();
    const bookings = getBookings();
    
    const revenue = bookings
      .filter(b => b.status === 'CONFIRMED' || b.status === 'COMPLETED')
      .reduce((sum, b) => sum + b.totalAmount, 0);

    setStats({
      users: users.length,
      movies: movies.length,
      theatres: theatres.length,
      shows: shows.length,
      bookings: bookings.length,
      revenue
    });
  }, []);

  const statCards = [
    { title: 'Total Users', value: stats.users, icon: <Users size={24} />, color: 'text-blue-500', bg: 'bg-blue-500/20', link: '/admin/users' },
    { title: 'Movies', value: stats.movies, icon: <Film size={24} />, color: 'text-purple-500', bg: 'bg-purple-500/20', link: '/admin/movies' },
    { title: 'Theatres', value: stats.theatres, icon: <MapPin size={24} />, color: 'text-pink-500', bg: 'bg-pink-500/20', link: '/admin/theatres' },
    { title: 'Shows', value: stats.shows, icon: <CalendarClock size={24} />, color: 'text-orange-500', bg: 'bg-orange-500/20', link: '/admin/shows' },
    { title: 'Bookings', value: stats.bookings, icon: <Ticket size={24} />, color: 'text-green-500', bg: 'bg-green-500/20', link: '#' },
    { title: 'Revenue', value: `₹${stats.revenue}`, icon: <DollarSign size={24} />, color: 'text-primary-500', bg: 'bg-primary-500/20', link: '#' },
  ];

  return (
    <div className="max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">Admin Dashboard</h1>
        <p className="text-gray-400">System overview and management statistics.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {statCards.map((card, idx) => (
          <Link key={idx} to={card.link}>
            <div className="glass p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors group">
              <div className="flex items-center gap-4">
                <div className={`w-14 h-14 rounded-full ${card.bg} ${card.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                  {card.icon}
                </div>
                <div>
                  <p className="text-sm text-gray-400 mb-1">{card.title}</p>
                  <h3 className="text-3xl font-bold text-white">{card.value}</h3>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="glass p-6 rounded-xl border border-gray-800 h-80 flex flex-col justify-center items-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full p-4 border-b border-gray-800 text-white font-bold">Revenue Trend</div>
          
          {/* Simple CSS Chart Visualization */}
          <div className="flex items-end gap-4 h-40 w-full px-8 mt-12">
            {[40, 70, 45, 90, 65, 80, 100].map((h, i) => (
              <div key={i} className="flex-1 bg-primary-600/50 hover:bg-primary-500 rounded-t-md relative group transition-colors" style={{ height: `${h}%` }}>
                <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-800 text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10 text-white">
                  Day {i+1}
                </div>
              </div>
            ))}
          </div>
          <div className="w-full px-8 mt-2 flex justify-between text-xs text-gray-500">
            <span>Mon</span>
            <span>Tue</span>
            <span>Wed</span>
            <span>Thu</span>
            <span>Fri</span>
            <span>Sat</span>
            <span>Sun</span>
          </div>
        </div>

        <div className="glass p-6 rounded-xl border border-gray-800 h-80 flex flex-col justify-center items-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full p-4 border-b border-gray-800 text-white font-bold">Popular Movies</div>
          
          <div className="w-full px-6 mt-12 space-y-4">
            {[
              { name: 'Avengers', pct: 85, color: 'bg-blue-500' },
              { name: 'Interstellar', pct: 65, color: 'bg-purple-500' },
              { name: 'Inception', pct: 45, color: 'bg-pink-500' },
              { name: 'The Dark Knight', pct: 30, color: 'bg-orange-500' },
            ].map((movie, i) => (
              <div key={i} className="w-full">
                <div className="flex justify-between text-xs mb-1 text-gray-400">
                  <span>{movie.name}</span>
                  <span>{movie.pct}%</span>
                </div>
                <div className="h-2 w-full bg-gray-800 rounded-full overflow-hidden">
                  <div className={`h-full ${movie.color} rounded-full`} style={{ width: `${movie.pct}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
