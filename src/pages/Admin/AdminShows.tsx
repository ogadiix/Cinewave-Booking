import React, { useState, useEffect } from 'react';
import { getShows, saveShows, getMovies, getTheatres } from '../../utils/storage';
import type { Show, Movie, Theatre } from '../../types';
import Button from '../../components/ui/Button';
import { useToast } from '../../context/ToastContext';
import { Plus, Edit2, Trash2, X } from 'lucide-react';

interface EnrichedShow extends Show {
  movieName?: string;
  theatreName?: string;
}

const AdminShows = () => {
  const [shows, setShows] = useState<EnrichedShow[]>([]);
  const [movies, setMovies] = useState<Movie[]>([]);
  const [theatres, setTheatres] = useState<Theatre[]>([]);
  
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const { addToast } = useToast();

  const [formData, setFormData] = useState<Omit<Show, 'id'>>({
    movieId: '',
    theatreId: '',
    date: '',
    time: '',
    ticketPrice: 0,
    availableSeats: 48,
  });

  const loadShows = () => {
    const allShows = getShows();
    const allMovies = getMovies();
    const allTheatres = getTheatres();
    
    setMovies(allMovies);
    setTheatres(allTheatres);
    
    const enriched = allShows.map(s => {
      const movie = allMovies.find(m => m.id === s.movieId);
      const theatre = allTheatres.find(t => t.id === s.theatreId);
      return { ...s, movieName: movie?.title, theatreName: theatre?.name };
    });
    
    setShows(enriched);
  };

  useEffect(() => {
    loadShows();
  }, []);

  const openAddModal = () => {
    setEditingId(null);
    setFormData({
      movieId: movies.length > 0 ? movies[0].id : '',
      theatreId: theatres.length > 0 ? theatres[0].id : '',
      date: new Date().toISOString().split('T')[0],
      time: '10:00 AM',
      ticketPrice: 200,
      availableSeats: 48,
    });
    setIsModalOpen(true);
  };

  const openEditModal = (show: Show) => {
    setEditingId(show.id);
    setFormData({
      movieId: show.movieId,
      theatreId: show.theatreId,
      date: show.date,
      time: show.time,
      ticketPrice: show.ticketPrice,
      availableSeats: show.availableSeats,
    });
    setIsModalOpen(true);
  };

  const handleDelete = (id: string) => {
    if (window.confirm('Are you sure you want to delete this show?')) {
      const allShows = getShows();
      const newShows = allShows.filter(s => s.id !== id);
      saveShows(newShows);
      loadShows();
      addToast('Show deleted successfully', 'success');
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const allShows = getShows();
    let newShows;
    
    if (editingId) {
      newShows = allShows.map(s => s.id === editingId ? { ...formData, id: editingId } : s);
      addToast('Show updated successfully', 'success');
    } else {
      const newShow = { ...formData, id: `s${Date.now()}` };
      newShows = [...allShows, newShow];
      addToast('Show added successfully', 'success');
    }
    
    saveShows(newShows);
    loadShows();
    setIsModalOpen(false);
  };

  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Manage Shows</h1>
          <p className="text-gray-400">Schedule movies at theatres.</p>
        </div>
        <Button onClick={openAddModal}>
          <Plus size={18} className="mr-2" /> Add Show
        </Button>
      </div>

      <div className="glass rounded-xl border border-gray-800 overflow-hidden">
        <div className="overflow-x-auto min-h-[400px]">
          <table className="w-full text-left">
            <thead className="bg-gray-800/50 text-gray-400 text-sm border-b border-gray-800">
              <tr>
                <th className="px-6 py-4 font-medium">Movie</th>
                <th className="px-6 py-4 font-medium">Theatre</th>
                <th className="px-6 py-4 font-medium">Date & Time</th>
                <th className="px-6 py-4 font-medium">Ticket Price</th>
                <th className="px-6 py-4 font-medium text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-800">
              {shows.map(show => (
                <tr key={show.id} className="hover:bg-gray-800/30 transition-colors">
                  <td className="px-6 py-4 text-white font-medium">{show.movieName}</td>
                  <td className="px-6 py-4 text-gray-400 text-sm">{show.theatreName}</td>
                  <td className="px-6 py-4 text-sm">
                    <div className="text-white">{new Date(show.date).toLocaleDateString()}</div>
                    <div className="text-xs text-gray-500">{show.time}</div>
                  </td>
                  <td className="px-6 py-4 text-white font-medium">₹{show.ticketPrice}</td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex justify-end gap-2">
                      <button onClick={() => openEditModal(show)} className="p-2 text-blue-400 hover:bg-blue-400/10 rounded-md transition-colors">
                        <Edit2 size={16} />
                      </button>
                      <button onClick={() => handleDelete(show.id)} className="p-2 text-red-400 hover:bg-red-400/10 rounded-md transition-colors">
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
              {shows.length === 0 && (
                <tr>
                  <td colSpan={5} className="px-6 py-12 text-center text-gray-500">
                    No shows found. Click "Add Show" to schedule one.
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
              <h2 className="text-xl font-bold text-white">{editingId ? 'Edit Show' : 'Add New Show'}</h2>
              <button onClick={() => setIsModalOpen(false)} className="text-gray-400 hover:text-white transition-colors">
                <X size={20} />
              </button>
            </div>
            
            <div className="p-6 overflow-y-auto">
              <form id="showForm" onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">Movie</label>
                  <select required value={formData.movieId} onChange={e => setFormData({...formData, movieId: e.target.value})} className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white focus:border-primary-500 outline-none">
                    <option value="" disabled>Select Movie</option>
                    {movies.map(m => <option key={m.id} value={m.id}>{m.title}</option>)}
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">Theatre</label>
                  <select required value={formData.theatreId} onChange={e => setFormData({...formData, theatreId: e.target.value})} className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white focus:border-primary-500 outline-none">
                    <option value="" disabled>Select Theatre</option>
                    {theatres.map(t => <option key={t.id} value={t.id}>{t.name}</option>)}
                  </select>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1">Date</label>
                    <input required type="date" value={formData.date} onChange={e => setFormData({...formData, date: e.target.value})} className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white focus:border-primary-500 outline-none [color-scheme:dark]" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1">Time</label>
                    <input required type="text" placeholder="e.g. 10:00 AM" value={formData.time} onChange={e => setFormData({...formData, time: e.target.value})} className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white focus:border-primary-500 outline-none" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">Ticket Price (₹)</label>
                  <input required type="number" min="0" value={formData.ticketPrice} onChange={e => setFormData({...formData, ticketPrice: parseFloat(e.target.value)})} className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white focus:border-primary-500 outline-none" />
                </div>
              </form>
            </div>
            
            <div className="p-6 border-t border-gray-800 flex justify-end gap-3 bg-gray-900">
              <Button variant="outline" onClick={() => setIsModalOpen(false)}>Cancel</Button>
              <Button form="showForm" type="submit">{editingId ? 'Save Changes' : 'Add Show'}</Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminShows;
