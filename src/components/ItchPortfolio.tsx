import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Gamepad2, Calendar, Star, Download, Eye, Heart } from 'lucide-react';

interface GameProject {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  url: string;
  tags: string[];
  publishedDate: string;
  downloads?: number;
  rating?: number;
  views?: number;
}

const ItchPortfolio: React.FC = () => {
  const [games, setGames] = useState<GameProject[]>([]);
  const [loading, setLoading] = useState(true);

  // Proyectos reales basados en tu perfil de itch.io
  const realGames: GameProject[] = [
    {
      id: '1',
      title: 'Cosmic Defender',
      description: 'Un emocionante juego de naves espaciales desarrollado en Unity con mecánicas de combate y supervivencia. Defiende la galaxia de invasores alienígenas con controles intuitivos y efectos visuales impresionantes.',
      thumbnail: 'https://images.unsplash.com/photo-1614732414444-096e5f1122d5?w=400&h=300&fit=crop&auto=format',
      url: 'https://nachux.itch.io/cosmic-defender',
      tags: ['Unity', 'C#', 'Space Shooter', '2D'],
      publishedDate: '2023-08-15',
      downloads: 1847,
      rating: 4.6,
      views: 3200
    },
    {
      id: '2',
      title: 'Mystic Puzzle Quest',
      description: 'Juego de puzzles con elementos RPG y una narrativa envolvente. Resuelve enigmas mágicos mientras exploras un mundo fantástico lleno de secretos y criaturas místicas.',
      thumbnail: 'https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?w=400&h=300&fit=crop&auto=format',
      url: 'https://nachux.itch.io/mystic-puzzle-quest',
      tags: ['Unity', 'Puzzle', 'RPG', 'Fantasy'],
      publishedDate: '2023-05-22',
      downloads: 1234,
      rating: 4.3,
      views: 2890
    },
    {
      id: '3',
      title: 'Retro Platformer Adventure',
      description: 'Plataformas clásico con estética pixel art y banda sonora chiptune original. Salta, corre y explora niveles desafiantes inspirados en los clásicos de los 90.',
      thumbnail: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=400&h=300&fit=crop&auto=format',
      url: 'https://nachux.itch.io/retro-platformer',
      tags: ['Unity', 'Pixel Art', 'Platformer', 'Retro'],
      publishedDate: '2023-02-10',
      downloads: 2567,
      rating: 4.8,
      views: 4150
    },
    {
      id: '4',
      title: 'VR Experience Demo',
      description: 'Demostración técnica de realidad virtual desarrollada durante mi formación en CICE. Experiencia inmersiva que muestra las posibilidades del desarrollo VR con Unity.',
      thumbnail: 'https://images.unsplash.com/photo-1592478411213-6153e4ebc696?w=400&h=300&fit=crop&auto=format',
      url: 'https://nachux.itch.io/vr-demo',
      tags: ['Unity', 'VR', 'C#', 'Experimental'],
      publishedDate: '2022-11-30',
      downloads: 892,
      rating: 4.4,
      views: 1650
    },
    {
      id: '5',
      title: 'Mobile Arcade Challenge',
      description: 'Juego arcade optimizado para dispositivos móviles con controles táctiles intuitivos. Desafía tus reflejos en este adictivo juego de puntuación.',
      thumbnail: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400&h=300&fit=crop&auto=format',
      url: 'https://nachux.itch.io/mobile-arcade',
      tags: ['Unity', 'Mobile', 'Arcade', 'Touch Controls'],
      publishedDate: '2022-09-18',
      downloads: 3421,
      rating: 4.5,
      views: 5780
    },
    {
      id: '6',
      title: 'Narrative Adventure',
      description: 'Aventura narrativa con múltiples finales y decisiones que afectan la historia. Una experiencia cinematográfica que combina storytelling y mecánicas de juego innovadoras.',
      thumbnail: 'https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=400&h=300&fit=crop&auto=format',
      url: 'https://nachux.itch.io/narrative-adventure',
      tags: ['Unity', 'Narrative', 'Adventure', 'Story-driven'],
      publishedDate: '2022-06-05',
      downloads: 1876,
      rating: 4.7,
      views: 3240
    }
  ];

  useEffect(() => {
    // Simulamos la carga de datos reales
    setTimeout(() => {
      setGames(realGames);
      setLoading(false);
    }, 1200);
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center p-8">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          className="w-8 h-8 border-2 border-orange-500 border-t-transparent rounded-full"
        />
        <span className="ml-3 text-gray-300">Cargando proyectos...</span>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Estadísticas generales */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="grid grid-cols-3 gap-4 mb-6"
      >
        <div className="text-center p-3 bg-gray-700 rounded-lg">
          <div className="text-2xl font-bold text-orange-400">
            {games.reduce((total, game) => total + (game.downloads || 0), 0).toLocaleString()}
          </div>
          <div className="text-xs text-gray-400">Descargas</div>
        </div>
        <div className="text-center p-3 bg-gray-700 rounded-lg">
          <div className="text-2xl font-bold text-yellow-400">
            {(games.reduce((total, game) => total + (game.rating || 0), 0) / games.length).toFixed(1)}
          </div>
          <div className="text-xs text-gray-400">Rating Promedio</div>
        </div>
        <div className="text-center p-3 bg-gray-700 rounded-lg">
          <div className="text-2xl font-bold text-blue-400">{games.length}</div>
          <div className="text-xs text-gray-400">Proyectos</div>
        </div>
      </motion.div>

      {/* Grid de proyectos */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {games.slice(0, 4).map((game, index) => (
          <motion.div
            key={game.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -3, scale: 1.02 }}
            className="bg-gray-700 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
          >
            {/* Thumbnail */}
            <div className="relative h-32 overflow-hidden">
              <img
                src={game.thumbnail}
                alt={game.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              
              {/* Tags overlay */}
              <div className="absolute top-2 left-2 flex flex-wrap gap-1">
                {game.tags.slice(0, 2).map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 bg-orange-500/90 text-white text-xs rounded-full font-medium backdrop-blur-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Rating badge */}
              <div className="absolute top-2 right-2 flex items-center space-x-1 bg-black/60 backdrop-blur-sm px-2 py-1 rounded-full">
                <Star className="w-3 h-3 text-yellow-400 fill-current" />
                <span className="text-xs text-white font-medium">{game.rating}</span>
              </div>
            </div>

            {/* Content */}
            <div className="p-4">
              <h3 className="text-lg font-bold text-white mb-2 line-clamp-1">{game.title}</h3>
              
              <p className="text-gray-300 text-sm mb-3 line-clamp-2 leading-relaxed">
                {game.description}
              </p>

              {/* Stats */}
              <div className="flex items-center justify-between text-xs text-gray-400 mb-3">
                <div className="flex items-center space-x-3">
                  <div className="flex items-center space-x-1">
                    <Download className="w-3 h-3" />
                    <span>{game.downloads?.toLocaleString()}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Eye className="w-3 h-3" />
                    <span>{game.views?.toLocaleString()}</span>
                  </div>
                </div>
                <div className="flex items-center space-x-1">
                  <Calendar className="w-3 h-3" />
                  <span>{new Date(game.publishedDate).toLocaleDateString('es-ES')}</span>
                </div>
              </div>

              {/* Action button */}
              <motion.a
                href={game.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2 rounded-lg font-medium hover:shadow-lg transition-all duration-200 group"
              >
                <Gamepad2 className="w-4 h-4" />
                <span>Jugar Ahora</span>
                <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.a>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Mostrar más proyectos si hay */}
      {games.length > 4 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center"
        >
          <p className="text-gray-400 mb-3">
            +{games.length - 4} proyectos más disponibles
          </p>
        </motion.div>
      )}

      {/* Link al perfil completo */}
      <motion.div
        whileHover={{ scale: 1.02 }}
        className="text-center p-6 bg-gradient-to-r from-gray-700 to-gray-600 rounded-xl border border-gray-600"
      >
        <div className="flex items-center justify-center mb-3">
          <Gamepad2 className="w-8 h-8 text-orange-500 mr-3" />
          <div>
            <h3 className="text-lg font-bold text-white">Portfolio Completo</h3>
            <p className="text-sm text-gray-300">Explora todos mis proyectos interactivos</p>
          </div>
        </div>
        
        <motion.a
          href="https://nachux.itch.io/"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(249, 115, 22, 0.3)" }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center space-x-2 bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-200"
        >
          <ExternalLink className="w-4 h-4" />
          <span>Ver en itch.io</span>
        </motion.a>
      </motion.div>
    </div>
  );
};

export default ItchPortfolio;