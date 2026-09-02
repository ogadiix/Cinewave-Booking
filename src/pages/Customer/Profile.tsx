import React, { useState, useEffect } from 'react';
import { getCurrentUser, getUsers, saveUsers, setCurrentUser } from '../../utils/storage';
import type { User } from '../../types';
import Button from '../../components/ui/Button';
import { useToast } from '../../context/ToastContext';
import { User as UserIcon, Mail, Phone, Shield } from 'lucide-react';

const Profile = () => {
  const [user, setUser] = useState<User | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });
  const [isEditing, setIsEditing] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { addToast } = useToast();

  useEffect(() => {
    const currentUser = getCurrentUser();
    if (currentUser) {
      setUser(currentUser);
      setFormData({
        name: currentUser.name,
        email: currentUser.email,
        phone: currentUser.phone,
      });
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) return;
    
    setIsLoading(true);

    setTimeout(() => {
      const allUsers = getUsers();
      
      // Update in the main users list
      const updatedUsers = allUsers.map(u => 
        u.id === user.id ? { ...u, name: formData.name, phone: formData.phone } : u
      );
      
      saveUsers(updatedUsers);
      
      // Update current session
      const updatedUser = { ...user, name: formData.name, phone: formData.phone };
      setCurrentUser(updatedUser);
      setUser(updatedUser);
      
      addToast('Profile updated successfully', 'success');
      setIsEditing(false);
      setIsLoading(false);
    }, 800);
  };

  if (!user) return null;

  return (
    <div className="max-w-4xl mx-auto py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">My Profile</h1>
        <p className="text-gray-400">Manage your personal information and account settings.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Sidebar */}
        <div className="md:col-span-1">
          <div className="glass p-8 rounded-2xl border border-gray-800 text-center flex flex-col items-center">
            <div className="w-24 h-24 rounded-full bg-primary-500/20 text-primary-500 flex items-center justify-center mb-4">
              <UserIcon size={48} />
            </div>
            <h2 className="text-xl font-bold text-white mb-1">{user.name}</h2>
            <p className="text-sm text-gray-400 mb-4">{user.email}</p>
            
            <div className="inline-flex items-center justify-center px-3 py-1 rounded-full bg-gray-800 text-gray-300 text-xs font-medium capitalize">
              {user.role} Account
            </div>
            
            <div className="w-full h-px bg-gray-800 my-6"></div>
            
            <div className="w-full text-left text-sm text-gray-400">
              <p className="mb-2">Member since: <span className="text-white">{new Date(user.createdDate).toLocaleDateString()}</span></p>
              <p>Account status: <span className="text-green-500">Active</span></p>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="md:col-span-2">
          <div className="glass p-8 rounded-2xl border border-gray-800">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold text-white">Personal Information</h3>
              {!isEditing && (
                <Button variant="outline" size="sm" onClick={() => setIsEditing(true)}>
                  Edit Profile
                </Button>
              )}
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Full Name</label>
                <div className="relative">
                  <UserIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={20} />
                  <input
                    type="text"
                    required
                    disabled={!isEditing}
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full bg-gray-800/50 border border-gray-700 text-white rounded-lg pl-10 pr-4 py-3 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Email Address</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={20} />
                  <input
                    type="email"
                    disabled
                    value={formData.email}
                    className="w-full bg-gray-900 border border-gray-800 text-gray-500 rounded-lg pl-10 pr-4 py-3 cursor-not-allowed"
                  />
                </div>
                <p className="text-xs text-gray-500 mt-2 flex items-center gap-1">
                  <Shield size={12} /> Email address cannot be changed.
                </p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Phone Number</label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={20} />
                  <input
                    type="tel"
                    required
                    disabled={!isEditing}
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full bg-gray-800/50 border border-gray-700 text-white rounded-lg pl-10 pr-4 py-3 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
                  />
                </div>
              </div>

              {isEditing && (
                <div className="flex gap-4 pt-4 border-t border-gray-800">
                  <Button type="button" variant="outline" onClick={() => {
                    setIsEditing(false);
                    setFormData({ name: user.name, email: user.email, phone: user.phone });
                  }}>
                    Cancel
                  </Button>
                  <Button type="submit" isLoading={isLoading}>
                    Save Changes
                  </Button>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
