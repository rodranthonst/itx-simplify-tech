
import React from 'react';

const ServiceCard = ({ icon, title, description }: { icon: string; title: string; description: string }) => {
  return (
    <div className="service-card reveal">
      <div className="text-4xl mb-4 text-itx-blue">{icon}</div>
      <h3 className="text-xl font-semibold mb-2 text-gray-800">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 reveal">
          <h2 className="text-3xl lg:text-4xl font-bold text-itx-blue mb-4">¿Qué hacemos?</h2>
          <div className="w-20 h-1 bg-itx-accent mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Soluciones tecnológicas simples, efectivas y adaptadas a empresas que buscan optimizar sus procesos sin complicarse.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ServiceCard 
            icon="⚙️"
            title="Automatización de procesos"
            description="Reducí tareas repetitivas, conectá herramientas y ganá tiempo. Nosotros lo implementamos por vos."
          />
          
          <ServiceCard 
            icon="🔧"
            title="Plataformas a medida"
            description="Tableros de gestión, formularios inteligentes, portales internos. Te damos las herramientas, sin necesidad de desarrollos eternos."
          />
          
          <ServiceCard 
            icon="💻"
            title="Soluciones IT concretas"
            description="Soporte técnico, redes, seguridad, consultoría y herramientas propias que resuelven."
          />
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
