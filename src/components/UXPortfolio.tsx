import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Palette, Monitor, Smartphone, Users, Eye, Star, Calendar } from 'lucide-react';

interface UXProject {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  url: string;
  tags: string[];
  type: 'Web App' | 'Mobile App' | 'Desktop' | 'Prototype';
  year: string;
  client?: string;
}

const UXPortfolio: React.FC = () => {
  const projects: UXProject[] = [
    {
      id: '1',
      title: 'E-commerce Redesign',
      description: 'Rediseño completo de la experiencia de usuario para una plataforma de comercio electrónico. Mejora del 40% en conversión y reducción del 60% en abandono de carrito.',
      thumbnail: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop&auto=format',
      url: '#',
      tags: ['UX Research', 'Figma', 'Prototyping', 'A/B Testing'],
      type: 'Web App',
      year: '2023',
      client: 'Retail Company'
    },
    {
      id: '2',
      title: 'Banking Mobile App',
      description: 'Diseño de aplicación móvil para banca digital con enfoque en accesibilidad y usabilidad. Implementación de design system completo y testing con usuarios.',
      thumbnail: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=300&fit=crop&auto=format',
      url: '#',
      tags: ['Mobile UX', 'Design System', 'Accessibility', 'User Testing'],
      type: 'Mobile App',
      year: '2023',
      client: 'FinTech Startup'
    }
  ];

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'Mobile App':
        return <Smartphone className="w-4 h-4" />;
      case 'Web App':
        return <Monitor className="w-4 h-4" />;
      case 'Desktop':
        return <Monitor className="w-4 h-4" />;
      default:
        return <Palette className="w-4 h-4" />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Mobile App':
        return 'from-green-500 to-emerald-500';
      case 'Web App':
        return 'from-blue-500 to-cyan-500';
      case 'Desktop':
        return 'from-purple-500 to-pink-500';
      default:
        return 'from-gray-500 to-gray-600';
    }
  };

  return (
    <div className="space-y-6">
      {/* Grid de proyectos */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -3, scale: 1.02 }}
            className="bg-gray-700 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
          >
            {/* Thumbnail */}
            <div className="relative h-48 overflow-hidden">
              <img
                src={project.thumbnail}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              
              {/* Type badge */}
              <div className="absolute top-3 left-3 flex items-center space-x-1">
                <div className={`flex items-center space-x-1 bg-gradient-to-r ${getTypeColor(project.type)} px-3 py-1 rounded-full text-white text-sm font-medium`}>
                  {getTypeIcon(project.type)}
                  <span>{project.type}</span>
                </div>
              </div>

              {/* Year badge */}
              <div className="absolute top-3 right-3 flex items-center space-x-1 bg-black/60 backdrop-blur-sm px-3 py-1 rounded-full">
                <Calendar className="w-4 h-4 text-white" />
                <span className="text-sm text-white font-medium">{project.year}</span>
              </div>
            </div>

            {/* Content */}
            <div className="p-6">
              <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
              
              <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                {project.description}
              </p>

              {/* Client */}
              {project.client && (
                <div className="flex items-center space-x-2 text-sm text-gray-400 mb-4">
                  <Users className="w-4 h-4" />
                  <span>{project.client}</span>
                </div>
              )}

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-blue-500/20 text-blue-300 text-xs rounded-full font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Action button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-3 rounded-lg font-medium hover:shadow-lg transition-all duration-200 group"
              >
                <Eye className="w-4 h-4" />
                <span>Ver Caso de Estudio</span>
                <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Descripción adicional */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="bg-gradient-to-r from-gray-700 to-gray-600 rounded-xl p-6 border border-gray-600"
      >
        <div className="text-center">
          <h3 className="text-lg font-bold text-white mb-3 flex items-center justify-center">
            <Palette className="w-5 h-5 mr-2 text-blue-500" />
            Enfoque UX/UI
          </h3>
          <p className="text-gray-300 mb-4 leading-relaxed">
            Mi metodología se centra en la investigación de usuarios, el diseño iterativo y la validación constante. 
            Cada proyecto comienza con un profundo entendimiento de las necesidades del usuario y los objetivos de negocio, 
            aplicando principios de usabilidad y accesibilidad para crear experiencias digitales excepcionales.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {['User Research', 'Wireframing', 'Prototyping', 'User Testing'].map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 + (index * 0.05) }}
                className="text-center p-3 bg-gray-800 rounded-lg"
              >
                <div className="text-sm font-medium text-white">{skill}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default UXPortfolio;