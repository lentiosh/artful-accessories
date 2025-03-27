
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { type Product } from '@/data/products';

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <Link
      to={`/product/${product.id}`}
      className="block group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden rounded-xl card-hover">
        <div className="relative aspect-[4/5] overflow-hidden">
          <img
            src={product.images[0]}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
          />
          
          {product.new && (
            <div className="absolute top-3 left-3 bg-primary text-white text-xs font-medium px-2 py-1 rounded-full">
              New
            </div>
          )}
        </div>
        
        <div className="p-4 bg-white">
          <h3 className="font-medium text-lg mb-1 group-hover:text-primary transition-colors">
            {product.name}
          </h3>
          <p className="text-muted-foreground text-sm mb-2 line-clamp-2">
            {product.shortDescription}
          </p>
          <div className="font-semibold text-primary">
            {product.price}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
