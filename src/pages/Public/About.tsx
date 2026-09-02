import React from 'react';
import { Film, Users, Shield, MonitorPlay, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../../components/ui/Button';

const About = () => {
  return (
    <div className="pb-16">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden mb-16">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=2070&auto=format&fit=crop" 
            alt="Cinema" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/80 via-gray-900/90 to-gray-950"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <div className="flex justify-center mb-6">
            <Film size={64} className="text-primary-500 animate-pulse" />
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight">
            Redefining the <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-purple-600">Cinema Experience</span>
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed mb-8">
            CineWave Entertainment is your premium destination for watching movies exactly how they were meant to be seen. 
            Immersive sound, crystal-clear projection, and absolute comfort.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 max-w-6xl">
        {/* Stats */}
        <section className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20 -mt-24 relative z-20">
          {[
            { label: 'Cinemas Nationwide', value: '45+' },
            { label: 'Active Screens', value: '320' },
            { label: 'Happy Customers', value: '1.2M' },
            { label: 'Years of Magic', value: '15' },
          ].map((stat, i) => (
            <div key={i} className="glass p-6 rounded-2xl border border-gray-800 text-center">
              <h3 className="text-4xl font-black text-white mb-2">{stat.value}</h3>
              <p className="text-sm text-primary-400 font-medium uppercase tracking-wider">{stat.label}</p>
            </div>
          ))}
        </section>

        {/* Features */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Why Choose CineWave?</h2>
            <div className="w-24 h-1 bg-primary-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass p-8 rounded-2xl border border-gray-800 hover:border-primary-500/50 transition-colors">
              <div className="w-14 h-14 rounded-full bg-primary-500/20 flex items-center justify-center text-primary-500 mb-6">
                <MonitorPlay size={28} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">IMAX & Laser Projection</h3>
              <p className="text-gray-400 leading-relaxed">
                Experience unparalleled brightness, contrast, and color with our state-of-the-art 4K laser projection systems available at all major locations.
              </p>
            </div>

            <div className="glass p-8 rounded-2xl border border-gray-800 hover:border-primary-500/50 transition-colors">
              <div className="w-14 h-14 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-500 mb-6">
                <Zap size={28} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Dolby Atmos Surround</h3>
              <p className="text-gray-400 leading-relaxed">
                Feel every moment with immersive spatial audio that flows around and above you, bringing the action on screen into the theatre.
              </p>
            </div>

            <div className="glass p-8 rounded-2xl border border-gray-800 hover:border-primary-500/50 transition-colors">
              <div className="w-14 h-14 rounded-full bg-green-500/20 flex items-center justify-center text-green-500 mb-6">
                <Shield size={28} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Premium Comfort</h3>
              <p className="text-gray-400 leading-relaxed">
                Relax in our luxurious recliners with extra legroom, privacy partitions, and on-demand food & beverage service directly to your seat.
              </p>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl p-12 border border-gray-700 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"></div>
          
          <div className="relative z-10">
            <h2 className="text-3xl font-bold text-white mb-4">Ready for the show?</h2>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              Join thousands of movie lovers and book your next cinematic adventure with CineWave today.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/movies">
                <Button size="lg" className="w-full sm:w-auto">View Now Showing</Button>
              </Link>
              <Link to="/register">
                <Button size="lg" variant="outline" className="w-full sm:w-auto bg-transparent hover:bg-gray-800 text-white border-gray-600">
                  Create an Account
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
