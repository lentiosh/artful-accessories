
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getProductById, getProductsByCategory } from '@/data/products';
import { getProductReviews } from '@/data/reviews';
import { Star, Phone, Mail, ArrowLeft } from 'lucide-react';
import ProductCard from './ui/ProductCard';
import { toast } from '@/components/ui/use-toast';

const ProductDetails = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(0);
  const [isImageLoading, setIsImageLoading] = useState(true);
  
  const product = id ? getProductById(id) : null;
  const reviews = id ? getProductReviews(id) : [];
  
  const similarProducts = product
    ? getProductsByCategory(product.category)
        .filter(p => p.id !== product.id)
        .slice(0, 3)
    : [];
  
  useEffect(() => {
    if (!product) {
      navigate('/');
      toast({
        variant: "destructive",
        title: "Το προϊόν δεν βρέθηκε",
        description: "Δεν μπορέσαμε να βρούμε το προϊόν που αναζητάτε.",
      });
    }
    
    // Reset selected image when product changes
    setSelectedImage(0);
    setIsImageLoading(true);
    
    window.scrollTo(0, 0);
  }, [product, navigate]);
  
  if (!product) return null;
  
  const handleContactClick = (method: 'phone' | 'email') => {
    if (method === 'phone') {
      window.location.href = 'tel:+306912345678';
    } else {
      window.location.href = `mailto:hello@artfulcrafts.com?subject=Ερώτηση για ${product.name}`;
    }
  };
  
  return (
    <div className="container mx-auto px-4 md:px-6 py-10 md:py-16">
      <button 
        onClick={() => navigate(-1)}
        className="flex items-center text-sm space-x-1 mb-8 hover:text-primary transition-colors"
      >
        <ArrowLeft size={18} />
        <span>Πίσω</span>
      </button>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Product Images */}
        <div className="space-y-4">
          <div className="relative aspect-[4/5] rounded-xl overflow-hidden bg-muted">
            <div className={`absolute inset-0 bg-gray-100 animate-pulse ${!isImageLoading ? 'hidden' : ''}`}></div>
            <img
              src={product.images[selectedImage]}
              alt={product.name}
              className={`w-full h-full object-cover transition-opacity duration-300 ${isImageLoading ? 'opacity-0' : 'opacity-100'}`}
              onLoad={() => setIsImageLoading(false)}
            />
          </div>
          
          {product.images.length > 1 && (
            <div className="flex space-x-3">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`relative w-20 h-20 rounded-md overflow-hidden transition-all ${
                    selectedImage === index 
                      ? 'ring-2 ring-primary' 
                      : 'opacity-70 hover:opacity-100'
                  }`}
                >
                  <img
                    src={image}
                    alt={`${product.name} - προβολή ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          )}
        </div>
        
        {/* Product Details */}
        <div className="space-y-8">
          <div>
            <div className="flex items-center mb-4">
              <span className="text-sm font-medium bg-accent px-3 py-1 rounded-full text-muted-foreground">
                {product.category === 'accessories' ? 'Αξεσουάρ' : 'Κόσμημα'}
              </span>
              {product.new && (
                <span className="ml-2 text-sm font-medium bg-primary/10 text-primary px-3 py-1 rounded-full">
                  Νέα Άφιξη
                </span>
              )}
            </div>
            
            <h1 className="text-3xl md:text-4xl font-display font-semibold mb-4">
              {product.name}
            </h1>
            
            <p className="text-2xl font-semibold text-primary mb-6">
              {product.price}
            </p>
            
            <div className="prose prose-lg text-muted-foreground mb-8">
              <p>{product.description}</p>
            </div>
          </div>
          
          {/* Materials & Dimensions */}
          <div className="space-y-4">
            <div>
              <h3 className="text-sm uppercase tracking-wider font-medium text-muted-foreground mb-2">
                Υλικά
              </h3>
              <ul className="flex flex-wrap gap-2">
                {product.materials.map((material, index) => (
                  <li
                    key={index}
                    className="bg-accent text-foreground px-3 py-1 rounded-full text-sm"
                  >
                    {material}
                  </li>
                ))}
              </ul>
            </div>
            
            {product.dimensions && (
              <div>
                <h3 className="text-sm uppercase tracking-wider font-medium text-muted-foreground mb-2">
                  Διαστάσεις
                </h3>
                <p className="text-foreground">
                  {product.dimensions}
                </p>
              </div>
            )}
          </div>
          
          {/* Contact Options */}
          <div className="space-y-4 pt-4 border-t border-border">
            <h3 className="font-medium">
              Ενδιαφέρεστε για αυτό το προϊόν; Επικοινωνήστε μαζί μας για να παραγγείλετε:
            </h3>
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => handleContactClick('phone')}
                className="flex items-center justify-center space-x-2 px-6 py-3 rounded-full bg-primary text-white font-medium transition-all hover:bg-primary/90"
              >
                <Phone size={18} />
                <span>Τηλεφωνήστε για Παραγγελία</span>
              </button>
              <button
                onClick={() => handleContactClick('email')}
                className="flex items-center justify-center space-x-2 px-6 py-3 rounded-full bg-secondary text-foreground font-medium transition-all hover:bg-secondary/80"
              >
                <Mail size={18} />
                <span>Email Επικοινωνίας</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Reviews Section */}
      {reviews.length > 0 && (
        <div className="mt-16 pt-12 border-t border-border">
          <h2 className="text-2xl font-display font-semibold mb-8">
            Κριτικές Πελατών
          </h2>
          <div className="grid grid-cols-1 gap-6">
            {reviews.map((review) => (
              <div key={review.id} className="bg-accent/50 rounded-xl p-6">
                <div className="flex items-start">
                  {review.avatar && (
                    <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                      <img 
                        src={review.avatar} 
                        alt={review.name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <div>
                        <h4 className="font-medium">{review.name}</h4>
                        <div className="text-sm text-muted-foreground">
                          {review.location} • {review.date}
                        </div>
                      </div>
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i}
                            className={`w-4 h-4 ${i < review.rating ? 'text-amber-500 fill-amber-500' : 'text-gray-300'}`}
                          />
                        ))}
                      </div>
                    </div>
                    <p className="text-foreground">{review.comment}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      
      {/* Similar Products */}
      {similarProducts.length > 0 && (
        <div className="mt-16 pt-12 border-t border-border">
          <h2 className="text-2xl font-display font-semibold mb-8">
            Μπορεί Επίσης να Σας Αρέσουν
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {similarProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
