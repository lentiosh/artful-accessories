
import { useEffect, useRef } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const About = () => {
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);
  
  useEffect(() => {
    window.scrollTo(0, 0);
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
        }
      });
    }, { threshold: 0.1 });
    
    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });
    
    return () => {
      sectionRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);
  
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-28 pb-20">
        {/* Hero Section */}
        <div className="relative h-[30vh] md:h-[40vh] mb-16 overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ 
              backgroundImage: 'url(https://images.unsplash.com/photo-1610567287576-d51c88ea96da?auto=format&fit=crop&q=80)',
            }}
          ></div>
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="relative h-full flex items-center justify-center text-center px-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-semibold text-white">
              Η Ιστορία μας
            </h1>
          </div>
        </div>
        
        {/* Story Section */}
        <div 
          className="container mx-auto px-4 md:px-6 mb-24 reveal-on-scroll"
          ref={el => sectionRefs.current[0] = el}
        >
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-display font-semibold mb-6">
              Χειροποίητα με Πάθος
            </h2>
            <div className="prose prose-lg">
              <p>
                Καλώς ήρθατε στο ArtfulCrafts, όπου κάθε κομμάτι αφηγείται μια ιστορία. Ως περήφανη Ελληνίδα τεχνίτρια, δημιουργώ χειροποίητα κοσμήματα και αξεσουάρ που συνδυάζουν την παραδοσιακή τεχνική με το σύγχρονο σχέδιο. Το ταξίδι μου ξεκίνησε σε ένα μικρό εργαστήριο στην Ελλάδα, όπου έμαθα την τέχνη της χειροτεχνίας από τη γιαγιά μου, η οποία μου μετέδωσε τεχνικές που έχουν περάσει στην οικογένειά μας για γενιές.
              </p>
              <p>
                Κάθε κομμάτι στη συλλογή μου δημιουργείται με προσοχή στη λεπτομέρεια και βαθύ σεβασμό για τα υλικά με τα οποία εργάζομαι. Προμηθεύομαι βιώσιμα και ποιοτικά υλικά τοπικά όποτε είναι δυνατόν, υποστηρίζοντας άλλες μικρές επιχειρήσεις και μειώνοντας τις περιβαλλοντικές επιπτώσεις.
              </p>
              <p>
                Η έμπνευσή μου προέρχεται από την πλούσια πολιτιστική κληρονομιά της Ελλάδας, τα εντυπωσιακά τοπία της Μεσογείου και τη διαχρονική κομψότητα του μινιμαλιστικού σχεδιασμού. Πιστεύω ότι τα αξεσουάρ δεν πρέπει να είναι μόνο όμορφα αλλά και ουσιαστικά, δημιουργώντας μια σύνδεση μεταξύ του χρήστη και του αντικειμένου.
              </p>
            </div>
          </div>
        </div>
        
        {/* Process Section */}
        <div 
          id="process" 
          className="bg-accent py-24"
          ref={el => sectionRefs.current[1] = el}
        >
          <div className="container mx-auto px-4 md:px-6 reveal-on-scroll">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-display font-semibold mb-4">
                Η Διαδικασία Δημιουργίας μας
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Από την ιδέα στη δημιουργία, κάθε κομμάτι περνάει από μια προσεκτική διαδικασία για να διασφαλιστεί η ποιότητα και η μοναδικότητά του.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="glass-panel rounded-xl p-8 text-center">
                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-primary/10 text-primary text-2xl font-bold mx-auto mb-6">
                  1
                </div>
                <h3 className="text-xl font-semibold mb-3">
                  Σχεδιασμός & Έμπνευση
                </h3>
                <p className="text-muted-foreground">
                  Κάθε κομμάτι ξεκινά με ένα σκίτσο εμπνευσμένο από την ελληνική κληρονομιά, τη φύση ή τις σύγχρονες τάσεις. Τα σχέδια εξελίσσονται για να ισορροπήσουν την αισθητική και τη λειτουργικότητα.
                </p>
              </div>
              
              <div className="glass-panel rounded-xl p-8 text-center">
                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-primary/10 text-primary text-2xl font-bold mx-auto mb-6">
                  2
                </div>
                <h3 className="text-xl font-semibold mb-3">
                  Επιλογή Υλικών
                </h3>
                <p className="text-muted-foreground">
                  Επιλέγονται μόνο τα καλύτερα υλικά, από τοπικά προμηθευόμενο δέρμα μέχρι ηθικά αποκτημένα μέταλλα και πολύτιμους λίθους, διασφαλίζοντας την ποιότητα και τη βιωσιμότητα.
                </p>
              </div>
              
              <div className="glass-panel rounded-xl p-8 text-center">
                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-primary/10 text-primary text-2xl font-bold mx-auto mb-6">
                  3
                </div>
                <h3 className="text-xl font-semibold mb-3">
                  Χειροτεχνία
                </h3>
                <p className="text-muted-foreground">
                  Χρησιμοποιώντας παραδοσιακές τεχνικές που έχουν περάσει από γενιά σε γενιά, κάθε κομμάτι δημιουργείται προσεκτικά στο χέρι, εξασφαλίζοντας προσοχή στη λεπτομέρεια και μοναδικότητα.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Values Section */}
        <div 
          className="container mx-auto px-4 md:px-6 py-24"
          ref={el => sectionRefs.current[2] = el}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center reveal-on-scroll">
            <div>
              <h2 className="text-3xl font-display font-semibold mb-6">
                Οι Αξίες μας
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    Ποιοτική Χειροτεχνία
                  </h3>
                  <p className="text-muted-foreground">
                    Κάθε κομμάτι δημιουργείται με εξαιρετική προσοχή στη λεπτομέρεια, εξασφαλίζοντας ανθεκτικότητα και ομορφιά που αντέχει στο χρόνο.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    Βιώσιμες Πρακτικές
                  </h3>
                  <p className="text-muted-foreground">
                    Ελαχιστοποιούμε τα απόβλητα και δίνουμε προτεραιότητα σε φιλικά προς το περιβάλλον υλικά, δημιουργώντας κομμάτια που σέβονται το περιβάλλον.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    Πολιτιστική Κληρονομιά
                  </h3>
                  <p className="text-muted-foreground">
                    Τα σχέδιά μας τιμούν τις ελληνικές παραδόσεις ενώ αγκαλιάζουν τη σύγχρονη αισθητική, δημιουργώντας κομμάτια που αφηγούνται μια ιστορία.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    Προσωπική Σύνδεση
                  </h3>
                  <p className="text-muted-foreground">
                    Πιστεύουμε στη δημιουργία μιας ουσιαστικής σύνδεσης μεταξύ των πελατών μας και των χειροποίητων κομματιών τους.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-square rounded-xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1611591440569-9e449a1f6211" 
                  alt="Τεχνίτης στην εργασία" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-48 h-48 rounded-xl overflow-hidden border-4 border-white shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1626753596082-6c8cf3098977" 
                  alt="Χειροποίητη λεπτομέρεια" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
