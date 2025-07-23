import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, ShoppingCart } from 'lucide-react';
import { Product } from '../data/products';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
  return (
    <div className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      <Link to={`/producto/${product.id}`} className="block">
        <div className="aspect-w-4 aspect-h-5 bg-gray-100 relative overflow-hidden">
          <img
            src={product.images[0]}
            alt={product.name}
            className={`w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300 ${product.className}`}
          />
          {!product.inStock && (
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <span className="text-white font-semibold">Agotado</span>
            </div>
          )}
          <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            <button className="p-2 bg-white rounded-full shadow-md hover:bg-gray-50 transition-colors duration-200">
              <Heart size={16} className="text-gray-600" />
            </button>
          </div>
        </div>
      </Link>
      
      <div className="p-4">
        <div className="mb-2">
          <span className="text-xs text-gray-500 uppercase tracking-wide">{product.category}</span>
        </div>
        <Link to={`/producto/${product.id}`}>
          <h3 className="text-lg font-semibold text-gray-900 mb-2 hover:text-gray-700 transition-colors duration-200">
            {product.name}
          </h3>
        </Link>
        <div className="flex items-center justify-between">
          <span className="text-xl font-bold text-gray-900">${product.price}</span>
          <button
            onClick={() => onAddToCart(product)}
            disabled={!product.inStock}
            className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
              product.inStock
                ? 'bg-black text-white hover:bg-gray-800'
                : 'bg-gray-200 text-gray-500 cursor-not-allowed'
            }`}
          >
            <ShoppingCart size={16} />
            <span>{product.inStock ? 'Añadir' : 'Agotado'}</span>
          </button>
        </div>
        <div className="mt-2 flex space-x-1">
          {product.colors.slice(0, 3).map((color, index) => (
            <div
              key={index}
              className="w-4 h-4 rounded-full border border-gray-200"
              style={{
                backgroundColor: color === 'Negro' ? '#000' : 
                               color === 'Blanco' ? '#fff' : 
                               color === 'Gris' ? '#6B7280' :
                               color === 'Azul Oscuro' ? '#1E3A8A' :
                               color === 'Azul Claro' ? '#3B82F6' :
                               color === 'Azul Marino' ? '#1E40AF' :
                               color === 'Beige' ? '#D4B5A0' :
                               color === 'Marrón' ? '#92400E' : '#6B7280'
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;