import React, { useState, useEffect } from 'react';
import { getTheatres, saveTheatres } from '../../utils/storage';
import type { Theatre } from '../../types';
import Button from '../../components/ui/Button';
import { useToast } from '../../context/ToastContext';
import { Plus, Edit2, Trash2, X } from 'lucide-react';

const AdminTheatres = () => {
  const [theatres, setTheatres] = useState<Theatre[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const { addToast } = useToast();

  const [formData, setFormData] = useState<Omit<Theatre, 'id'>>({
    name: '',
    location: '',
    screens: 1,
  });

  useEffect(() => {
    setTheatres(getTheatres());
  }, []);

  const openAddModal = () => {
    setEditingId(null);
    setFormData({ name: '', location: '', screens: 1 });
    setIsModalOpen(true);
  };

  const openEditModal = (theatre: Theatre) => {
    setEditingId(theatre.id);
    setFormData({ name: theatre.name, location: theatre.location, screens: theatre.screens });
    setIsModalOpen(true);
  };

  const handleDelete = (id: string) => {
    if (window.confirm('Are you sure you want to delete this theatre? Note: This might break existing shows connected to it.')) {
      const newTheatres = theatres.filter(t => t.id !== id);
      setTheatres(newTheatres);
      saveTheatres(newTheatres);
      addToast('Theatre deleted successfully', 'success');
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    let newTheatres;
    if (editingId) {
      newTheatres = theatres.map(t => t.id === editingId ? { ...formData, id: editingId } : t);
      addToast('Theatre updated successfully', 'success');
    } else {
      const newTheatre = { ...formData, id: `t${Date.now()}` };
      newTheatres = [...theatres, newTheatre];
      addToast('Theatre added successfully', 'success');
    }
    
    setTheatres(newTheatres);
    saveTheatres(newTheatres);
    setIsModalOpen(false);
  };

  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Manage Theatres</h1>
          <p className="text-gray-400">Add, edit, or remove theatre locations.</p>
        </div>
        <Button onClick={openAddModal}>
          <Plus size={18} className="mr-2" /> Add Theatre
        </Button>
      </div>

      <div className="glass rounded-xl border border-gray-800 overflow-hidden">
        <div className="overflow-x-auto min-h-[400px]">
          <table className="w-full text-left">
            <thead className="bg-gray-800/50 text-gray-400 text-sm border-b border-gray-800">
              <tr>
                <th className="px-6 py-4 font-medium">Theatre Name</th>
                <th className="px-6 py-4 font-medium">Location</th>
                <th className="px-6 py-4 font-medium">Screens</th>
                <th className="px-6 py-4 font-medium text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-800">
              {theatres.map(theatre => (
                <tr key={theatre.id} className="hover:bg-gray-800/30 transition-colors">
                  <td className="px-6 py-4 text-white font-medium">{theatre.name}</td>
                  <td className="px-6 py-4 text-gray-400 text-sm">{theatre.location}</td>
                  <td className="px-6 py-4 text-gray-400 text-sm">{theatre.screens} Screens</td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex justify-end gap-2">
                      <button onClick={() => openEditModal(theatre)} className="p-2 text-blue-400 hover:bg-blue-400/10 rounded-md transition-colors">
                        <Edit2 size={16} />
                      </button>
                      <button onClick={() => handleDelete(theatre.id)} className="p-2 text-red-400 hover:bg-red-400/10 rounded-md transition-colors">
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
              {theatres.length === 0 && (
                <tr>
                  <td colSpan={4} className="px-6 py-12 text-center text-gray-500">
                    No theatres found. Click "Add Theatre" to create one.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
          <div className="bg-gray-900 border border-gray-800 rounded-2xl w-full max-w-md overflow-hidden shadow-2xl flex flex-col">
            <div className="p-6 border-b border-gray-800 flex justify-between items-center bg-gray-900">
              <h2 className="text-xl font-bold text-white">{editingId ? 'Edit Theatre' : 'Add New Theatre'}</h2>
              <button onClick={() => setIsModalOpen(false)} className="text-gray-400 hover:text-white transition-colors">
                <X size={20} />
              </button>
            </div>
            
            <div className="p-6">
              <form id="theatreForm" onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">Theatre Name</label>
                  <input required type="text" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white focus:border-primary-500 outline-none" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">Location</label>
                  <input required type="text" value={formData.location} onChange={e => setFormData({...formData, location: e.target.value})} className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white focus:border-primary-500 outline-none" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">Number of Screens</label>
                  <input required type="number" min="1" value={formData.screens} onChange={e => setFormData({...formData, screens: parseInt(e.target.value)})} className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white focus:border-primary-500 outline-none" />
                </div>
              </form>
            </div>
            
            <div className="p-6 border-t border-gray-800 flex justify-end gap-3 bg-gray-900">
              <Button variant="outline" onClick={() => setIsModalOpen(false)}>Cancel</Button>
              <Button form="theatreForm" type="submit">{editingId ? 'Save Changes' : 'Add Theatre'}</Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminTheatres;
