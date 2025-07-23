import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Search, User } from 'lucide-react';

interface HeaderProps {
  cartItemsCount: number;
}

const Header: React.FC<HeaderProps> = ({ cartItemsCount }) => {
  return (
    <header className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">ON</span>
            </div>
            <span className="text-xl font-bold text-gray-900">Onnia</span>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-black transition-colors duration-200">
              Inicio
            </Link>
            <Link to="/" className="text-gray-700 hover:text-black transition-colors duration-200">
              Productos
            </Link>
            <Link to="/" className="text-gray-700 hover:text-black transition-colors duration-200">
              Categorías
            </Link>
            <Link to="/" className="text-gray-700 hover:text-black transition-colors duration-200">
              Ofertas
            </Link>
          </nav>

          {/* Right side icons */}
          <div className="flex items-center space-x-4">
            <button className="p-2 text-gray-600 hover:text-black transition-colors duration-200">
              <Search size={20} />
            </button>
            <button className="p-2 text-gray-600 hover:text-black transition-colors duration-200">
              <User size={20} />
            </button>
            <button className="p-2 text-gray-600 hover:text-black transition-colors duration-200 relative">
              <ShoppingBag size={20} />
              {cartItemsCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-black text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartItemsCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;