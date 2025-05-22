
import React from 'react';

const WhyUsSection = () => {
  return (
    <section id="why" className="py-20 bg-gradient-to-br from-itx-blue to-blue-900 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center reveal">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">¿Por qué elegirnos?</h2>
          
          <div className="w-20 h-1 bg-itx-accent mx-auto mb-8"></div>
          
          <p className="text-2xl mb-6 font-light">
            No hacemos promesas vacías. <span className="font-medium">Hacemos que las cosas funcionen.</span>
          </p>
          
          <p className="text-lg opacity-90">
            Entendemos lo que necesitás y lo resolvemos de forma simple, efectiva y confiable.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="bg-white bg-opacity-10 p-6 rounded-lg reveal">
              <div className="text-4xl mb-4 text-itx-accent">⚡</div>
              <h3 className="font-semibold mb-2">Rápidos</h3>
              <p className="text-sm opacity-80">Respuestas y soluciones sin demoras</p>
            </div>
            
            <div className="bg-white bg-opacity-10 p-6 rounded-lg reveal">
              <div className="text-4xl mb-4 text-itx-accent">🎯</div>
              <h3 className="font-semibold mb-2">Efectivos</h3>
              <p className="text-sm opacity-80">Nos enfocamos en resultados concretos</p>
            </div>
            
            <div className="bg-white bg-opacity-10 p-6 rounded-lg reveal">
              <div className="text-4xl mb-4 text-itx-accent">🔄</div>
              <h3 className="font-semibold mb-2">Adaptables</h3>
              <p className="text-sm opacity-80">Soluciones que crecen con tu negocio</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
