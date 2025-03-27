
import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { getFeaturedProducts } from '@/data/products';
import ProductCard from '@/components/ui/ProductCard';

const FeaturedProducts = () => {
  const products = getFeaturedProducts().slice(0, 6);
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        sectionRef.current?.classList.add('revealed');
      }
    }, { threshold: 0.1 });
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  
  return (
    <section 
      id="featured" 
      className="py-24 bg-accent relative overflow-hidden"
      ref={sectionRef}
    >
      <div className="container mx-auto px-4 md:px-6 reveal-on-scroll">
        <div className="flex flex-col md:flex-row items-center justify-between mb-12 md:mb-16">
          <div>
            <h2 className="text-3xl md:text-4xl font-display font-semibold tracking-tight mb-3">
              Προτεινόμενη Συλλογή
            </h2>
            <p className="text-muted-foreground text-lg max-w-lg">
              Ανακαλύψτε τα πιο δημοφιλή χειροποίητα κομμάτια μας, αγαπημένα για το μοναδικό τους σχεδιασμό και την εξαιρετική τους ποιότητα.
            </p>
          </div>
          <div className="mt-6 md:mt-0">
            <Link 
              to="/products/accessories" 
              className="px-6 py-3 rounded-full bg-primary text-white font-medium transition-all hover:bg-primary/90 hover:scale-105"
            >
              Δείτε Όλα
            </Link>
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div 
              key={product.id} 
              className="animate-fade-in" 
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
