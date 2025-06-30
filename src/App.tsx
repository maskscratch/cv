import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Mail, 
  MapPin, 
  User, 
  Briefcase, 
  GraduationCap, 
  Code, 
  Gamepad2, 
  Palette, 
  Music,
  Calendar,
  Award,
  Globe,
  ExternalLink,
  Sparkles,
  Zap,
  Target,
  Lightbulb,
  Play,
  Headphones,
  Mic,
  Camera,
  Monitor,
  Layers,
  Home,
  Send,
  ArrowLeft,
  MessageCircle,
  Download,
  FileText,
  Linkedin,
  Eye,
  Star
} from 'lucide-react';

// Importar componentes
import SEOHead from './components/SEOHead';
import ItchPortfolio from './components/ItchPortfolio';
import SkillsChart from './components/SkillsChart';
import ContactForm from './components/ContactForm';
import UXPortfolio from './components/UXPortfolio';
import MusicPortfolio from './components/MusicPortfolio';

interface RoleData {
  title: string;
  icon: React.ReactNode;
  gradient: string;
  description: string;
  experience: Array<{
    company: string;
    position: string;
    period: string;
    tasks: string[];
    color: string;
  }>;
  education: Array<{
    institution: string;
    course: string;
    period: string;
    description: string;
    color: string;
  }>;
  skills: Array<{
    name: string;
    level: number;
    category: string;
  }>;
  complementaryTraining: Array<{
    course: string;
    institution: string;
    year: string;
  }>;
  portfolio?: string;
}

