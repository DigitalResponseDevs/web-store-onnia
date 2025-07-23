import React, { useState } from 'react';
import { products, Product } from '../data/products';
import ProductCard from '../components/ProductCard';
import { useEffect } from 'react';
import CategoryFilter from '../components/CategoryFilter';

interface HomeProps {
  onAddToCart: (product: Product) => void;
}

const Home: React.FC<HomeProps> = ({ onAddToCart }) => {
  const [selectedCategory, setSelectedCategory] = useState('Todos');

  useEffect(() => {
    document.title = 'Onnia - Nuestra Colección';
  }, []);
  
  const categories = Array.from(new Set(products.map(product => product.category)));
  
  const filteredProducts = selectedCategory === 'Todos' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-200">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-900 to-black text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Descubre tu Estilo
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Encuentra las últimas tendencias en moda con calidad premium y diseño contemporáneo
          </p>
          <a href="#productos">
          <button className="bg-white text-black px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors duration-200">
            Explorar Colección
          </button>
          </a>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16" id="productos" >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nuestra Colección
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Piezas cuidadosamente seleccionadas para crear looks únicos y expresar tu personalidad
            </p>
          </div>

          <CategoryFilter
            categories={categories}
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={onAddToCart}
              />
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No se encontraron productos en esta categoría.</p>
            </div>
          )}
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🚚</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Envío Gratuito</h3>
              <p className="text-gray-600">Envío gratuito en pedidos superiores a $50</p>
            </div>
            <div className="p-6">
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">↩️</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Devoluciones Fáciles</h3>
              <p className="text-gray-600">30 días para devolver cualquier producto</p>
            </div>
            <div className="p-6">
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">⭐</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Calidad Premium</h3>
              <p className="text-gray-600">Materiales de la más alta calidad</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;