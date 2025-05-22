
import React from 'react';
import { Button } from "@/components/ui/button";
import { Shield, Map, FileText, User, Ticket } from 'lucide-react';

const ToolCard = ({ 
  icon, 
  title, 
  bgColor 
}: { 
  icon: React.ReactNode; 
  title: string; 
  bgColor: string;
}) => {
  return (
    <div className={`tool-card reveal ${bgColor} group`}>
      <div className="flex items-center justify-between mb-2">
        <div className="text-itx-blue group-hover:text-itx-accent transition-colors">
          {icon}
        </div>
      </div>
      <h3 className="text-lg font-semibold text-gray-800 mt-4 group-hover:text-itx-blue transition-colors">
        {title}
      </h3>
    </div>
  );
};

const ToolsSection = () => {
  return (
    <section id="tools" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 reveal">
          <h2 className="text-3xl lg:text-4xl font-bold text-itx-blue mb-4">Herramientas destacadas</h2>
          <div className="w-20 h-1 bg-itx-accent mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Desarrollamos soluciones prácticas que resuelven problemas reales de negocio.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12">
          <ToolCard
            icon={<Shield size={48} className="transition-transform duration-300 group-hover:scale-110" />}
            title="Generador de VPN personalizado"
            bgColor="bg-gradient-to-br from-white to-blue-50"
          />
          
          <ToolCard
            icon={<Map size={48} className="transition-transform duration-300 group-hover:scale-110" />}
            title="Mapa de red interactivo"
            bgColor="bg-gradient-to-br from-white to-emerald-50"
          />
          
          <ToolCard
            icon={<FileText size={48} className="transition-transform duration-300 group-hover:scale-110" />}
            title="Formulario de diagnóstico"
            bgColor="bg-gradient-to-br from-white to-amber-50"
          />
          
          <ToolCard
            icon={<User size={48} className="transition-transform duration-300 group-hover:scale-110" />}
            title="Portal de clientes"
            bgColor="bg-gradient-to-br from-white to-indigo-50"
          />
          
          <ToolCard
            icon={<Ticket size={48} className="transition-transform duration-300 group-hover:scale-110" />}
            title="Sistema de tickets"
            bgColor="bg-gradient-to-br from-white to-purple-50"
          />
        </div>

        <div className="text-center reveal">
          <Button 
            className="bg-gradient-to-r from-itx-blue to-itx-lightblue hover:from-itx-lightblue hover:to-itx-blue text-white font-medium py-2 px-6"
            size="lg"
          >
            Explorar soluciones
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ToolsSection;
