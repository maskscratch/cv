import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, User, MessageSquare, CheckCircle, AlertCircle } from 'lucide-react';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    
    // Simular envío (en producción, aquí iría la lógica real de envío)
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus('idle'), 3000);
    }, 2000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-gray-800 p-6 rounded-2xl shadow-lg"
    >
      <h3 className="text-xl font-bold mb-6 flex items-center">
        <Mail className="w-5 h-5 mr-2 text-blue-500" />
        Formulario de Contacto
      </h3>

      {status === 'success' && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="mb-6 p-4 bg-green-500/20 border border-green-500 rounded-lg flex items-center space-x-2"
        >
          <CheckCircle className="w-5 h-5 text-green-500" />
          <span className="text-green-400">¡Mensaje enviado correctamente!</span>
        </motion.div>
      )}

      {status === 'error' && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="mb-6 p-4 bg-red-500/20 border border-red-500 rounded-lg flex items-center space-x-2"
        >
          <AlertCircle className="w-5 h-5 text-red-500" />
          <span className="text-red-400">Error al enviar el mensaje. Inténtalo de nuevo.</span>
        </motion.div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
              Nombre *
            </label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500" />
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full pl-10 pr-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400"
                placeholder="Tu nombre"
              />
            </div>
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
              Email *
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500" />
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full pl-10 pr-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400"
                placeholder="tu@email.com"
              />
            </div>
          </div>
        </div>

        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
            Asunto *
          </label>
          <select
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
          >
            <option value="">Selecciona un asunto</option>
            <option value="game-design">Oportunidad Game Design</option>
            <option value="ux-ui">Oportunidad UX/UI Design</option>
            <option value="music-business">Consultoría Music Business</option>
            <option value="collaboration">Colaboración</option>
            <option value="other">Otro</option>
          </select>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
            Mensaje *
          </label>
          <div className="relative">
            <MessageSquare className="absolute left-3 top-3 w-4 h-4 text-gray-500" />
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full pl-10 pr-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400 resize-none"
              placeholder="Cuéntame sobre tu proyecto o consulta..."
            />
          </div>
        </div>

        <motion.button
          type="submit"
          disabled={status === 'sending'}
          whileHover={{ scale: status === 'sending' ? 1 : 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {status === 'sending' ? (
            <>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                className="w-4 h-4 border-2 border-white border-t-transparent rounded-full"
              />
              <span>Enviando...</span>
            </>
          ) : (
            <>
              <Send className="w-4 h-4" />
              <span>Enviar Mensaje</span>
            </>
          )}
        </motion.button>
      </form>
    </motion.div>
  );
};

export default ContactForm;