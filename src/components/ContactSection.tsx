
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitting, setSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    
    try {
      // Here we would normally send the data to a backend endpoint
      // For demonstration purposes, we'll just simulate a successful submission
      console.log(`Sending form data to admin@itxuy.com:`, formData);
      
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Mensaje enviado",
        description: "Nos pondremos en contacto contigo a la brevedad.",
        duration: 5000,
      });
      
      // Clear form
      setFormData({
        name: '',
        email: '',
        message: ''
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "No se pudo enviar el mensaje. Inténtalo nuevamente.",
        variant: "destructive",
        duration: 5000,
      });
      console.error("Form submission error:", error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-50 relative">
      {/* Test Website Banner */}
      <div className="bg-yellow-400 text-black font-bold py-2 px-4 absolute top-0 left-0 right-0 text-center">
        ⚠️ SITIO WEB DE PRUEBA ⚠️
      </div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 reveal">
          <h2 className="text-3xl lg:text-4xl font-bold text-itx-blue mb-4">Contacto</h2>
          <div className="w-20 h-1 bg-itx-accent mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            ¿Listo para hacer tu tecnología más efectiva? Escríbenos y te responderemos a la brevedad.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="bg-white p-8 rounded-lg shadow-lg reveal">
            <form onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Nombre
                  </label>
                  <Input 
                    id="name"
                    placeholder="Tu nombre" 
                    required
                    className="w-full"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <Input 
                    id="email"
                    type="email" 
                    placeholder="tu@email.com" 
                    required
                    className="w-full" 
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Mensaje
                </label>
                <Textarea 
                  id="message"
                  placeholder="¿Cómo podemos ayudarte?" 
                  rows={5} 
                  required
                  className="w-full"
                  value={formData.message}
                  onChange={handleChange}
                />
              </div>
              
              <Button 
                type="submit"
                className="w-full bg-gradient-to-r from-itx-blue to-itx-lightblue hover:from-itx-lightblue hover:to-itx-blue text-white font-medium py-2"
                size="lg"
                disabled={submitting}
              >
                {submitting ? 'Enviando...' : 'Enviar mensaje'}
              </Button>
            </form>
            
            <div className="mt-8 flex justify-center items-center space-x-6 text-gray-500">
              <a href="mailto:admin@itxuy.com" className="hover:text-itx-blue">
                admin@itxuy.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
