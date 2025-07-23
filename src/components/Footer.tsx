import React from 'react';
import { Facebook, Instagram, Twitter, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                <span className="text-black font-bold text-sm">ON</span>
              </div>
              <span className="text-xl font-bold">Onnia</span>
            </div>
            <p className="text-gray-400 text-sm">
              Tu destino para la moda contemporánea y el estilo auténtico.
            </p>
            <div className="flex space-x-4">
              <Facebook size={20} className="text-gray-400 hover:text-white cursor-pointer transition-colors duration-200" />
              <Instagram size={20} className="text-gray-400 hover:text-white cursor-pointer transition-colors duration-200" />
              <Twitter size={20} className="text-gray-400 hover:text-white cursor-pointer transition-colors duration-200" />
              <Mail size={20} className="text-gray-400 hover:text-white cursor-pointer transition-colors duration-200" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Inicio</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Productos</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Ofertas</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Nuevo</a></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Atención al Cliente</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Contacto</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Devoluciones</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Envíos</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Tallas</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p className="text-gray-400 text-sm mb-4">
              Suscríbete para recibir ofertas exclusivas
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Tu email"
                className="flex-1 px-3 py-2 bg-gray-800 text-white border border-gray-700 rounded-l-md focus:outline-none focus:border-white text-sm"
              />
              <button className="bg-white text-black px-4 py-2 rounded-r-md hover:bg-gray-100 transition-colors duration-200 text-sm font-medium">
                Suscribirse
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm text-gray-400">
          <p>&copy; 2025 Onnia. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;