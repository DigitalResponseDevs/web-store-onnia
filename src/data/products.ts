export interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  images: string[];
  description: string;
  sizes: string[];
  colors: string[];
  className: string
  inStock: boolean;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Vestido Satén",
    price: 29.99,
    category: "Vestidos",
    images: [
      "../public/images/vestido-saten-rosa-nude-large-onnia.png"
    ],
    description: "Vestido básica de tela satén 100% premium. Perfecta para el uso diario con un corte moderno y cómodo. Fabricado con materiales sostenibles y de alta calidad.",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Negro", "Blanco", "Gris"],
    className: "instock",
    inStock: true
  },
  {
    id: 2,
    name: "Vestido Slim Fit",
    price: 79.99,
    category: "Vestidos",
    images: [
      "../public/images/vestido-saten-rosa-nude-short-onnia.png"  
    ],
    description: "Vestido slim fit de mezclilla premium. Diseño moderno con corte entallado que estiliza la figura. Confeccionado con denim de alta resistencia.",
    sizes: ["28", "30", "32", "34", "36"],
    colors: ["Azul Oscuro", "Negro", "Azul Claro"],
    className: "instock",
    inStock: true
  },
  {
    id: 3,
    name: "Vestido Satén Corto Oliva",
    price: 59.99,
    category: "Vestidos",
    images: [
      "../public/images/vestido-saten-corto-oliva-onnia.png"
    ],
    description: "Ideal para el día a día y actividades casuales.",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Gris", "Negro", "Azul Marino"],
    className: "no-stock",
    inStock: false
  },
  {
    id: 4,
    name: "Pantalón Casual Elegante",
    price: 89.99,
    category: "Pantalones",
    images: [
      "public/images/pantalon-saten-rosa-nude-onnia.png"
    ],
    description: "Pantalón casual elegante perfecto para múltiples ocasiones. Confeccionado en tela fluida con caída natural. Diseño versátil y atemporal.",
    sizes: ["XS", "S", "M", "L"],
    colors: ["Negro", "Azul Marino", "Beige"],
    className: "no-stock",
    inStock: false
  }
] 