function App() {
  const [currentView, setCurrentView] = useState<'home' | 'game' | 'ux' | 'music'>('home');
  const [isLoading, setIsLoading] = useState(true);
  const [showContactForm, setShowContactForm] = useState(false);

  useEffect(() => {
    // Simular carga inicial
    setTimeout(() => setIsLoading(false), 1500);
  }, []);

  // Scroll al top cuando cambia la vista
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentView]);

  const roleData: Record<string, RoleData> = {
    game: {
      title: "Game Designer",
      icon: <Gamepad2 className="w-full h-full text-white" />,
      gradient: "from-orange-500 via-red-500 to-pink-500",
      description: "Game Designer junior especializado en Unity y desarrollo de mecánicas de juego. Experiencia práctica en programación C#, desarrollo 2D/3D y realidad virtual. Apasionado por crear experiencias interactivas inmersivas que conecten con los jugadores.",
      experience: [
        {
          company: "Politours",
          position: "Desarrollador de Aplicaciones",
          period: "Mar 2018 - Oct 2019",
          tasks: [
            "Desarrollo y optimización de aplicaciones web B2B para el sector turístico",
            "Implementación de interfaces de usuario intuitivas y responsive",
            "Diseño gráfico para materiales promocionales digitales",
            "Capacitación técnica a equipos multidisciplinares en nuevas tecnologías"
          ],
          color: "blue"
        }
      ],
      education: [
        {
          institution: "CICE - Escuela Profesional de Nuevas Tecnologías",
          course: "Desarrollo de Videojuegos y Realidad Virtual",
          period: "2021",
          description: "Programa intensivo de 300 horas especializado en desarrollo de videojuegos con Unity. Dominio de programación C#, desarrollo de proyectos 2D/3D, realidad virtual, control de versiones con GitHub y metodologías ágiles de desarrollo.",
          color: "orange"
        }
      ],
      skills: [
        { name: "Unity 3D", level: 75, category: "game" },
        { name: "C# Programming", level: 70, category: "dev" },
        { name: "Unreal Engine", level: 45, category: "game" },
        { name: "Game Design", level: 80, category: "game" },
        { name: "GitHub", level: 65, category: "dev" },
        { name: "Visual Studio", level: 70, category: "dev" },
        { name: "Photoshop", level: 75, category: "design" },
        { name: "Miro", level: 90, category: "design" }
      ],
      complementaryTraining: [
        { course: "Diseño y Guión de Videojuegos", institution: "Gametopia", year: "2018" },
        { course: "Desarrollo con Unreal Engine (Básico)", institution: "Udemy", year: "2018" },
        { course: "Diseño Narrativo para Videojuegos", institution: "Domestika", year: "2020" },
        { course: "Unreal Engine para Diseño de Escenarios", institution: "Domestika", year: "2020" }
      ],
      portfolio: "https://nachux.itch.io/"
    },
    ux: {
      title: "UX/UI Designer",
      icon: <Palette className="w-full h-full text-white" />,
      gradient: "from-blue-500 via-purple-500 to-pink-500",
      description: "UX/UI Designer con formación intensiva en diseño de producto digital y experiencia práctica en el sector tecnológico. Especializado en investigación de usuarios, arquitectura de información, prototipado avanzado con Figma y metodologías de diseño centrado en el usuario.",
      experience: [
        {
          company: "Politours",
          position: "UX/UI Designer",
          period: "Mar 2018 - Oct 2019",
          tasks: [
            "Investigación y análisis de necesidades de usuarios para optimización de aplicaciones B2B",
            "Diseño de experiencias de usuario centradas en usabilidad y conversión",
            "Desarrollo de interfaces web responsive y accesibles",
            "Implementación de metodologías de design thinking y testing de usuarios"
          ],
          color: "blue"
        },
        {
          company: "Telyco S.A.U",
          position: "Asesor Comercial & UX Researcher",
          period: "Jul 2008 - Ene 2013",
          tasks: [
            "Asesoramiento especializado en productos y servicios tecnológicos",
            "Análisis de comportamiento del cliente y optimización de customer journey",
            "Colaboración estratégica con departamento de Marketing en campañas digitales",
            "Mejora continua de la experiencia del usuario en punto de venta físico"
          ],
          color: "green"
        }
      ],
      education: [
        {
          institution: "The Bridge - Digital Talent Accelerator",
          course: "Bootcamp Diseño de Producto Digital UX/UI",
          period: "2021-2022",
          description: "Programa intensivo de 480 horas en Diseño de Producto Digital UX/UI. Especialización en User Research, técnicas de ideación, conceptualización, diseño de interfaz e interacción con Figma, desarrollo frontend, optimización de conversión y metodología Agile/Scrum.",
          color: "blue"
        }
      ],
      skills: [
        { name: "Figma", level: 85, category: "design" },
        { name: "User Research", level: 80, category: "ux" },
        { name: "Prototyping", level: 85, category: "ux" },
        { name: "Design Systems", level: 75, category: "ux" },
        { name: "Photoshop", level: 80, category: "design" },
        { name: "HTML/CSS", level: 65, category: "dev" },
        { name: "JavaScript", level: 45, category: "dev" },
        { name: "WordPress", level: 75, category: "web" },
        { name: "Miro", level: 90, category: "design" }
      ],
      complementaryTraining: []
    },
    music: {
      title: "Music Business Consultant",
      icon: <Music className="w-full h-full text-white" />,
      gradient: "from-purple-500 via-pink-500 to-red-500",
      description: "Music Business Consultant con amplia experiencia en A&R, promoción musical, desarrollo integral de artistas y gestión de derechos. Fundador de Space Noise Management con track record demostrado en importantes sellos discográficos y productoras musicales del sector.",
      experience: [
        {
          company: "Rosevil Producciones",
          position: "A&R Manager & Artist Development",
          period: "Nov 2019 - Ene 2021",
          tasks: [
            "Gestión estratégica del catálogo completo de la compañía discográfica",
            "Asesoramiento profesional a artistas sobre desarrollo de carrera musical",
            "Administración y gestión de derechos de autor y conexos",
            "Desarrollo y ejecución de campañas de promoción 360° (online y offline)",
            "Estrategia integral de desarrollo de artistas y posicionamiento en el mercado",
            "Gestión de redes sociales y presencia digital de artistas"
          ],
          color: "purple"
        },
        {
          company: "Space Noise Management",
          position: "Founder & CEO",
          period: "Ene 2015 - Ene 2021",
          tasks: [
            "Gestión integral de eventos musicales y producción de conciertos",
            "Desarrollo de estrategias de marketing musical y comunicación 360°",
            "Coordinación de equipos multidisciplinares y gestión de proyectos",
            "Gestión de redes sociales y construcción de marca para artistas",
            "Negociación comercial con artistas, venues y proveedores del sector"
          ],
          color: "pink"
        },
        {
          company: "Subterfuge Events",
          position: "Production Assistant",
          period: "Sep 2014 - Dic 2014",
          tasks: [
            "Apoyo en producción ejecutiva de eventos musicales de gran formato",
            "Coordinación logística integral de conciertos y festivales",
            "Asistencia en gestión de artistas y rider técnico"
          ],
          color: "indigo"
        },
        {
          company: "Doble Music Records S.L.",
          position: "Promotions Specialist",
          period: "Jun 2013 - Jul 2013",
          tasks: [
            "Gestión de campaña promocional del artista Jay Santos - single 'Caliente'",
            "Desarrollo e implementación de estrategias promocionales digitales"
          ],
          color: "red"
        }
      ],
      education: [
        {
          institution: "SAE Institute Madrid",
          course: "Gestión de la Industria Musical",
          period: "2013",
          description: "Programa especializado de 500 horas en gestión integral de la industria musical. Formación avanzada en gestión editorial, aspectos legales y contractuales, organización de eventos y giras, producción discográfica, marketing musical estratégico y gestión empresarial del sector.",
          color: "purple"
        }
      ],
      skills: [
        { name: "A&R Management", level: 90, category: "management" },
        { name: "Artist Development", level: 85, category: "management" },
        { name: "Event Management", level: 85, category: "management" },
        { name: "Music Marketing", level: 80, category: "marketing" },
        { name: "Rights Management", level: 80, category: "management" },
        { name: "Social Media Strategy", level: 90, category: "marketing" },
        { name: "Photoshop", level: 75, category: "design" },
        { name: "Premiere Pro", level: 50, category: "media" }
      ],
      complementaryTraining: []
    }
  };

  const getSkillColor = (category: string) => {
    const colors = {
      design: "from-purple-500 to-pink-500",
      web: "from-blue-500 to-cyan-500",
      dev: "from-green-500 to-emerald-500",
      game: "from-orange-500 to-red-500",
      media: "from-yellow-500 to-orange-500",
      productivity: "from-indigo-500 to-purple-500",
      marketing: "from-pink-500 to-rose-500",
      management: "from-teal-500 to-blue-500",
      ux: "from-blue-500 to-purple-500"
    };
    return colors[category as keyof typeof colors] || "from-gray-500 to-gray-600";
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  const floatingAnimation = {
    y: [-10, 10, -10],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  // Función para cambiar de vista
  const switchView = (view: 'home' | 'game' | 'ux' | 'music') => {
    setCurrentView(view);
    setShowContactForm(false);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-pink-900 flex items-center justify-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="w-16 h-16 border-4 border-white border-t-transparent rounded-full mx-auto mb-4"
          />
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-2xl font-bold text-white"
          >
            Cargando...
          </motion.h2>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* SEO Component */}
      <SEOHead currentView={currentView} />
      
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={floatingAnimation}
          className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-xl"
        />
        <motion.div
          animate={{ ...floatingAnimation, transition: { ...floatingAnimation.transition, delay: 1 } }}
          className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-r from-pink-400/20 to-red-400/20 rounded-full blur-xl"
        />
        <motion.div
          animate={{ ...floatingAnimation, transition: { ...floatingAnimation.transition, delay: 2 } }}
          className="absolute bottom-20 left-1/3 w-40 h-40 bg-gradient-to-r from-green-400/20 to-blue-400/20 rounded-full blur-xl"
        />
      </div>

      {/* Header */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100 }}
        className="sticky top-0 z-50 backdrop-blur-xl bg-gray-900/90 border-b border-gray-700"
      >
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <motion.div 
            className="flex items-center space-x-4"
            whileHover={{ scale: 1.05 }}
          >
            <motion.button
              onClick={() => switchView('home')}
              className={`w-12 h-12 ${currentView === 'home' ? 'bg-gradient-to-r from-blue-500 to-purple-500' : 'bg-gray-700 hover:bg-gray-600'} rounded-full flex items-center justify-center shadow-lg transition-all duration-200`}
              whileHover={{ rotate: currentView === 'home' ? 0 : 360 }}
              transition={{ duration: 0.5 }}
            >
              <Home className="w-6 h-6 text-white" />
            </motion.button>
            <div>
              <motion.h1 
                className="text-xl font-bold"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                Nacho Sereno del Valle
              </motion.h1>
              <motion.p
                className={`text-lg ${currentView === 'home' ? 'text-gray-300' : `bg-gradient-to-r ${roleData[currentView]?.gradient} bg-clip-text text-transparent font-semibold`}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                {currentView === 'home' ? 'Portfolio Profesional' : roleData[currentView]?.title}
              </motion.p>
            </div>
          </motion.div>
          
          <div className="flex items-center space-x-4">
            {currentView !== 'home' && (
              <motion.button
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => switchView('home')}
                className="flex items-center space-x-2 bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-full font-medium transition-all duration-200"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Volver</span>
              </motion.button>
            )}
          </div>
        </div>
      </motion.header>

      <AnimatePresence mode="wait">
        {currentView === 'home' ? (
          // HOME VIEW
          <motion.div
            key="home"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.5 }}
            variants={containerVariants}
            className="max-w-6xl mx-auto px-6 py-8"
          >
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Sidebar */}
              <motion.div variants={itemVariants} className="lg:col-span-1 space-y-6">
                {/* Profile Photo */}
                <motion.div 
                  whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(0,0,0,0.3)" }}
                  className="bg-gray-800 p-6 rounded-2xl shadow-lg transition-all duration-300"
                >
                  <div className="text-center">
                    <motion.div 
                      whileHover={{ scale: 1.05 }}
                      className="relative mx-auto mb-4"
                    >
                      <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-gradient-to-r from-blue-500 to-purple-500 shadow-xl">
                        <img 
                          src="/fotonacho.jpg"
                          alt="Nacho Sereno del Valle - Game Designer, UX/UI Designer, Music Business Consultant"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <motion.div 
                        className="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center shadow-lg"
                        whileHover={{ scale: 1.2 }}
                      >
                        <Sparkles className="w-4 h-4 text-white" />
                      </motion.div>
                    </motion.div>
                    <motion.h2 
                      className="text-xl font-bold mb-2"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.3 }}
                    >
                      Nacho Sereno del Valle
                    </motion.h2>
                    <motion.p 
                      className="text-lg text-gray-300 font-medium"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5 }}
                    >
                      Profesional Multidisciplinar
                    </motion.p>
                  </div>
                </motion.div>

                {/* Contact Info */}
                <motion.div 
                  whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(0,0,0,0.3)" }}
                  className="bg-gray-800 p-6 rounded-2xl shadow-lg transition-all duration-300"
                >
                  <h2 className="text-xl font-bold mb-4 flex items-center">
                    <motion.div
                      animate={{ rotate: [0, 10, -10, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <Mail className="w-5 h-5 mr-2 text-blue-500" />
                    </motion.div>
                    Contacto
                  </h2>
                  <div className="space-y-3">
                    <motion.div 
                      whileHover={{ x: 5 }}
                      className="flex items-center space-x-3"
                    >
                      <Mail className="w-4 h-4 text-gray-500" />
                      <a href="mailto:nachos.delvalle@gmail.com" className="text-blue-400 hover:text-blue-300 hover:underline transition-colors">
                        nachos.delvalle@gmail.com
                      </a>
                    </motion.div>
                    <motion.div 
                      whileHover={{ x: 5 }}
                      className="flex items-center space-x-3"
                    >
                      <MapPin className="w-4 h-4 text-gray-500" />
                      <span>Madrid, España</span>
                    </motion.div>
                  </div>
                  
                  {/* Botón de contacto */}
                  <div className="mt-6">
                    <motion.button
                      onClick={() => setShowContactForm(!showContactForm)}
                      whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(16, 185, 129, 0.3)" }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-200"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Formulario de Contacto</span>
                    </motion.button>
                  </div>
                </motion.div>

                {/* Contact Form */}
                <AnimatePresence>
                  {showContactForm && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ContactForm />
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Languages */}
                <motion.div 
                  whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(0,0,0,0.3)" }}
                  className="bg-gray-800 p-6 rounded-2xl shadow-lg transition-all duration-300"
                >
                  <h2 className="text-xl font-bold mb-4 flex items-center">
                    <Globe className="w-5 h-5 mr-2 text-green-500" />
                    Idiomas
                  </h2>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="font-medium">Español</span>
                        <span className="text-sm text-gray-400">Nativo</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
                        <motion.div 
                          initial={{ width: 0 }}
                          animate={{ width: "100%" }}
                          transition={{ duration: 1.5, delay: 0.5 }}
                          className="bg-gradient-to-r from-green-500 to-emerald-500 h-3 rounded-full"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="font-medium">Inglés</span>
                        <span className="text-sm text-gray-400">B1 - Intermedio</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
                        <motion.div 
                          initial={{ width: 0 }}
                          animate={{ width: "65%" }}
                          transition={{ duration: 1.5, delay: 0.7 }}
                          className="bg-gradient-to-r from-blue-500 to-cyan-500 h-3 rounded-full"
                        />
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Personal Skills */}
                <motion.div 
                  whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(0,0,0,0.3)" }}
                  className="bg-gray-800 p-6 rounded-2xl shadow-lg transition-all duration-300"
                >
                  <h2 className="text-xl font-bold mb-4 flex items-center">
                    <Sparkles className="w-5 h-5 mr-2 text-purple-500" />
                    Competencias Clave
                  </h2>
                  <div className="flex flex-wrap gap-2">
                    {['Liderazgo', 'Creatividad', 'Trabajo en equipo', 'Adaptabilidad', 'Resolución de problemas', 'Comunicación'].map((skill, index) => (
                      <motion.span 
                        key={skill}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ scale: 1.1 }}
                        className="px-3 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm rounded-full font-medium shadow-md"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              </motion.div>

              {/* Main Content */}
              <motion.div variants={itemVariants} className="lg:col-span-2 space-y-8">
                {/* Hero Section */}
                <motion.div 
                  whileHover={{ y: -5, boxShadow: "0 25px 50px rgba(0,0,0,0.4)" }}
                  className="bg-gray-800 p-8 rounded-2xl shadow-lg transition-all duration-300 relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-blue-900/20 pointer-events-none" />
                  <div className="text-center relative z-10">
                    <motion.div 
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-2xl"
                    >
                      <Sparkles className="w-10 h-10 text-white" />
                    </motion.div>
                    <motion.h1 
                      className="text-4xl font-bold mb-2"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      ¡Hola! Soy Nacho 👋
                    </motion.h1>
                    <motion.p 
                      className="text-3xl bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent font-bold mb-6"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                    >
                      Profesional Multidisciplinar
                    </motion.p>
                    <motion.p 
                      className="text-lg leading-relaxed text-gray-300"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.7 }}
                    >
                      Profesional versátil con experiencia demostrada en diseño de videojuegos, UX/UI y consultoría en la industria musical. 
                      Mi pasión por la innovación tecnológica y la creatividad me ha llevado a desarrollar competencias especializadas en múltiples disciplinas, 
                      siempre enfocado en crear experiencias excepcionales y soluciones que generen impacto real.
                    </motion.p>
                  </div>
                </motion.div>

                {/* Professional Profiles */}
                <motion.div 
                  whileHover={{ y: -5, boxShadow: "0 25px 50px rgba(0,0,0,0.4)" }}
                  className="bg-gray-800 p-8 rounded-2xl shadow-lg transition-all duration-300"
                >
                  <h2 className="text-2xl font-bold mb-6 text-center">Mis Perfiles Profesionales</h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Game Designer */}
                    <motion.button
                      whileHover={{ scale: 1.05, y: -5 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => switchView('game')}
                      className="bg-gradient-to-br from-orange-500 to-red-500 p-6 rounded-xl text-white text-left shadow-lg hover:shadow-2xl transition-all duration-300"
                    >
                      <div className="flex items-center mb-4">
                        <div className="w-8 h-8 mr-3">
                          <Gamepad2 className="w-full h-full" />
                        </div>
                        <h3 className="text-xl font-bold">Game Designer</h3>
                      </div>
                      <p className="text-orange-100 mb-4">
                        Desarrollo de videojuegos con Unity, programación C# y diseño de mecánicas innovadoras.
                      </p>
                      <div className="flex items-center text-orange-200">
                        <span className="text-sm">Ver perfil completo</span>
                        <ExternalLink className="w-4 h-4 ml-2" />
                      </div>
                    </motion.button>

                    {/* UX/UI Designer */}
                    <motion.button
                      whileHover={{ scale: 1.05, y: -5 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => switchView('ux')}
                      className="bg-gradient-to-br from-blue-500 to-purple-500 p-6 rounded-xl text-white text-left shadow-lg hover:shadow-2xl transition-all duration-300"
                    >
                      <div className="flex items-center mb-4">
                        <div className="w-8 h-8 mr-3">
                          <Palette className="w-full h-full" />
                        </div>
                        <h3 className="text-xl font-bold">UX/UI Designer</h3>
                      </div>
                      <p className="text-blue-100 mb-4">
                        Diseño de experiencias digitales, investigación de usuarios y prototipado avanzado.
                      </p>
                      <div className="flex items-center text-blue-200">
                        <span className="text-sm">Ver perfil completo</span>
                        <ExternalLink className="w-4 h-4 ml-2" />
                      </div>
                    </motion.button>

                    {/* Music Business */}
                    <motion.button
                      whileHover={{ scale: 1.05, y: -5 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => switchView('music')}
                      className="bg-gradient-to-br from-purple-500 to-pink-500 p-6 rounded-xl text-white text-left shadow-lg hover:shadow-2xl transition-all duration-300"
                    >
                      <div className="flex items-center mb-4">
                        <div className="w-8 h-8 mr-3">
                          <Music className="w-full h-full" />
                        </div>
                        <h3 className="text-xl font-bold">Music Business</h3>
                      </div>
                      <p className="text-purple-100 mb-4">
                        Consultoría especializada, A&R, desarrollo de artistas y gestión estratégica.
                      </p>
                      <div className="flex items-center text-purple-200">
                        <span className="text-sm">Ver perfil completo</span>
                        <ExternalLink className="w-4 h-4 ml-2" />
                      </div>
                    </motion.button>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        ) : (
          // PROFILE VIEW
          <motion.div
            key={currentView}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.5 }}
            variants={containerVariants}
            className="max-w-6xl mx-auto px-6 py-8"
          >
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Sidebar */}
              <motion.div variants={itemVariants} className="lg:col-span-1 space-y-6">
                {/* Navigation between profiles */}
                <motion.div 
                  whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(0,0,0,0.3)" }}
                  className="bg-gray-800 p-6 rounded-2xl shadow-lg transition-all duration-300 border-2 border-gray-600"
                >
                  <h2 className="text-lg font-bold mb-4 text-center flex items-center justify-center">
                    <Target className="w-5 h-5 mr-2 text-yellow-500" />
                    Otros Perfiles
                  </h2>
                  <div className="space-y-3">
                    {(['game', 'ux', 'music'] as const).filter(role => role !== currentView).map((role) => (
                      <motion.button
                        key={role}
                        whileHover={{ scale: 1.05, x: 5 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => switchView(role)}
                        className={`w-full p-4 rounded-xl text-left bg-gradient-to-r ${roleData[role].gradient} hover:shadow-lg transition-all duration-200 transform`}
                      >
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                            <div className="w-5 h-5">
                              {roleData[role].icon}
                            </div>
                          </div>
                          <div>
                            <div className="font-semibold text-white">{roleData[role].title}</div>
                            <div className="text-xs text-white/80">Explorar perfil</div>
                          </div>
                          <ExternalLink className="w-4 h-4 text-white/80 ml-auto" />
                        </div>
                      </motion.button>
                    ))}
                  </div>
                </motion.div>

                {/* Contact Info - Sin formulario */}
                <motion.div 
                  whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(0,0,0,0.3)" }}
                  className="bg-gray-800 p-6 rounded-2xl shadow-lg transition-all duration-300"
                >
                  <h2 className="text-xl font-bold mb-4 flex items-center">
                    <Mail className="w-5 h-5 mr-2 text-blue-500" />
                    Contacto
                  </h2>
                  <div className="space-y-3">
                    <motion.div 
                      whileHover={{ x: 5 }}
                      className="flex items-center space-x-3"
                    >
                      <Mail className="w-4 h-4 text-gray-500" />
                      <a href="mailto:nachos.delvalle@gmail.com" className="text-blue-400 hover:text-blue-300 hover:underline transition-colors">
                        nachos.delvalle@gmail.com
                      </a>
                    </motion.div>
                    <motion.div 
                      whileHover={{ x: 5 }}
                      className="flex items-center space-x-3"
                    >
                      <MapPin className="w-4 h-4 text-gray-500" />
                      <span>Madrid, España</span>
                    </motion.div>
                  </div>
                  
                  {/* Botón Contáctame */}
                  <motion.a
                    href="mailto:nachos.delvalle@gmail.com"
                    whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(59, 130, 246, 0.3)" }}
                    whileTap={{ scale: 0.95 }}
                    className="mt-6 w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-200"
                  >
                    <Send className="w-4 h-4" />
                    <span>Contáctame</span>
                  </motion.a>
                </motion.div>

                {/* Portfolio Links */}
                {(currentView === 'game' || currentView === 'ux' || currentView === 'music') && (
                  <motion.div 
                    whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(0,0,0,0.3)" }}
                    className="bg-gray-800 p-6 rounded-2xl shadow-lg transition-all duration-300"
                  >
                    <h2 className="text-xl font-bold mb-4 flex items-center">
                      <div className={`w-5 h-5 mr-2 ${currentView === 'game' ? 'text-orange-500' : currentView === 'ux' ? 'text-blue-500' : 'text-purple-500'}`}>
                        {currentView === 'game' && <Gamepad2 className="w-full h-full" />}
                        {currentView === 'ux' && <Palette className="w-full h-full" />}
                        {currentView === 'music' && <Music className="w-full h-full" />}
                      </div>
                      Portfolio
                    </h2>
                    {currentView === 'game' && <ItchPortfolio />}
                    {currentView === 'ux' && <UXPortfolio />}
                    {currentView === 'music' && <MusicPortfolio />}
                  </motion.div>
                )}
              </motion.div>

              {/* Main Content */}
              <motion.div variants={itemVariants} className="lg:col-span-2 space-y-8">
                {/* Hero Section */}
                <motion.div 
                  whileHover={{ y: -5, boxShadow: "0 25px 50px rgba(0,0,0,0.4)" }}
                  className="bg-gray-800 p-8 rounded-2xl shadow-lg transition-all duration-300 relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-blue-900/20 pointer-events-none" />
                  <div className="text-center relative z-10">
                    <motion.div 
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className={`w-20 h-20 bg-gradient-to-r ${roleData[currentView].gradient} rounded-full flex items-center justify-center mx-auto mb-6 shadow-2xl`}
                    >
                      <div className="w-10 h-10 text-white">
                        {roleData[currentView].icon}
                      </div>
                    </motion.div>
                    <motion.h1 
                      className="text-4xl font-bold mb-2"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      Nacho Sereno del Valle
                    </motion.h1>
                    <motion.p 
                      className={`text-3xl bg-gradient-to-r ${roleData[currentView].gradient} bg-clip-text text-transparent font-bold mb-6`}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                    >
                      {roleData[currentView].title}
                    </motion.p>
                    <motion.p 
                      className="text-lg leading-relaxed text-gray-300"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.7 }}
                    >
                      {roleData[currentView].description}
                    </motion.p>
                  </div>
                </motion.div>

                {/* Experience */}
                <motion.div 
                  whileHover={{ y: -5, boxShadow: "0 25px 50px rgba(0,0,0,0.4)" }}
                  className="bg-gray-800 p-8 rounded-2xl shadow-lg transition-all duration-300"
                >
                  <h2 className="text-2xl font-bold mb-6 flex items-center">
                    <Briefcase className="w-6 h-6 mr-3 text-blue-500" />
                    Experiencia Profesional
                  </h2>
                  <div className="space-y-6">
                    {roleData[currentView].experience.map((exp, index) => (
                      <motion.div 
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.2 }}
                        className={`border-l-4 border-${exp.color}-500 pl-6 relative`}
                      >
                        <motion.div 
                          className={`absolute w-5 h-5 bg-${exp.color}-500 rounded-full`}
                          style={{ left: '-12px', top: '0px' }}
                          whileHover={{ scale: 1.5 }}
                        />
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-xl font-semibold">{exp.position}</h3>
                          <motion.span 
                            whileHover={{ scale: 1.05 }}
                            className="text-sm px-3 py-1 rounded-full bg-gray-700"
                          >
                            {exp.period}
                          </motion.span>
                        </div>
                        <p className={`text-${exp.color}-400 font-medium mb-3 text-lg`}>{exp.company}</p>
                        <ul className="space-y-2 text-gray-300">
                          {exp.tasks.map((task, taskIndex) => (
                            <motion.li 
                              key={taskIndex}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: (index * 0.2) + (taskIndex * 0.1) }}
                              whileHover={{ x: 5 }}
                              className="flex items-start"
                            >
                              <Zap className="w-4 h-4 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" />
                              {task}
                            </motion.li>
                          ))}
                        </ul>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* Education */}
                <motion.div 
                  whileHover={{ y: -5, boxShadow: "0 25px 50px rgba(0,0,0,0.4)" }}
                  className="bg-gray-800 p-8 rounded-2xl shadow-lg transition-all duration-300"
                >
                  <h2 className="text-2xl font-bold mb-6 flex items-center">
                    <GraduationCap className="w-6 h-6 mr-3 text-green-500" />
                    Formación Académica
                  </h2>
                  <div className="space-y-6">
                    {roleData[currentView].education.map((edu, index) => (
                      <motion.div 
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.2 }}
                        className={`border-l-4 border-${edu.color}-500 pl-6 relative`}
                      >
                        <motion.div 
                          className={`absolute w-5 h-5 bg-${edu.color}-500 rounded-full`}
                          style={{ left: '-12px', top: '0px' }}
                          whileHover={{ scale: 1.5 }}
                        />
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-xl font-semibold">{edu.course}</h3>
                          <motion.span 
                            whileHover={{ scale: 1.05 }}
                            className="text-sm px-3 py-1 rounded-full bg-gray-700"
                          >
                            {edu.period}
                          </motion.span>
                        </div>
                        <p className={`text-${edu.color}-400 font-medium mb-3 text-lg`}>{edu.institution}</p>
                        <motion.p 
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: (index * 0.2) + 0.3 }}
                          className="text-gray-300 leading-relaxed"
                        >
                          {edu.description}
                        </motion.p>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* Skills */}
                <motion.div 
                  whileHover={{ y: -5, boxShadow: "0 25px 50px rgba(0,0,0,0.4)" }}
                  className="bg-gray-800 p-8 rounded-2xl shadow-lg transition-all duration-300"
                >
                  <h2 className="text-2xl font-bold mb-6 flex items-center">
                    <Code className="w-6 h-6 mr-3 text-orange-500" />
                    Competencias Técnicas
                  </h2>
                  <SkillsChart skills={roleData[currentView].skills} getSkillColor={getSkillColor} />
                </motion.div>

                {/* Complementary Training - Solo mostrar si hay datos */}
                {roleData[currentView].complementaryTraining.length > 0 && (
                  <motion.div 
                    whileHover={{ y: -5, boxShadow: "0 25px 50px rgba(0,0,0,0.4)" }}
                    className="bg-gray-800 p-8 rounded-2xl shadow-lg transition-all duration-300"
                  >
                    <h2 className="text-2xl font-bold mb-6 flex items-center">
                      <Award className="w-6 h-6 mr-3 text-yellow-500" />
                      Formación Complementaria
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {roleData[currentView].complementaryTraining.map((training, index) => (
                        <motion.div 
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.1 }}
                          whileHover={{ scale: 1.02, y: -2 }}
                          className="p-4 rounded-lg bg-gray-700 border-l-4 border-yellow-500"
                        >
                          <h3 className="font-semibold mb-1">{training.course}</h3>
                          <p className="text-sm text-blue-400 font-medium">{training.institution}</p>
                          <p className="text-xs text-gray-400 mt-1">{training.year}</p>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Footer */}
      <motion.footer 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="mt-16 py-8 border-t bg-gray-800 border-gray-700"
      >
        <div className="max-w-6xl mx-auto px-6 text-center">
          <motion.p 
            whileHover={{ scale: 1.05 }}
            className="text-gray-400 flex items-center justify-center space-x-2"
          >
            <Sparkles className="w-4 h-4" />
            <span>© 2025 Nacho Sereno del Valle. Diseñado con pasión.</span>
            <Sparkles className="w-4 h-4" />
          </motion.p>
        </div>
      </motion.footer>
    </div>
  );
}

export default App;