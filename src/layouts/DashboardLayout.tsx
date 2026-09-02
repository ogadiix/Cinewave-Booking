import React from 'react';
import { Outlet, Link, useLocation, useNavigate } from 'react-router-dom';
import { Film, LogOut, LayoutDashboard, Ticket, Users, FileVideo, MapPin, CalendarClock } from 'lucide-react';
import { getCurrentUser, clearCurrentUser } from '../utils/storage';

const DashboardLayout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const user = getCurrentUser();

  const handleLogout = () => {
    clearCurrentUser();
    navigate('/');
  };

  const isActive = (path: string) => location.pathname.includes(path);

  // Define sidebar links based on role
  let links: { name: string, path: string, icon: React.ReactNode }[] = [];
  
  if (user?.role === 'customer') {
    links = [
      { name: 'Dashboard', path: '/customer/dashboard', icon: <LayoutDashboard size={20} /> },
      { name: 'My Bookings', path: '/customer/bookings', icon: <Ticket size={20} /> },
      { name: 'Profile', path: '/customer/profile', icon: <Users size={20} /> },
    ];
  } else if (user?.role === 'staff') {
    links = [
      { name: 'Dashboard', path: '/staff/dashboard', icon: <LayoutDashboard size={20} /> },
      { name: 'Bookings', path: '/staff/bookings', icon: <Ticket size={20} /> },
    ];
  } else if (user?.role === 'admin') {
    links = [
      { name: 'Dashboard', path: '/admin/dashboard', icon: <LayoutDashboard size={20} /> },
      { name: 'Movies', path: '/admin/movies', icon: <FileVideo size={20} /> },
      { name: 'Theatres', path: '/admin/theatres', icon: <MapPin size={20} /> },
      { name: 'Shows', path: '/admin/shows', icon: <CalendarClock size={20} /> },
      { name: 'Users', path: '/admin/users', icon: <Users size={20} /> },
    ];
  }

  return (
    <div className="min-h-screen flex bg-gray-900 text-gray-200">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-900 border-r border-gray-800 flex flex-col sticky top-0 h-screen">
        <div className="p-6 border-b border-gray-800">
          <Link to="/" className="flex items-center gap-2 text-primary-500 hover:text-primary-400 transition-colors">
            <Film size={28} strokeWidth={2.5} />
            <span className="text-xl font-bold tracking-tight">CineWave</span>
          </Link>
          <div className="mt-4 pt-4 border-t border-gray-800">
            <p className="text-sm font-medium text-white">{user?.name}</p>
            <p className="text-xs text-gray-400 capitalize">{user?.role} Portal</p>
          </div>
        </div>

        <nav className="flex-1 py-6 px-4 space-y-2 overflow-y-auto">
          {links.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                isActive(link.path) 
                  ? 'bg-primary-600/10 text-primary-500 font-medium' 
                  : 'text-gray-400 hover:text-white hover:bg-gray-800'
              }`}
            >
              {link.icon}
              <span>{link.name}</span>
            </Link>
          ))}
        </nav>

        <div className="p-4 border-t border-gray-800">
          <button 
            onClick={handleLogout}
            className="flex items-center gap-3 px-4 py-3 w-full rounded-lg text-gray-400 hover:text-white hover:bg-gray-800 transition-colors"
          >
            <LogOut size={20} />
            <span>Sign Out</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col h-screen overflow-y-auto bg-gray-900">
        <div className="p-8 flex-1">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default DashboardLayout;
