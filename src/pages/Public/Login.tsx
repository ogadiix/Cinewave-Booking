import React, { useState } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { getUsers, setCurrentUser } from '../../utils/storage';
import Button from '../../components/ui/Button';
import { useToast } from '../../context/ToastContext';
import { Film, User, Lock, AlertCircle } from 'lucide-react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { addToast } = useToast();
  
  const returnTo = location.state?.returnTo;

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      const users = getUsers();
      const user = users.find(u => u.email === email);

      if (user && password === 'demo123') {
        setCurrentUser(user);
        addToast(`Welcome back, ${user.name}!`, 'success');
        
        if (returnTo) {
          navigate(returnTo, { state: location.state });
        } else {
          // Navigate based on role
          navigate(`/${user.role}/dashboard`);
        }
      } else {
        addToast('Invalid email or password', 'error');
      }
      setIsLoading(false);
    }, 800);
  };

  const autofill = (demoEmail: string) => {
    setEmail(demoEmail);
    setPassword('demo123');
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Film size={48} className="mx-auto text-primary-500 mb-4" />
          <h1 className="text-3xl font-bold text-white mb-2">Welcome Back</h1>
          <p className="text-gray-400">Sign in to continue to CineWave</p>
        </div>

        <div className="glass p-8 rounded-2xl border border-gray-800 shadow-2xl mb-6">
          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Email Address</label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={20} />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-gray-800/50 border border-gray-700 text-white rounded-lg pl-10 pr-4 py-3 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-colors"
                  placeholder="Enter your email"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={20} />
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-gray-800/50 border border-gray-700 text-white rounded-lg pl-10 pr-4 py-3 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-colors"
                  placeholder="Enter your password"
                />
              </div>
            </div>

            <Button type="submit" className="w-full py-3" size="lg" isLoading={isLoading}>
              Sign In
            </Button>
          </form>
          <p className="text-center text-sm text-gray-400 mt-6">
            Don't have an account?{' '}
            <Link to="/register" className="text-primary-500 hover:text-primary-400 font-medium">
              Sign up here
            </Link>
          </p>
        </div>

        <div className="bg-blue-900/20 border border-blue-500/30 rounded-xl p-6 text-sm">
          <div className="flex items-center gap-2 text-blue-400 font-bold mb-4">
            <AlertCircle size={18} />
            DEMO CREDENTIALS
          </div>
          <p className="text-gray-300 mb-4">Click a role below to auto-fill credentials. Password for all is <code className="bg-gray-800 px-1 py-0.5 rounded text-primary-400">demo123</code></p>
          
          <div className="space-y-2">
            <button 
              onClick={() => autofill('customer@cinewave.com')}
              className="w-full text-left px-4 py-2 bg-gray-800 hover:bg-gray-700 border border-gray-700 rounded-lg text-gray-300 transition-colors flex justify-between"
            >
              <span>Customer</span>
              <span className="text-gray-500">customer@cinewave.com</span>
            </button>
            <button 
              onClick={() => autofill('staff@cinewave.com')}
              className="w-full text-left px-4 py-2 bg-gray-800 hover:bg-gray-700 border border-gray-700 rounded-lg text-gray-300 transition-colors flex justify-between"
            >
              <span>Staff</span>
              <span className="text-gray-500">staff@cinewave.com</span>
            </button>
            <button 
              onClick={() => autofill('admin@cinewave.com')}
              className="w-full text-left px-4 py-2 bg-gray-800 hover:bg-gray-700 border border-gray-700 rounded-lg text-gray-300 transition-colors flex justify-between"
            >
              <span>Admin</span>
              <span className="text-gray-500">admin@cinewave.com</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
