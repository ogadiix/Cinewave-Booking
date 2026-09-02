import React, { useEffect, useState } from 'react';
import { getMovies, getTheatres, getShows, getUsers, getBookings, getPromoCodes, getSnacks } from '../../utils/storage';
import { Users, Film, MapPin, CalendarClock, DollarSign, Ticket, Tag, Coffee } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip, ResponsiveContainer, BarChart, Bar, Cell } from 'recharts';

const AdminDashboard = () => {
  const [stats, setStats] = useState({
    users: 0,
    movies: 0,
    theatres: 0,
    shows: 0,
    bookings: 0,
    promoCodes: 0,
    snacks: 0,
    revenue: 0
  });

  const revenueData = [
    { name: 'Mon', revenue: 15000 },
    { name: 'Tue', revenue: 23000 },
    { name: 'Wed', revenue: 18000 },
    { name: 'Thu', revenue: 29000 },
    { name: 'Fri', revenue: 45000 },
    { name: 'Sat', revenue: 62000 },
    { name: 'Sun', revenue: 58000 },
  ];

  const popularData = [
    { name: 'Kalki 2898 AD', sales: 4500 },
    { name: 'Stranger Things', sales: 3200 },
    { name: 'Jawan', sales: 2800 },
    { name: 'Game of Thrones', sales: 2100 },
    { name: 'Oppenheimer', sales: 1800 },
  ];
  
  const colors = ['#06b6d4', '#fbbf24', '#ec4899', '#8b5cf6', '#10b981'];

  useEffect(() => {
    const users = getUsers();
    const movies = getMovies();
    const theatres = getTheatres();
    const shows = getShows();
    const bookings = getBookings();
    const promoCodes = getPromoCodes();
    const snacks = getSnacks();
    
    const revenue = bookings
      .filter(b => b.status === 'CONFIRMED' || b.status === 'COMPLETED')
      .reduce((sum, b) => sum + b.totalAmount, 0);

    setStats({
      users: users.length,
      movies: movies.length,
      theatres: theatres.length,
      shows: shows.length,
      bookings: bookings.length,
      promoCodes: promoCodes.length,
      snacks: snacks.length,
      revenue
    });
  }, []);

  const statCards = [
    { title: 'Total Users', value: stats.users, icon: <Users size={24} />, color: 'text-blue-500', bg: 'bg-blue-500/20', link: '/admin/users' },
    { title: 'Content', value: stats.movies, icon: <Film size={24} />, color: 'text-purple-500', bg: 'bg-purple-500/20', link: '/admin/movies' },
    { title: 'Theatres', value: stats.theatres, icon: <MapPin size={24} />, color: 'text-pink-500', bg: 'bg-pink-500/20', link: '/admin/theatres' },
    { title: 'Shows', value: stats.shows, icon: <CalendarClock size={24} />, color: 'text-orange-500', bg: 'bg-orange-500/20', link: '/admin/shows' },
    { title: 'Promo Codes', value: stats.promoCodes, icon: <Tag size={24} />, color: 'text-yellow-500', bg: 'bg-yellow-500/20', link: '/admin/promocodes' },
    { title: 'Snacks', value: stats.snacks, icon: <Coffee size={24} />, color: 'text-red-500', bg: 'bg-red-500/20', link: '/admin/snacks' },
    { title: 'Bookings', value: stats.bookings, icon: <Ticket size={24} />, color: 'text-green-500', bg: 'bg-green-500/20', link: '#' },
    { title: 'Revenue', value: `₹${stats.revenue}`, icon: <DollarSign size={24} />, color: 'text-primary-500', bg: 'bg-primary-500/20', link: '#' },
  ];

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      const isRevenue = payload[0].name === 'revenue';
      const formattedValue = payload[0].value.toLocaleString();
      return (
        <div className="bg-gray-900 border border-gray-700 p-3 rounded-lg shadow-xl">
          <p className="text-white font-medium">{label}</p>
          <p className="text-primary-400 font-bold">
            {isRevenue ? `₹${formattedValue}` : `${formattedValue} tickets`}
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-7xl mx-auto pb-10"
    >
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">Admin Dashboard</h1>
        <p className="text-gray-400">System overview and management statistics.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {statCards.map((card, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.05 }}
          >
            <Link to={card.link} className="block h-full">
              <div className="glass p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors group h-full">
                <div className="flex items-center gap-4">
                  <div className={`w-14 h-14 rounded-full ${card.bg} ${card.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    {card.icon}
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 mb-1">{card.title}</p>
                    <h3 className="text-2xl font-bold text-white">{card.value}</h3>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="glass p-6 rounded-xl border border-gray-800 flex flex-col h-96"
        >
          <h2 className="text-lg font-bold text-white mb-6">Weekly Revenue Trend</h2>
          <div className="flex-1 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={revenueData} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" vertical={false} />
                <XAxis dataKey="name" stroke="#9ca3af" tick={{fill: '#9ca3af'}} axisLine={false} tickLine={false} />
                <YAxis stroke="#9ca3af" tick={{fill: '#9ca3af'}} axisLine={false} tickLine={false} tickFormatter={(value) => `₹${value/1000}k`} />
                <RechartsTooltip content={<CustomTooltip />} cursor={{ stroke: '#4b5563', strokeWidth: 1, strokeDasharray: '3 3' }} />
                <Line type="monotone" dataKey="revenue" stroke="#fbbf24" strokeWidth={3} dot={{ r: 4, fill: '#fbbf24', strokeWidth: 0 }} activeDot={{ r: 6, fill: '#fff', stroke: '#fbbf24', strokeWidth: 2 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
          className="glass p-6 rounded-xl border border-gray-800 flex flex-col h-96"
        >
          <h2 className="text-lg font-bold text-white mb-6">Top Performing Content</h2>
          <div className="flex-1 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={popularData} layout="vertical" margin={{ top: 5, right: 30, bottom: 5, left: 40 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" horizontal={true} vertical={false} />
                <XAxis type="number" stroke="#9ca3af" tick={{fill: '#9ca3af'}} axisLine={false} tickLine={false} />
                <YAxis dataKey="name" type="category" stroke="#9ca3af" tick={{fill: '#e5e7eb', fontSize: 12}} axisLine={false} tickLine={false} width={100} />
                <RechartsTooltip content={<CustomTooltip />} cursor={{fill: '#374151', opacity: 0.4}} />
                <Bar dataKey="sales" radius={[0, 4, 4, 0]} barSize={20}>
                  {popularData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default AdminDashboard;
