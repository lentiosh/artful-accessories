
import { useEffect, useRef, useState } from 'react';
import { getFeaturedReviews } from '@/data/reviews';
import { Star } from 'lucide-react';

const ReviewsSection = () => {
  const reviews = getFeaturedReviews();
  const [activeIndex, setActiveIndex] = useState(0);
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
  
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % reviews.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [reviews.length]);
  
  return (
    <section 
      className="py-24 md:py-32 relative bg-white overflow-hidden"
      ref={sectionRef}
    >
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-5"
        style={{ 
          backgroundImage: 'url(https://images.unsplash.com/photo-1577998474517-7eeeed4e448a)',
        }}
      ></div>
      
      <div className="container mx-auto px-4 md:px-6 relative reveal-on-scroll">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-semibold tracking-tight mb-4">
            Τι Λένε οι Πελάτες μας
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ακούστε από πελάτες που έχουν βιώσει την ποιότητα και τη χειροτεχνία των προϊόντων μας.
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {reviews.map((review) => (
                <div 
                  key={review.id} 
                  className="w-full flex-shrink-0 p-6"
                >
                  <div className="glass-panel rounded-xl p-8 md:p-10 text-center">
                    <div className="flex justify-center mb-6">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i}
                          className={`w-5 h-5 ${i < review.rating ? 'text-amber-500 fill-amber-500' : 'text-gray-300'}`}
                        />
                      ))}
                    </div>
                    
                    <blockquote className="text-lg md:text-xl italic mb-8">
                      "{review.comment}"
                    </blockquote>
                    
                    <div className="flex items-center justify-center">
                      {review.avatar && (
                        <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                          <img 
                            src={review.avatar} 
                            alt={review.name} 
                            className="w-full h-full object-cover"
                          />
                        </div>
                      )}
                      <div className="text-left">
                        <div className="font-semibold">{review.name}</div>
                        <div className="text-sm text-muted-foreground">{review.location}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex justify-center mt-8 space-x-2">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-2.5 h-2.5 rounded-full transition-colors ${
                  index === activeIndex ? 'bg-primary' : 'bg-gray-300'
                }`}
                aria-label={`Πηγαίνετε στην κριτική ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
