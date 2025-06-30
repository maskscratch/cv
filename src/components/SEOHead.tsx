import React from 'react';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  currentView?: string;
}

const SEOHead: React.FC<SEOHeadProps> = ({ 
  title = "Nacho Sereno del Valle - CV Web", 
  description = "CV Web de Nacho Sereno del Valle - Game Designer, UX/UI Designer y Music Business Consultant",
  keywords = "Game Designer, UX/UI Designer, Music Business, Madrid, Diseño de Videojuegos, Experiencia de Usuario",
  currentView = "home"
}) => {
  
  const getViewSpecificData = () => {
    switch(currentView) {
      case 'game':
        return {
          title: "Nacho Sereno del Valle - Game Designer | Unity Developer | C# Programming",
          description: "Game Designer especializado en Unity y C#. Experiencia en desarrollo de videojuegos 2D/3D, mecánicas de juego y realidad virtual. Portfolio disponible en itch.io.",
          keywords: "Game Designer, Unity Developer, C# Programming, Videojuegos, Game Development, Unity 3D, Unreal Engine, Game Mechanics, VR Development, Indie Games, Madrid"
        };
      case 'ux':
        return {
          title: "Nacho Sereno del Valle - UX/UI Designer | Figma Expert | User Research",
          description: "UX/UI Designer con formación en The Bridge. Especialista en investigación de usuarios, prototipado con Figma, diseño de interfaces y experiencia de usuario.",
          keywords: "UX Designer, UI Designer, Figma, User Research, Prototipado, Diseño de Interfaces, User Experience, Product Design, Usabilidad, Design Thinking, Madrid"
        };
      case 'music':
        return {
          title: "Nacho Sereno del Valle - Music Business Consultant | A&R | Event Management",
          description: "Music Business Consultant con experiencia en A&R, promoción musical, desarrollo de artistas y gestión de eventos. Fundador de Space Noise Management.",
          keywords: "Music Business, A&R, Promoción Musical, Desarrollo de Artistas, Gestión de Eventos, Music Industry, Event Management, Music Marketing, Madrid"
        };
      default:
        return { title, description, keywords };
    }
  };

  const { title: viewTitle, description: viewDescription, keywords: viewKeywords } = getViewSpecificData();

  React.useEffect(() => {
    // Actualizar meta tags dinámicamente
    document.title = viewTitle;
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', viewDescription);
    }
    
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', viewKeywords);
    }

    // Structured Data para ATS y buscadores
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Nacho Sereno del Valle",
      "jobTitle": currentView === 'game' ? "Game Designer" : 
                  currentView === 'ux' ? "UX/UI Designer" : 
                  currentView === 'music' ? "Music Business Consultant" : 
                  "Profesional Multidisciplinar",
      "description": viewDescription,
      "url": window.location.href,
      "sameAs": [
        "https://nachux.itch.io/",
        "https://www.linkedin.com/in/nacho-sereno-del-valle/"
      ],
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Madrid",
        "addressCountry": "España"
      },
      "email": "nachos.delvalle@gmail.com",
      "knowsAbout": currentView === 'game' ? 
        ["Unity", "C# Programming", "Game Design", "Virtual Reality", "Game Development"] :
        currentView === 'ux' ? 
        ["UX Design", "UI Design", "Figma", "User Research", "Prototyping"] :
        currentView === 'music' ? 
        ["Music Business", "A&R", "Event Management", "Artist Development", "Music Marketing"] :
        ["Game Design", "UX/UI Design", "Music Business", "Technology", "Creative Industries"]
    };

    // Remover script anterior si existe
    const existingScript = document.getElementById('structured-data');
    if (existingScript) {
      existingScript.remove();
    }

    // Añadir nuevo structured data
    const script = document.createElement('script');
    script.id = 'structured-data';
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(structuredData);
    document.head.appendChild(script);

  }, [currentView, viewTitle, viewDescription, viewKeywords]);

  return null; // Este componente no renderiza nada visible
};

export default SEOHead;