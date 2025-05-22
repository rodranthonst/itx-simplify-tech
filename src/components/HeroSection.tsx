
import React, { useEffect } from 'react';
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  useEffect(() => {
    const handleAnimations = () => {
      const elements = document.querySelectorAll('.reveal');
      elements.forEach((element) => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        if (elementTop < windowHeight - elementVisible) {
          element.classList.add('active');
        }
      });
    };

    window.addEventListener('scroll', handleAnimations);
    handleAnimations(); // Run once on component mount

    return () => {
      window.removeEventListener('scroll', handleAnimations);
    };
  }, []);

  return (
    <section className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-white pt-24 md:pt-32 flex flex-col justify-center">
      <div className="container mx-auto px-4 py-20 lg:py-32 relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full filter blur-3xl opacity-50 animate-float"></div>
        <div className="absolute bottom-0 left-20 w-64 h-64 bg-amber-100 rounded-full filter blur-3xl opacity-30 animate-float"></div>
        
        <div className="grid md:grid-cols-2 gap-8 items-center relative">
          <div className="z-10">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-itx-blue reveal">
              Tecnología útil. <br />
              <span className="text-itx-accent">Sin complicaciones.</span>
            </h1>
            
            <p className="text-lg lg:text-xl text-gray-700 mb-8 max-w-lg reveal">
              Implementamos soluciones digitales y automatizamos procesos para que puedas enfocarte en hacer crecer tu negocio.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 reveal">
              <Button 
                size="lg"
                className="bg-itx-blue hover:bg-itx-accent text-white font-medium transition-colors px-6"
              >
                Agendá una demo
              </Button>
              
              <Button 
                variant="outline"
                size="lg"
                className="border-itx-blue text-itx-blue hover:bg-itx-blue hover:text-white font-medium transition-all px-6"
              >
                Ver soluciones
              </Button>
            </div>
          </div>
          
          <div className="relative order-first md:order-last reveal">
            <div className="relative z-10 transform translate-y-8 rounded-xl shadow-2xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80"
                alt="ITX Soluciones Tecnológicas"
                className="w-full object-cover rounded-xl"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-tr from-itx-blue to-itx-accent opacity-90 rounded-xl transform translate-x-4 translate-y-4"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
