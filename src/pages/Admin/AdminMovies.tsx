import React, { useState, useEffect } from 'react';
import { getMovies, saveMovies } from '../../utils/storage';
import type { Movie } from '../../types';
import Button from '../../components/ui/Button';
import { useToast } from '../../context/ToastContext';
import { Plus, Edit2, Trash2, X } from 'lucide-react';
import Badge from '../../components/ui/Badge';

const AdminMovies = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const { addToast } = useToast();

  const [formData, setFormData] = useState<Omit<Movie, 'id'>>({
    title: '',
    description: '',
    genre: '',
    language: '',
    duration: '',
    rating: '',
    poster: '',
    releaseDate: '',
  });

  useEffect(() => {
    setMovies(getMovies());
  }, []);

  const openAddModal = () => {
    setEditingId(null);
    setFormData({
      title: '', description: '', genre: '', language: '',
      duration: '', rating: '', poster: '', releaseDate: ''
    });
    setIsModalOpen(true);
  };

  const openEditModal = (movie: Movie) => {
    setEditingId(movie.id);
    setFormData({
      title: movie.title, description: movie.description, genre: movie.genre,
      language: movie.language, duration: movie.duration, rating: movie.rating,
      poster: movie.poster, releaseDate: movie.releaseDate
    });
    setIsModalOpen(true);
  };

  const handleDelete = (id: string) => {
    if (window.confirm('Are you sure you want to delete this movie?')) {
      const newMovies = movies.filter(m => m.id !== id);
      setMovies(newMovies);
      saveMovies(newMovies);
      addToast('Movie deleted successfully', 'success');
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    let newMovies;
    if (editingId) {
      newMovies = movies.map(m => m.id === editingId ? { ...formData, id: editingId } : m);
      addToast('Movie updated successfully', 'success');
    } else {
      const newMovie = { ...formData, id: `m${Date.now()}` };
      newMovies = [...movies, newMovie];
      addToast('Movie added successfully', 'success');
    }
    
    setMovies(newMovies);
    saveMovies(newMovies);
    setIsModalOpen(false);
  };

  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Manage Movies</h1>
          <p className="text-gray-400">Add, edit, or remove movies from the system.</p>
        </div>
        <Button onClick={openAddModal}>
          <Plus size={18} className="mr-2" /> Add Movie
        </Button>
      </div>

      <div className="glass rounded-xl border border-gray-800 overflow-hidden">
        <div className="overflow-x-auto min-h-[400px]">
          <table className="w-full text-left">
            <thead className="bg-gray-800/50 text-gray-400 text-sm border-b border-gray-800">
              <tr>
                <th className="px-6 py-4 font-medium w-16">Poster</th>
                <th className="px-6 py-4 font-medium">Title</th>
                <th className="px-6 py-4 font-medium">Genre</th>
                <th className="px-6 py-4 font-medium">Details</th>
                <th className="px-6 py-4 font-medium text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-800">
              {movies.map(movie => (
                <tr key={movie.id} className="hover:bg-gray-800/30 transition-colors">
                  <td className="px-6 py-4">
                    <img src={movie.poster} alt={movie.title} className="w-12 h-16 object-cover rounded shadow-sm" />
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-white font-medium">{movie.title}</div>
                    <div className="text-xs text-gray-500 mt-1 line-clamp-1 max-w-xs">{movie.description}</div>
                  </td>
                  <td className="px-6 py-4 text-gray-400 text-sm">{movie.genre}</td>
                  <td className="px-6 py-4 text-sm">
                    <div className="flex gap-2 mb-1">
                      <Badge variant="outline" className="text-[10px] py-0">{movie.language}</Badge>
                      <Badge variant="success" className="text-[10px] py-0 bg-green-500/10 text-green-400">{movie.rating}</Badge>
                    </div>
                    <div className="text-xs text-gray-500">{movie.duration} • {new Date(movie.releaseDate).toLocaleDateString()}</div>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex justify-end gap-2">
                      <button onClick={() => openEditModal(movie)} className="p-2 text-blue-400 hover:bg-blue-400/10 rounded-md transition-colors">
                        <Edit2 size={16} />
                      </button>
                      <button onClick={() => handleDelete(movie.id)} className="p-2 text-red-400 hover:bg-red-400/10 rounded-md transition-colors">
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
              {movies.length === 0 && (
                <tr>
                  <td colSpan={5} className="px-6 py-12 text-center text-gray-500">
                    No movies found. Click "Add Movie" to create one.
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
          <div className="bg-gray-900 border border-gray-800 rounded-2xl w-full max-w-2xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]">
            <div className="p-6 border-b border-gray-800 flex justify-between items-center bg-gray-900 sticky top-0 z-10">
              <h2 className="text-xl font-bold text-white">{editingId ? 'Edit Movie' : 'Add New Movie'}</h2>
              <button onClick={() => setIsModalOpen(false)} className="text-gray-400 hover:text-white transition-colors">
                <X size={20} />
              </button>
            </div>
            
            <div className="p-6 overflow-y-auto">
              <form id="movieForm" onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="col-span-2">
                    <label className="block text-sm font-medium text-gray-300 mb-1">Title</label>
                    <input required type="text" value={formData.title} onChange={e => setFormData({...formData, title: e.target.value})} className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white focus:border-primary-500 outline-none" />
                  </div>
                  
                  <div className="col-span-2">
                    <label className="block text-sm font-medium text-gray-300 mb-1">Description</label>
                    <textarea required rows={3} value={formData.description} onChange={e => setFormData({...formData, description: e.target.value})} className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white focus:border-primary-500 outline-none" />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1">Genre</label>
                    <input required type="text" placeholder="e.g. Action, Drama" value={formData.genre} onChange={e => setFormData({...formData, genre: e.target.value})} className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white focus:border-primary-500 outline-none" />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1">Language</label>
                    <input required type="text" value={formData.language} onChange={e => setFormData({...formData, language: e.target.value})} className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white focus:border-primary-500 outline-none" />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1">Duration</label>
                    <input required type="text" placeholder="e.g. 150 min" value={formData.duration} onChange={e => setFormData({...formData, duration: e.target.value})} className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white focus:border-primary-500 outline-none" />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1">Rating</label>
                    <input required type="text" placeholder="e.g. UA, A" value={formData.rating} onChange={e => setFormData({...formData, rating: e.target.value})} className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white focus:border-primary-500 outline-none" />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1">Release Date</label>
                    <input required type="date" value={formData.releaseDate} onChange={e => setFormData({...formData, releaseDate: e.target.value})} className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white focus:border-primary-500 outline-none [color-scheme:dark]" />
                  </div>
                  
                  <div className="col-span-2">
                    <label className="block text-sm font-medium text-gray-300 mb-1">Poster URL</label>
                    <input required type="url" value={formData.poster} onChange={e => setFormData({...formData, poster: e.target.value})} className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white focus:border-primary-500 outline-none" />
                  </div>
                </div>
              </form>
            </div>
            
            <div className="p-6 border-t border-gray-800 flex justify-end gap-3 bg-gray-900 sticky bottom-0">
              <Button variant="outline" onClick={() => setIsModalOpen(false)}>Cancel</Button>
              <Button form="movieForm" type="submit">{editingId ? 'Save Changes' : 'Add Movie'}</Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminMovies;
