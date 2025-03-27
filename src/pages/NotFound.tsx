
import { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="flex flex-col items-center justify-center min-h-[80vh] px-4">
        <div className="text-center max-w-md mx-auto">
          <h1 className="text-8xl font-display font-bold text-primary mb-4">404</h1>
          <h2 className="text-2xl font-semibold mb-4">Η Σελίδα Δεν Βρέθηκε</h2>
          <p className="text-muted-foreground mb-8">
            Λυπούμαστε, η σελίδα που ζητήσατε δεν βρέθηκε. Παρακαλούμε ελέγξτε τη διεύθυνση URL ή επιστρέψτε στην αρχική σελίδα.
          </p>
          <Link 
            to="/" 
            className="px-6 py-3 rounded-full bg-primary text-white font-medium transition-all hover:bg-primary/90 hover:scale-105"
          >
            Επιστροφή στην Αρχική
          </Link>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default NotFound;
