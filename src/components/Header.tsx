
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu } from 'lucide-react';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <header 
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white shadow-md py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto flex justify-between items-center px-4">
        <a href="/" className="text-2xl font-bold text-itx-blue flex items-center">
          <span className="text-3xl font-extrabold">ITX</span>
          <span className="text-itx-accent ml-1 text-xs">.uy</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#services" className="text-gray-700 hover:text-itx-blue font-medium transition-colors">Servicios</a>
          <a href="#tools" className="text-gray-700 hover:text-itx-blue font-medium transition-colors">Herramientas</a>
          <a href="#why" className="text-gray-700 hover:text-itx-blue font-medium transition-colors">¿Por qué nosotros?</a>
          <a href="#contact" className="text-gray-700 hover:text-itx-blue font-medium transition-colors">Contacto</a>
          <Button 
            className="bg-gradient-to-r from-itx-blue to-itx-lightblue hover:from-itx-lightblue hover:to-itx-blue text-white font-medium"
          >
            Portal de clientes
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-itx-blue"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <Menu size={24} />
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg py-4 px-6 absolute top-full left-0 right-0 z-50">
          <nav className="flex flex-col space-y-4">
            <a 
              href="#services" 
              className="text-gray-700 hover:text-itx-blue font-medium transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Servicios
            </a>
            <a 
              href="#tools" 
              className="text-gray-700 hover:text-itx-blue font-medium transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Herramientas
            </a>
            <a 
              href="#why" 
              className="text-gray-700 hover:text-itx-blue font-medium transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              ¿Por qué nosotros?
            </a>
            <a 
              href="#contact" 
              className="text-gray-700 hover:text-itx-blue font-medium transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contacto
            </a>
            <Button 
              className="bg-gradient-to-r from-itx-blue to-itx-lightblue hover:from-itx-lightblue hover:to-itx-blue text-white font-medium w-full"
            >
              Portal de clientes
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
