
import { Link } from 'react-router-dom';
import { Mail, Phone, Instagram, Facebook } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-secondary py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link to="/" className="font-display text-2xl font-semibold tracking-tight">
              Artful<span className="text-primary">Crafts</span>
            </Link>
            <p className="text-muted-foreground max-w-xs">
              Χειροποίητα αξεσουάρ και κοσμήματα φτιαγμένα με αγάπη στην Ελλάδα, συνδυάζοντας την παραδοσιακή τεχνική με το σύγχρονο σχέδιο.
            </p>
          </div>
          
          <div className="space-y-4">
            <h3 className="font-medium text-lg">Αγορά</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/products/accessories" className="text-muted-foreground hover:text-primary transition-colors">
                  Αξεσουάρ
                </Link>
              </li>
              <li>
                <Link to="/products/jewelry" className="text-muted-foreground hover:text-primary transition-colors">
                  Κοσμήματα
                </Link>
              </li>
              <li>
                <Link to="/#featured" className="text-muted-foreground hover:text-primary transition-colors">
                  Προτεινόμενα Προϊόντα
                </Link>
              </li>
              <li>
                <Link to="/#new" className="text-muted-foreground hover:text-primary transition-colors">
                  Νέες Αφίξεις
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="font-medium text-lg">Εταιρεία</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  Σχετικά με μας
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Επικοινωνία
                </Link>
              </li>
              <li>
                <Link to="/about#process" className="text-muted-foreground hover:text-primary transition-colors">
                  Η Διαδικασία μας
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="font-medium text-lg">Επικοινωνία</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2">
                <Phone size={18} className="text-primary" />
                <a href="tel:+306912345678" className="text-muted-foreground hover:text-primary transition-colors">
                  +30 691 234 5678
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Mail size={18} className="text-primary" />
                <a href="mailto:hello@artfulcrafts.com" className="text-muted-foreground hover:text-primary transition-colors">
                  hello@artfulcrafts.com
                </a>
              </li>
              <li className="flex items-center space-x-3 pt-3">
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" 
                   className="text-muted-foreground hover:text-primary transition-colors">
                  <Instagram size={20} />
                </a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"
                   className="text-muted-foreground hover:text-primary transition-colors">
                  <Facebook size={20} />
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} ArtfulCrafts. Με επιφύλαξη παντός δικαιώματος.
          </p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <Link to="/privacy" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Πολιτική Απορρήτου
            </Link>
            <Link to="/terms" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Όροι Χρήσης
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
