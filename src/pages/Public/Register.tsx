import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { getUsers, saveUsers, setCurrentUser } from '../../utils/storage';
import type { User } from '../../types';
import Button from '../../components/ui/Button';
import { useToast } from '../../context/ToastContext';
import { Film, User as UserIcon, Lock, Mail, Phone } from 'lucide-react';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { addToast } = useToast();

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (formData.password !== formData.confirmPassword) {
      addToast('Passwords do not match', 'error');
      return;
    }

    setIsLoading(true);

    setTimeout(() => {
      const users = getUsers();
      
      // Check if user already exists
      if (users.some(u => u.email === formData.email)) {
        addToast('Email already in use', 'error');
        setIsLoading(false);
        return;
      }

      const newUser: User = {
        id: `u${Date.now()}`,
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        role: 'customer',
        status: 'active',
        createdDate: new Date().toISOString().split('T')[0]
      };

      saveUsers([...users, newUser]);
      setCurrentUser(newUser);
      
      addToast('Account created successfully!', 'success');
      navigate('/customer/dashboard');
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-[85vh] flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-xl">
        <div className="text-center mb-8">
          <Film size={48} className="mx-auto text-primary-500 mb-4" />
          <h1 className="text-3xl font-bold text-white mb-2">Create an Account</h1>
          <p className="text-gray-400">Join CineWave to book your favorite movies</p>
        </div>

        <div className="glass p-8 rounded-2xl border border-gray-800 shadow-2xl">
          <form onSubmit={handleRegister} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Full Name</label>
              <div className="relative">
                <UserIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={20} />
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full bg-gray-800/50 border border-gray-700 text-white rounded-lg pl-10 pr-4 py-3 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-colors"
                  placeholder="John Doe"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Email Address</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={20} />
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full bg-gray-800/50 border border-gray-700 text-white rounded-lg pl-10 pr-4 py-3 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Phone Number</label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={20} />
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full bg-gray-800/50 border border-gray-700 text-white rounded-lg pl-10 pr-4 py-3 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-colors"
                    placeholder="+1 234 567 8900"
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Password</label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={20} />
                  <input
                    type="password"
                    required
                    minLength={6}
                    value={formData.password}
                    onChange={(e) => setFormData({...formData, password: e.target.value})}
                    className="w-full bg-gray-800/50 border border-gray-700 text-white rounded-lg pl-10 pr-4 py-3 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-colors"
                    placeholder="••••••••"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Confirm Password</label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={20} />
                  <input
                    type="password"
                    required
                    minLength={6}
                    value={formData.confirmPassword}
                    onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})}
                    className="w-full bg-gray-800/50 border border-gray-700 text-white rounded-lg pl-10 pr-4 py-3 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-colors"
                    placeholder="••••••••"
                  />
                </div>
              </div>
            </div>

            <div className="pt-2">
              <Button type="submit" className="w-full py-3" size="lg" isLoading={isLoading}>
                Create Account
              </Button>
            </div>
            
            <p className="text-center text-sm text-gray-400 mt-6">
              Already have an account?{' '}
              <Link to="/login" className="text-primary-500 hover:text-primary-400 font-medium">
                Sign in here
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
