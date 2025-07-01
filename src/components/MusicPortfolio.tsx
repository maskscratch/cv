import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Music, Users, Calendar, Star, Play, Headphones, Mic, Camera, Award, ChevronLeft, ChevronRight } from 'lucide-react';

interface EventPoster {
  id: string;
  title: string;
  description: string;
  image: string;
  date: string;
  venue: string;
  role: string;
  attendees?: string;
  highlights: string[];
}

const MusicPortfolio: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const eventPosters: EventPoster[] = [
    {
      id: '1',
      title: 'Festival Electrónico Madrid 2019',
      description: 'Producción ejecutiva de festival de música electrónica con 15 artistas internacionales. Gestión completa de logística, rider técnico y coordinación de equipos.',
      image: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=600&h=800&fit=crop&auto=format',
      date: 'Julio 2019',
      venue: 'Recinto Ferial Madrid',
      role: 'Productor Ejecutivo',
      attendees: '3,000',
      highlights: ['15 artistas internacionales', 'Sold out completo', 'Cobertura mediática nacional', 'Gestión de 50+ staff']
    },
    {
      id: '2',
      title: 'Concierto Benéfico Solidario',
      description: 'Organización y producción de evento benéfico con 8 artistas locales. Coordinación artística, campaña de comunicación y recaudación de fondos para ONG local.',
      image: 'https://images.unsplash.com/photo-1501386761578-eac5c94b800a?w=600&h=800&fit=crop&auto=format',
      date: 'Marzo 2018',
      venue: 'Teatro Principal',
      role: 'Director de Producción',
      attendees: '800',
      highlights: ['€5,000 recaudados', '8 artistas participantes', 'Impacto social positivo', 'Colaboración con medios']
    },
    {
      id: '3',
      title: 'Showcase Artistas Emergentes',
      description: 'Evento de promoción para nuevos talentos musicales. Desarrollo de estrategia de comunicación, gestión de artistas y networking con profesionales del sector.',
      image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&h=800&fit=crop&auto=format',
      date: 'Noviembre 2020',
      venue: 'Sala Independiente',
      role: 'A&R Manager',
      attendees: '200',
      highlights: ['12 artistas emergentes', 'Networking profesional', 'Contratos discográficos', 'Streaming en vivo']
    },
    {
      id: '4',
      title: 'Gira Nacional "Nuevos Sonidos"',
      description: 'Coordinación de gira nacional para banda emergente. Gestión de venues, logística de transporte, promoción local y rider técnico en 10 ciudades.',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=800&fit=crop&auto=format',
      date: 'Septiembre 2019',
      venue: 'Tour Nacional',
      role: 'Tour Manager',
      attendees: '5,000+',
      highlights: ['10 ciudades visitadas', 'Sold out en 6 fechas', 'Crecimiento fanbase +200%', 'Cobertura en radio nacional']
    },
    {
      id: '5',
      title: 'Lanzamiento EP "Horizontes"',
      description: 'Evento de presentación de EP para artista del catálogo de Rosevil Producciones. Estrategia 360° incluyendo showcase, rueda de prensa y activaciones digitales.',
      image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&h=800&fit=crop&auto=format',
      date: 'Febrero 2020',
      venue: 'Estudio de Grabación',
      role: 'A&R Manager',
      attendees: '150',
      highlights: ['Lanzamiento en 15 plataformas', 'Rueda de prensa', '50K streams primer mes', 'Playlist placements']
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % eventPosters.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + eventPosters.length) % eventPosters.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="space-y-8">
      {/* Carrusel de eventos */}
      <div className="relative">
        <div className="relative h-96 rounded-xl overflow-hidden bg-gray-700">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, x: 300 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -300 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 h-full">
                {/* Imagen */}
                <div className="relative overflow-hidden">
                  <img
                    src={eventPosters[currentSlide].image}
                    alt={eventPosters[currentSlide].title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-gray-900/80" />
                </div>

                {/* Contenido */}
                <div className="p-6 flex flex-col justify-center bg-gray-800">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <h3 className="text-2xl font-bold text-white mb-3">
                      {eventPosters[currentSlide].title}
                    </h3>
                    
                    <p className="text-gray-300 mb-4 leading-relaxed">
                      {eventPosters[currentSlide].description}
                    </p>

                    {/* Detalles del evento */}
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div>
                        <div className="flex items-center space-x-2 text-sm text-gray-400 mb-1">
                          <Calendar className="w-4 h-4" />
                          <span>Fecha</span>
                        </div>
                        <p className="text-white font-medium">{eventPosters[currentSlide].date}</p>
                      </div>
                      <div>
                        <div className="flex items-center space-x-2 text-sm text-gray-400 mb-1">
                          <Users className="w-4 h-4" />
                          <span>Asistentes</span>
                        </div>
                        <p className="text-white font-medium">{eventPosters[currentSlide].attendees}</p>
                      </div>
                      <div>
                        <div className="flex items-center space-x-2 text-sm text-gray-400 mb-1">
                          <Star className="w-4 h-4" />
                          <span>Rol</span>
                        </div>
                        <p className="text-purple-400 font-medium">{eventPosters[currentSlide].role}</p>
                      </div>
                      <div>
                        <div className="flex items-center space-x-2 text-sm text-gray-400 mb-1">
                          <Music className="w-4 h-4" />
                          <span>Venue</span>
                        </div>
                        <p className="text-white font-medium">{eventPosters[currentSlide].venue}</p>
                      </div>
                    </div>

                    {/* Highlights */}
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-gray-400 mb-2">Logros Destacados</h4>
                      <div className="grid grid-cols-1 gap-1">
                        {eventPosters[currentSlide].highlights.slice(0, 2).map((highlight, index) => (
                          <div key={index} className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-purple-500 rounded-full" />
                            <span className="text-sm text-gray-300">{highlight}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controles del carrusel */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-all duration-200"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-all duration-200"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Indicadores */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {eventPosters.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentSlide ? 'bg-purple-500' : 'bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Estadísticas */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="grid grid-cols-4 gap-4"
      >
        <div className="text-center p-4 bg-gray-700 rounded-lg">
          <div className="text-2xl font-bold text-purple-400">25+</div>
          <div className="text-xs text-gray-400">Eventos</div>
        </div>
        <div className="text-center p-4 bg-gray-700 rounded-lg">
          <div className="text-2xl font-bold text-pink-400">50+</div>
          <div className="text-xs text-gray-400">Artistas</div>
        </div>
        <div className="text-center p-4 bg-gray-700 rounded-lg">
          <div className="text-2xl font-bold text-orange-400">15K+</div>
          <div className="text-xs text-gray-400">Asistentes</div>
        </div>
        <div className="text-center p-4 bg-gray-700 rounded-lg">
          <div className="text-2xl font-bold text-blue-400">6</div>
          <div className="text-xs text-gray-400">Años Exp.</div>
        </div>
      </motion.div>

      {/* Descripción adicional */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="bg-gradient-to-r from-gray-700 to-gray-600 rounded-xl p-6 border border-gray-600"
      >
        <div className="text-center">
          <h3 className="text-lg font-bold text-white mb-3 flex items-center justify-center">
            <Music className="w-5 h-5 mr-2 text-purple-500" />
            Experiencia en Music Business
          </h3>
          <p className="text-gray-300 mb-4 leading-relaxed">
            Mi trayectoria en la industria musical abarca desde la gestión de artistas emergentes hasta la producción 
            de eventos de gran formato. He trabajado con sellos discográficos, desarrollado estrategias de A&R y 
            coordinado giras nacionales, siempre enfocado en maximizar el potencial artístico y comercial de cada proyecto.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {['A&R Management', 'Event Production', 'Artist Development', 'Music Marketing'].map((skill, index) => (
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

export default MusicPortfolio;