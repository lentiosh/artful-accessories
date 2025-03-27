
import { useState, useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { toast } from '@/components/ui/use-toast';
import { Phone, Mail, MapPin, Send } from 'lucide-react';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Το μήνυμα εστάλη!",
        description: "Ευχαριστούμε για το μήνυμά σας. Θα επικοινωνήσουμε μαζί σας σύντομα.",
      });
      
      setName('');
      setEmail('');
      setMessage('');
      setIsSubmitting(false);
    }, 1000);
  };
  
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-28 pb-20">
        <div className="container mx-auto px-4 md:px-6">
          {/* Contact Header */}
          <div className="text-center mb-16">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-semibold mb-4">
              Επικοινωνήστε μαζί μας
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Έχετε κάποια ερώτηση για ένα προϊόν ή ενδιαφέρεστε να κάνετε μια παραγγελία; Θα χαρούμε να ακούσουμε από εσάς.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Contact Information */}
            <div className="space-y-8">
              <div className="glass-panel rounded-xl p-8">
                <h2 className="text-2xl font-display font-semibold mb-6">
                  Στοιχεία Επικοινωνίας
                </h2>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <Phone className="w-5 h-5 text-primary mt-1" />
                    <div>
                      <h3 className="font-medium">Τηλέφωνο</h3>
                      <a 
                        href="tel:+306912345678" 
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        +30 691 234 5678
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <Mail className="w-5 h-5 text-primary mt-1" />
                    <div>
                      <h3 className="font-medium">Email</h3>
                      <a 
                        href="mailto:hello@artfulcrafts.com" 
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        hello@artfulcrafts.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <MapPin className="w-5 h-5 text-primary mt-1" />
                    <div>
                      <h3 className="font-medium">Τοποθεσία Εργαστηρίου</h3>
                      <p className="text-muted-foreground">
                        Αθήνα, Ελλάδα
                      </p>
                      <p className="text-sm text-muted-foreground mt-1">
                        (Επισκέψεις μόνο κατόπιν ραντεβού)
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-accent rounded-xl p-8">
                <h2 className="text-2xl font-display font-semibold mb-4">
                  Ώρες Λειτουργίας
                </h2>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Δευτέρα - Παρασκευή</span>
                    <span className="font-medium">10:00 - 18:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Σάββατο</span>
                    <span className="font-medium">10:00 - 16:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Κυριακή</span>
                    <span className="font-medium">Κλειστά</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="glass-panel rounded-xl p-8">
              <h2 className="text-2xl font-display font-semibold mb-6">
                Στείλτε μας Μήνυμα
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-sm font-medium">
                    Το Όνομά σας
                  </label>
                  <input
                    id="name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-3 rounded-md border border-border bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                    placeholder="Εισάγετε το όνομά σας"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-medium">
                    Διεύθυνση Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 rounded-md border border-border bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                    placeholder="Εισάγετε το email σας"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="block text-sm font-medium">
                    Μήνυμα
                  </label>
                  <textarea
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows={6}
                    className="w-full px-4 py-3 rounded-md border border-border bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                    placeholder="Εισάγετε το μήνυμά σας"
                    required
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex items-center justify-center w-full space-x-2 px-6 py-3 rounded-md bg-primary text-white font-medium transition-all hover:bg-primary/90 disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <div className="w-5 h-5 rounded-full border-2 border-white border-t-transparent animate-spin"></div>
                  ) : (
                    <>
                      <Send size={18} />
                      <span>Αποστολή Μηνύματος</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contact;
