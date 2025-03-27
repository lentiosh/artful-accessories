
import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current) return;
      const scrollTop = window.scrollY;
      const heroHeight = heroRef.current.offsetHeight;
      const opacity = 1 - (scrollTop / heroHeight) * 1.5;
      const transform = `translateY(${scrollTop * 0.4}px)`;
      
      if (heroRef.current) {
        heroRef.current.style.opacity = Math.max(0, opacity).toString();
        heroRef.current.style.transform = transform;
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <div className="relative h-screen overflow-hidden" ref={heroRef}>
      <div className="absolute inset-0 hero-pattern"></div>
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: 'url(https://images.unsplash.com/photo-1569172570740-99561521e31a?auto=format&fit=crop&q=80)',
          backgroundPosition: 'center 30%',
          filter: 'brightness(0.9)'
        }}
      ></div>
      
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/10"></div>
      
      <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
        <div className="max-w-3xl mx-auto">
          <span className="inline-block px-3 py-1 mb-6 text-xs font-medium uppercase tracking-widest rounded-full bg-white/20 backdrop-blur-sm text-white">
            Χειροποίητα στην Ελλάδα
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-semibold tracking-tight text-white mb-6 animate-slide-up">
            Χειροποίητα Κοσμήματα <br/> & Αξεσουάρ
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto animate-slide-up animation-delay-100">
            Δημιουργημένα με πάθος, εμπνευσμένα από την ελληνική παράδοση και το σύγχρονο σχέδιο.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up animation-delay-200">
            <Link 
              to="/products/jewelry" 
              className="px-8 py-3 rounded-full bg-primary text-white font-medium transition-all hover:bg-primary/90 hover:scale-105"
            >
              Κοσμήματα
            </Link>
            <Link 
              to="/products/accessories" 
              className="px-8 py-3 rounded-full bg-white/10 backdrop-blur-md text-white border border-white/30 font-medium transition-all hover:bg-white/20 hover:scale-105"
            >
              Αξεσουάρ
            </Link>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-0 right-0 flex justify-center animate-bounce">
        <a 
          href="#categories" 
          className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm text-white border border-white/30 transition-all hover:bg-white/20"
        >
          <ArrowDown size={20} />
        </a>
      </div>
    </div>
  );
};

export default Hero;
