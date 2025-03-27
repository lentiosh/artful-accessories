
import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const CategoryShowcase = () => {
  const categoryRefs = useRef<(HTMLDivElement | null)[]>([]);
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
        }
      });
    }, { threshold: 0.2 });
    
    categoryRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });
    
    return () => {
      categoryRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);
  
  const categories = [
    {
      name: 'Χειροποίητα Αξεσουάρ',
      description: 'Μοναδικές τσάντες, κασκόλ και πολλά άλλα, όλα χειροποίητα με προσοχή στη λεπτομέρεια και ποιοτικά υλικά.',
      image: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7',
      path: '/products/accessories'
    },
    {
      name: 'Χειροποίητα Κοσμήματα',
      description: 'Κομψά κολιέ, σκουλαρίκια, βραχιόλια και δαχτυλίδια που συνδυάζουν παραδοσιακές τεχνικές με μοντέρνα σχέδια.',
      image: 'https://images.unsplash.com/photo-1611085583191-a3b181a88401',
      path: '/products/jewelry'
    }
  ];
  
  return (
    <section id="categories" className="py-24 md:py-32 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-background to-transparent"></div>
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-semibold tracking-tight mb-4">
            Εξερευνήστε τις Συλλογές μας
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Κάθε κομμάτι αφηγείται μια ιστορία, δημιουργημένο με πάθος και εμπνευσμένο από την ελληνική κληρονομιά.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          {categories.map((category, index) => (
            <div 
              key={category.name}
              ref={el => categoryRefs.current[index] = el}
              className="relative group reveal-on-scroll"
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-xl shadow-lg">
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: `url(${category.image})` }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                
                <div className="absolute inset-0 flex flex-col justify-end p-8">
                  <h3 className="text-2xl md:text-3xl font-display font-semibold text-white mb-3">
                    {category.name}
                  </h3>
                  <p className="text-white/80 mb-6 max-w-md">
                    {category.description}
                  </p>
                  <Link 
                    to={category.path} 
                    className="inline-flex items-center justify-center w-full sm:w-auto px-6 py-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/30 text-white font-medium transition-all hover:bg-white/20 group-hover:bg-primary/80 group-hover:border-primary/80"
                  >
                    Ανακαλύψτε τη Συλλογή
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryShowcase;
