import React, { useState, useEffect } from 'react';
import { getSnacks, saveSnacks } from '../../utils/storage';
import type { SnackItem } from '../../types';
import Button from '../../components/ui/Button';
import { useToast } from '../../context/ToastContext';
import { Coffee, Plus, Edit2, Trash2, XCircle } from 'lucide-react';

const AdminSnacks = () => {
  const [snacks, setSnacks] = useState<SnackItem[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { addToast } = useToast();

  const [formData, setFormData] = useState<Partial<SnackItem>>({
    name: '',
    description: '',
    price: 100,
    image: '',
    category: 'Popcorn'
  });
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    loadSnacks();
  }, []);

  const loadSnacks = () => {
    setSnacks(getSnacks());
  };

  const handleOpenModal = (snack?: SnackItem) => {
    if (snack) {
      setFormData(snack);
      setIsEditing(true);
    } else {
      setFormData({
        name: '',
        description: '',
        price: 100,
        image: 'https://images.unsplash.com/photo-1578849278619-e73505e9610f?w=300&h=300&fit=crop',
        category: 'Popcorn'
      });
      setIsEditing(false);
    }
    setIsModalOpen(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.price || !formData.image) {
      addToast('Please fill all required fields', 'error');
      return;
    }

    const currentSnacks = getSnacks();
    
    if (isEditing) {
      const updated = currentSnacks.map(s => s.id === formData.id ? { ...formData } as SnackItem : s);
      saveSnacks(updated);
      addToast('Snack updated successfully', 'success');
    } else {
      const newSnack: SnackItem = {
        ...(formData as SnackItem),
        id: `snack_${Date.now()}`
      };
      saveSnacks([...currentSnacks, newSnack]);
      addToast('Snack created successfully', 'success');
    }
    
    setIsModalOpen(false);
    loadSnacks();
  };

  const handleDelete = (id: string) => {
    if (window.confirm('Are you sure you want to delete this snack?')) {
      const currentSnacks = getSnacks();
      saveSnacks(currentSnacks.filter(s => s.id !== id));
      addToast('Snack deleted', 'success');
      loadSnacks();
    }
  };

  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Food & Beverage</h1>
          <p className="text-gray-400">Manage snacks available for pre-booking.</p>
        </div>
        <Button onClick={() => handleOpenModal()} className="flex items-center gap-2">
          <Plus size={18} /> Add Snack
        </Button>
      </div>

      <div className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden shadow-xl">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-800 border-b border-gray-700 text-gray-400 text-sm">
                <th className="p-4 font-medium">Item</th>
                <th className="p-4 font-medium">Category</th>
                <th className="p-4 font-medium">Price</th>
                <th className="p-4 font-medium text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-800">
              {snacks.length > 0 ? (
                snacks.map((snack) => (
                  <tr key={snack.id} className="hover:bg-gray-800/30 transition-colors">
                    <td className="p-4 font-medium text-white flex items-center gap-4">
                      <img src={snack.image} alt={snack.name} className="w-12 h-12 object-cover rounded-md" />
                      <div>
                        <p>{snack.name}</p>
                        <p className="text-xs text-gray-500 line-clamp-1 max-w-xs">{snack.description}</p>
                      </div>
                    </td>
                    <td className="p-4 text-gray-300">{snack.category}</td>
                    <td className="p-4 text-gray-300">₹{snack.price}</td>
                    <td className="p-4 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <button onClick={() => handleOpenModal(snack)} className="p-2 text-gray-400 hover:text-white transition-colors bg-gray-800 rounded-md">
                          <Edit2 size={16} />
                        </button>
                        <button onClick={() => handleDelete(snack.id)} className="p-2 text-gray-400 hover:text-red-400 transition-colors bg-gray-800 rounded-md">
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={4} className="p-8 text-center text-gray-500">
                    No snacks found. Add some to get started.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="bg-gray-900 border border-gray-800 rounded-xl w-full max-w-md overflow-hidden flex flex-col shadow-2xl">
            <div className="p-6 border-b border-gray-800 flex justify-between items-center">
              <h3 className="text-xl font-bold text-white">{isEditing ? 'Edit Snack' : 'Add Snack'}</h3>
              <button onClick={() => setIsModalOpen(false)} className="text-gray-400 hover:text-white transition-colors">
                <XCircle size={24} />
              </button>
            </div>
            
            <form onSubmit={handleSubmit} className="flex flex-col">
              <div className="p-6 space-y-4 max-h-[60vh] overflow-y-auto">
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg p-3 text-white focus:ring-2 focus:ring-primary-500 outline-none"
                    placeholder="e.g. Medium Popcorn"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Description</label>
                  <textarea
                    required
                    value={formData.description}
                    onChange={(e) => setFormData({...formData, description: e.target.value})}
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg p-3 text-white focus:ring-2 focus:ring-primary-500 outline-none h-20"
                    placeholder="Brief description..."
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Price (₹)</label>
                  <input
                    type="number"
                    required
                    min="1"
                    value={formData.price}
                    onChange={(e) => setFormData({...formData, price: Number(e.target.value)})}
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg p-3 text-white focus:ring-2 focus:ring-primary-500 outline-none"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Category</label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({...formData, category: e.target.value as any})}
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg p-3 text-white focus:ring-2 focus:ring-primary-500 outline-none"
                  >
                    <option value="Popcorn">Popcorn</option>
                    <option value="Beverage">Beverage</option>
                    <option value="Combo">Combo</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Image URL</label>
                  <input
                    type="url"
                    required
                    value={formData.image}
                    onChange={(e) => setFormData({...formData, image: e.target.value})}
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg p-3 text-white focus:ring-2 focus:ring-primary-500 outline-none"
                    placeholder="https://..."
                  />
                </div>
              </div>
              
              <div className="p-6 border-t border-gray-800 bg-gray-800/50 flex justify-end gap-3">
                <Button type="button" variant="outline" onClick={() => setIsModalOpen(false)}>Cancel</Button>
                <Button type="submit">{isEditing ? 'Save Changes' : 'Add Snack'}</Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminSnacks;
