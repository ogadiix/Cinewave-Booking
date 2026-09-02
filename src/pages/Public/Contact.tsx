import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare } from 'lucide-react';
import Button from '../../components/ui/Button';
import { useToast } from '../../context/ToastContext';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { addToast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      addToast('Message sent successfully! Our team will get back to you soon.', 'success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsSubmitting(false);
    }, 1200);
  };

  return (
    <div className="container mx-auto px-4 py-12 max-w-6xl">
      <div className="text-center mb-16">
        <div className="flex justify-center mb-4">
          <div className="w-16 h-16 rounded-2xl bg-primary-500/20 flex items-center justify-center text-primary-500">
            <MessageSquare size={32} />
          </div>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Get in Touch</h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg">
          Have a question about your booking, want to leave feedback, or just say hello? 
          We're here to help make your cinema experience perfect.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Contact Information */}
        <div className="md:col-span-1 space-y-6">
          <div className="glass p-8 rounded-2xl border border-gray-800">
            <h3 className="text-xl font-bold text-white mb-6">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-primary-500 shrink-0">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1">Corporate HQ</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    123 Cinema Avenue, Sector 62<br />
                    Noida, UP 201309<br />
                    India
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-primary-500 shrink-0">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1">Email Us</h4>
                  <p className="text-gray-400 text-sm">support@cinewave.com</p>
                  <p className="text-gray-400 text-sm">feedback@cinewave.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-primary-500 shrink-0">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1">Call Us</h4>
                  <p className="text-gray-400 text-sm">1800-CINE-WAVE</p>
                  <p className="text-xs text-gray-500 mt-1">Mon-Sun: 9:00 AM - 10:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="md:col-span-2">
          <div className="glass p-8 rounded-2xl border border-gray-800">
            <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Your Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full bg-gray-800/50 border border-gray-700 text-white rounded-lg px-4 py-3 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Email Address</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full bg-gray-800/50 border border-gray-700 text-white rounded-lg px-4 py-3 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Subject</label>
                <select
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData({...formData, subject: e.target.value})}
                  className="w-full bg-gray-800/50 border border-gray-700 text-white rounded-lg px-4 py-3 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-colors appearance-none cursor-pointer"
                >
                  <option value="" disabled>Select a subject</option>
                  <option value="Booking Issue">Booking Issue / Cancellation</option>
                  <option value="Feedback">Theatre Experience Feedback</option>
                  <option value="Business">Business Inquiry</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                <textarea
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full bg-gray-800/50 border border-gray-700 text-white rounded-lg px-4 py-3 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-colors resize-none"
                  placeholder="How can we help you?"
                />
              </div>

              <Button type="submit" size="lg" className="w-full md:w-auto min-w-[200px]" isLoading={isSubmitting}>
                <Send size={18} className="mr-2" /> Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
