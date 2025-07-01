import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Music, Users, Calendar, Star, Play, Headphones, Mic, Camera, Award } from 'lucide-react';

interface MusicProject {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  url?: string;
  tags: string[];
  type: 'Artist Development' | 'Event Management' | 'A&R' | 'Marketing Campaign' | 'Label Management';
  year: string;
  client: string;
  results?: string;
}

const MusicPortfolio: React.FC = () => {
  const projects: MusicProject[] = [
    {
      id: '1',
      title: 'Campaña 360° - Artista Emergente',
      description: 'Desarrollo integral de carrera para artista indie. Estrategia de lanzamiento, gestión de redes sociales, booking de conciertos y negociación con sellos discográficos.',
      thumbnail: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=300&fit=crop&auto=format',
      url: '#',
      tags: ['Artist Development', 'Social Media', 'Booking', 'Label Relations'],
      type: 'Artist Development',
      year: '2020',
      client: 'Artista Indie',
      results: '+150% seguidores, 5 conciertos, contrato discográfico'
    },
    {
      id: '2',
      title: 'Festival de Música Electrónica',
      description: 'Producción ejecutiva de festival de música electrónica con 15 artistas internacionales. Gestión de logística, rider técnico, promoción y coordinación de equipos.',
      thumbnail: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=400&h=300&fit=crop&auto=format',
      url: '#',
      tags: ['Event Production', 'Logistics', 'Artist Management', 'Promotion'],
      type: 'Event Management',
      year: '2019',
      client: 'Space Noise Management',
      results: '3,000 asistentes, sold out, cobertura mediática nacional'
    },
    {
      id: '3',
      title: 'Gestión de Catálogo Discográfico',
      description: 'A&R y gestión estratégica del catálogo completo de sello independiente. Desarrollo de artistas, negociación de contratos y estrategias de distribución digital.',
      thumbnail: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=300&fit=crop&auto=format',
      url: '#',
      tags: ['A&R', 'Catalog Management', 'Digital Distribution', 'Rights Management'],
      type: 'Label Management',
      year: '2020',
      client: 'Rosevil Producciones',
      results: '12 lanzamientos, +500K streams, expansión internacional'
    },
    {
      id: '4',
      title: 'Campaña Promocional "Caliente"',
      description: 'Estrategia promocional integral para el single "Caliente" de Jay Santos. Campaña digital, relaciones con medios, playlist pitching y activaciones en redes sociales.',
      thumbnail: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop&auto=format',
      url: '#',
      tags: ['Music Promotion', 'Digital Marketing', 'Playlist Pitching', 'Media Relations'],
      type: 'Marketing Campaign',
      year: '2013',
      client: 'Doble Music Records',
      results: '100K reproducciones, 15 playlists, cobertura en radio'
    },
    {
      id: '5',
      title: 'Concierto Benéfico Solidario',
      description: 'Organización y producción de concierto benéfico con 8 artistas locales. Gestión de venue, coordinación artística, campaña de comunicación y recaudación de fondos.',
      thumbnail: 'https://images.unsplash.com/photo-1501386761578-eac5c94b800a?w=400&h=300&fit=crop&auto=format',
      url: '#',
      tags: ['Charity Event', 'Multi-Artist', 'Fundraising', 'Community Impact'],
      type: 'Event Management',
      year: '2018',
      client: 'ONG Local',
      results: '€5,000 recaudados, 800 asistentes, impacto social positivo'
    },
    {
      id: '6',
      title: 'Desarrollo de Banda Emergente',
      description: 'Mentoring y desarrollo integral de banda de rock alternativo. Producción de EP, estrategia de imagen, booking de gira y construcción de fanbase.',
      thumbnail: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=300&fit=crop&auto=format',
      url: '#',
      tags: ['Band Development', 'EP Production', 'Tour Booking', 'Fanbase Building'],
      type: 'Artist Development',
      year: '2019',
      client: 'Banda Emergente',
      results: 'EP lanzado, 10 conciertos, +50K streams mensuales'
    }
  ];

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'Artist Development':
        return <Users className="w-4 h-4" />;
      case 'Event Management':
        return <Calendar className="w-4 h-4" />;
      case 'A&R':
        return <Star className="w-4 h-4" />;
      case 'Marketing Campaign':
        return <Headphones className="w-4 h-4" />;
      case 'Label Management':
        return <Award className="w-4 h-4" />;
      default:
        return <Music className="w-4 h-4" />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Artist Development':
        return 'from-purple-500 to-pink-500';
      case 'Event Management':
        return 'from-orange-500 to-red-500';
      case 'A&R':
        return 'from-yellow-500 to-orange-500';
      case 'Marketing Campaign':
        return 'from-green-500 to-emerald-500';
      case 'Label Management':
        return 'from-blue-500 to-cyan-500';
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
          <div className="text-2xl font-bold text-purple-400">50+</div>
          <div className="text-xs text-gray-400">Artistas</div>
        </div>
        <div className="text-center p-3 bg-gray-700 rounded-lg">
          <div className="text-2xl font-bold text-orange-400">25+</div>
          <div className="text-xs text-gray-400">Eventos</div>
        </div>
        <div className="text-center p-3 bg-gray-700 rounded-lg">
          <div className="text-2xl font-bold text-pink-400">6</div>
          <div className="text-xs text-gray-400">Años Exp.</div>
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
                  <span className="hidden sm:inline">{project.type}</span>
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
              <div className="flex items-center space-x-1 text-xs text-gray-400 mb-3">
                <Users className="w-3 h-3" />
                <span>{project.client}</span>
              </div>

              {/* Results */}
              {project.results && (
                <div className="bg-green-500/20 border border-green-500/30 rounded-lg p-2 mb-3">
                  <div className="flex items-center space-x-1 mb-1">
                    <Star className="w-3 h-3 text-green-400" />
                    <span className="text-xs font-medium text-green-400">Resultados</span>
                  </div>
                  <p className="text-xs text-green-300">{project.results}</p>
                </div>
              )}

              {/* Tags */}
              <div className="flex flex-wrap gap-1 mb-3">
                {project.tags.slice(0, 2).map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 bg-purple-500/20 text-purple-300 text-xs rounded-full font-medium"
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
                className="w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-lg font-medium hover:shadow-lg transition-all duration-200 group"
              >
                <Music className="w-4 h-4" />
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
            +{projects.length - 4} proyectos más en el historial
          </p>
        </motion.div>
      )}
    </div>
  );
};

export default MusicPortfolio;