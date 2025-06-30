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
    },
    {
      id: '3',
      title: 'SaaS Dashboard',
      description: 'Interfaz de usuario para plataforma SaaS de gestión empresarial. Optimización de flujos de trabajo y mejora de la experiencia de onboarding.',
      thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop&auto=format',
      url: '#',
      tags: ['Dashboard Design', 'Data Visualization', 'User Flows', 'B2B'],
      type: 'Web App',
      year: '2022',
      client: 'Tech Company'
    },
    {
      id: '4',
      title: 'Travel App Concept',
      description: 'Concepto de aplicación móvil para planificación de viajes. Investigación de usuarios, wireframes, prototipo interactivo y testing de usabilidad.',
      thumbnail: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=400&h=300&fit=crop&auto=format',
      url: '#',
      tags: ['Mobile Design', 'User Journey', 'Wireframing', 'Travel Tech'],
      type: 'Mobile App',
      year: '2022',
      client: 'Personal Project'
    },
    {
      id: '5',
      title: 'Healthcare Platform',
      description: 'Plataforma web para gestión de citas médicas y telemedicina. Diseño centrado en la experiencia tanto de pacientes como de profesionales sanitarios.',
      thumbnail: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=300&fit=crop&auto=format',
      url: '#',
      tags: ['Healthcare UX', 'Multi-user', 'Responsive', 'Compliance'],
      type: 'Web App',
      year: '2022',
      client: 'Healthcare Provider'
    },
    {
      id: '6',
      title: 'Educational App',
      description: 'Aplicación educativa para aprendizaje de idiomas. Gamificación, progreso del usuario y diseño inclusivo para diferentes edades.',
      thumbnail: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&h=300&fit=crop&auto=format',
      url: '#',
      tags: ['EdTech', 'Gamification', 'Inclusive Design', 'Learning UX'],
      type: 'Mobile App',
      year: '2021',
      client: 'EdTech Startup'
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
      {/* Estadísticas */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="grid grid-cols-3 gap-4 mb-6"
      >
        <div className="text-center p-3 bg-gray-700 rounded-lg">
          <div className="text-2xl font-bold text-blue-400">{projects.length}</div>
          <div className="text-xs text-gray-400">Proyectos</div>
        </div>
        <div className="text-center p-3 bg-gray-700 rounded-lg">
          <div className="text-2xl font-bold text-purple-400">4+</div>
          <div className="text-xs text-gray-400">Años Exp.</div>
        </div>
        <div className="text-center p-3 bg-gray-700 rounded-lg">
          <div className="text-2xl font-bold text-green-400">15+</div>
          <div className="text-xs text-gray-400">Clientes</div>
        </div>
      </motion.div>

      {/* Grid de proyectos */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projects.slice(0, 4).map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -3, scale: 1.02 }}
            className="bg-gray-700 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
          >
            {/* Thumbnail */}
            <div className="relative h-32 overflow-hidden">
              <img
                src={project.thumbnail}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              
              {/* Type badge */}
              <div className="absolute top-2 left-2 flex items-center space-x-1">
                <div className={`flex items-center space-x-1 bg-gradient-to-r ${getTypeColor(project.type)} px-2 py-1 rounded-full text-white text-xs font-medium`}>
                  {getTypeIcon(project.type)}
                  <span>{project.type}</span>
                </div>
              </div>

              {/* Year badge */}
              <div className="absolute top-2 right-2 flex items-center space-x-1 bg-black/60 backdrop-blur-sm px-2 py-1 rounded-full">
                <Calendar className="w-3 h-3 text-white" />
                <span className="text-xs text-white font-medium">{project.year}</span>
              </div>
            </div>

            {/* Content */}
            <div className="p-4">
              <h3 className="text-lg font-bold text-white mb-2 line-clamp-1">{project.title}</h3>
              
              <p className="text-gray-300 text-sm mb-3 line-clamp-2 leading-relaxed">
                {project.description}
              </p>

              {/* Client */}
              {project.client && (
                <div className="flex items-center space-x-1 text-xs text-gray-400 mb-3">
                  <Users className="w-3 h-3" />
                  <span>{project.client}</span>
                </div>
              )}

              {/* Tags */}
              <div className="flex flex-wrap gap-1 mb-3">
                {project.tags.slice(0, 2).map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 bg-blue-500/20 text-blue-300 text-xs rounded-full font-medium"
                  >
                    {tag}
                  </span>
                ))}
                {project.tags.length > 2 && (
                  <span className="px-2 py-1 bg-gray-600 text-gray-300 text-xs rounded-full font-medium">
                    +{project.tags.length - 2}
                  </span>
                )}
              </div>

              {/* Action button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-lg font-medium hover:shadow-lg transition-all duration-200 group"
              >
                <Eye className="w-4 h-4" />
                <span>Ver Caso de Estudio</span>
                <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Mostrar más proyectos si hay */}
      {projects.length > 4 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center"
        >
          <p className="text-gray-400 mb-3">
            +{projects.length - 4} proyectos más en desarrollo
          </p>
        </motion.div>
      )}

      {/* Servicios UX */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="bg-gradient-to-r from-gray-700 to-gray-600 rounded-xl p-6 border border-gray-600"
      >
        <h3 className="text-lg font-bold text-white mb-4 flex items-center">
          <Palette className="w-5 h-5 mr-2 text-blue-500" />
          Servicios UX/UI
        </h3>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
          {[
            'User Research',
            'Wireframing',
            'Prototyping',
            'UI Design',
            'User Testing',
            'Design Systems',
            'Responsive Design',
            'Accessibility'
          ].map((service, index) => (
            <motion.div
              key={service}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 + (index * 0.05) }}
              className="text-center p-3 bg-gray-800 rounded-lg"
            >
              <div className="text-sm font-medium text-white">{service}</div>
            </motion.div>
          ))}
        </div>

        <motion.div
          whileHover={{ scale: 1.02 }}
          className="text-center"
        >
          <p className="text-gray-300 mb-4">
            ¿Necesitas mejorar la experiencia de usuario de tu producto digital?
          </p>
          <motion.a
            href="mailto:nachos.delvalle@gmail.com?subject=Consulta UX/UI Design"
            whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(59, 130, 246, 0.3)" }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-200"
          >
            <ExternalLink className="w-4 h-4" />
            <span>Solicitar Consulta</span>
          </motion.a>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default UXPortfolio;