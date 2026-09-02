import React, { useState, useEffect } from 'react';
import { getPromoCodes, savePromoCodes } from '../../utils/storage';
import type { PromoCode } from '../../types';
import Button from '../../components/ui/Button';
import { useToast } from '../../context/ToastContext';
import { Tag, Plus, Edit2, Trash2, XCircle } from 'lucide-react';

const AdminPromoCodes = () => {
  const [promoCodes, setPromoCodes] = useState<PromoCode[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { addToast } = useToast();

  const [formData, setFormData] = useState<Partial<PromoCode>>({
    code: '',
    discountPercentage: 10,
    isActive: true
  });
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    loadPromoCodes();
  }, []);

  const loadPromoCodes = () => {
    setPromoCodes(getPromoCodes());
  };

  const handleOpenModal = (promo?: PromoCode) => {
    if (promo) {
      setFormData(promo);
      setIsEditing(true);
    } else {
      setFormData({
        code: '',
        discountPercentage: 10,
        isActive: true
      });
      setIsEditing(false);
    }
    setIsModalOpen(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.code) {
      addToast('Please provide a promo code', 'error');
      return;
    }

    const currentPromos = getPromoCodes();
    
    if (isEditing) {
      const updated = currentPromos.map(p => p.id === formData.id ? { ...formData } as PromoCode : p);
      savePromoCodes(updated);
      addToast('Promo code updated successfully', 'success');
    } else {
      const newPromo: PromoCode = {
        ...(formData as PromoCode),
        id: `pc_${Date.now()}`,
        code: formData.code.toUpperCase()
      };
      savePromoCodes([...currentPromos, newPromo]);
      addToast('Promo code created successfully', 'success');
    }
    
    setIsModalOpen(false);
    loadPromoCodes();
  };

  const handleDelete = (id: string) => {
    if (window.confirm('Are you sure you want to delete this promo code?')) {
      const currentPromos = getPromoCodes();
      savePromoCodes(currentPromos.filter(p => p.id !== id));
      addToast('Promo code deleted', 'success');
      loadPromoCodes();
    }
  };

  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Promo Codes</h1>
          <p className="text-gray-400">Manage discount codes for customers.</p>
        </div>
        <Button onClick={() => handleOpenModal()} className="flex items-center gap-2">
          <Plus size={18} /> Add Promo Code
        </Button>
      </div>

      <div className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden shadow-xl">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-800 border-b border-gray-700 text-gray-400 text-sm">
                <th className="p-4 font-medium">Code</th>
                <th className="p-4 font-medium">Discount (%)</th>
                <th className="p-4 font-medium">Status</th>
                <th className="p-4 font-medium text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-800">
              {promoCodes.length > 0 ? (
                promoCodes.map((promo) => (
                  <tr key={promo.id} className="hover:bg-gray-800/30 transition-colors">
                    <td className="p-4 font-medium text-white flex items-center gap-2">
                      <Tag size={16} className="text-primary-500" /> {promo.code}
                    </td>
                    <td className="p-4 text-gray-300">{promo.discountPercentage}%</td>
                    <td className="p-4">
                      <span className={`px-2 py-1 text-xs rounded-full border ${promo.isActive ? 'bg-green-500/10 text-green-400 border-green-500/20' : 'bg-red-500/10 text-red-400 border-red-500/20'}`}>
                        {promo.isActive ? 'Active' : 'Inactive'}
                      </span>
                    </td>
                    <td className="p-4 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <button onClick={() => handleOpenModal(promo)} className="p-2 text-gray-400 hover:text-white transition-colors bg-gray-800 rounded-md">
                          <Edit2 size={16} />
                        </button>
                        <button onClick={() => handleDelete(promo.id)} className="p-2 text-gray-400 hover:text-red-400 transition-colors bg-gray-800 rounded-md">
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={4} className="p-8 text-center text-gray-500">
                    No promo codes found. Add some to get started.
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
              <h3 className="text-xl font-bold text-white">{isEditing ? 'Edit Promo Code' : 'Add Promo Code'}</h3>
              <button onClick={() => setIsModalOpen(false)} className="text-gray-400 hover:text-white transition-colors">
                <XCircle size={24} />
              </button>
            </div>
            
            <form onSubmit={handleSubmit} className="flex flex-col">
              <div className="p-6 space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Promo Code</label>
                  <input
                    type="text"
                    required
                    value={formData.code}
                    onChange={(e) => setFormData({...formData, code: e.target.value.toUpperCase()})}
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg p-3 text-white focus:ring-2 focus:ring-primary-500 outline-none uppercase"
                    placeholder="e.g. SUMMER50"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Discount Percentage (%)</label>
                  <input
                    type="number"
                    required
                    min="1"
                    max="100"
                    value={formData.discountPercentage}
                    onChange={(e) => setFormData({...formData, discountPercentage: Number(e.target.value)})}
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg p-3 text-white focus:ring-2 focus:ring-primary-500 outline-none"
                  />
                </div>
                
                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    id="isActive"
                    checked={formData.isActive}
                    onChange={(e) => setFormData({...formData, isActive: e.target.checked})}
                    className="w-5 h-5 bg-gray-800 border-gray-700 rounded text-primary-500 focus:ring-primary-500 focus:ring-offset-gray-900"
                  />
                  <label htmlFor="isActive" className="text-sm font-medium text-gray-300">Active</label>
                </div>
              </div>
              
              <div className="p-6 border-t border-gray-800 bg-gray-800/50 flex justify-end gap-3">
                <Button type="button" variant="outline" onClick={() => setIsModalOpen(false)}>Cancel</Button>
                <Button type="submit">{isEditing ? 'Save Changes' : 'Create Promo Code'}</Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminPromoCodes;
