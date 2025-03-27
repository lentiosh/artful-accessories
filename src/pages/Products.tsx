
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getProductsByCategory } from '@/data/products';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ProductCard from '@/components/ui/ProductCard';
import { toast } from '@/components/ui/use-toast';
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from '@/components/ui/pagination';
import { ChevronDown, Filter } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';

const Products = () => {
  const { category } = useParams<{ category: string }>();
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const [filters, setFilters] = useState({
    sortBy: 'default',
    priceRange: [0, 100],
    materialFilter: 'all',
    newOnly: false
  });
  const [showFilters, setShowFilters] = useState(false);
  
  const itemsPerPage = 6;
  
  useEffect(() => {
    // Validate the category
    if (category !== 'accessories' && category !== 'jewelry') {
      navigate('/');
      toast({
        variant: "destructive",
        title: "Μη έγκυρη κατηγορία",
        description: "Παρακαλώ επιλέξτε κοσμήματα ή αξεσουάρ.",
      });
    }
    
    window.scrollTo(0, 0);
    setCurrentPage(1); // Reset to first page when category changes
  }, [category, navigate]);
  
  const allProducts = category 
    ? getProductsByCategory(category as 'accessories' | 'jewelry')
    : [];
    
  // Apply filters
  const filteredProducts = allProducts.filter(product => {
    // Price filter - extract the numeric price
    const priceNum = parseFloat(product.price.replace('€', ''));
    const priceInRange = priceNum >= filters.priceRange[0] && priceNum <= filters.priceRange[1];
    
    // Material filter
    const materialMatches = filters.materialFilter === 'all' || 
      product.materials.some(m => m.toLowerCase().includes(filters.materialFilter.toLowerCase()));
    
    // New only filter
    const newMatches = !filters.newOnly || product.new;
    
    return priceInRange && materialMatches && newMatches;
  });
  
  // Sort products
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (filters.sortBy === 'price-low-high') {
      return parseFloat(a.price.replace('€', '')) - parseFloat(b.price.replace('€', ''));
    } else if (filters.sortBy === 'price-high-low') {
      return parseFloat(b.price.replace('€', '')) - parseFloat(a.price.replace('€', ''));
    }
    return 0; // default sorting
  });
  
  // Paginate
  const totalPages = Math.ceil(sortedProducts.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedProducts = sortedProducts.slice(startIndex, startIndex + itemsPerPage);
  
  const categoryTitle = category === 'accessories' 
    ? 'Χειροποίητα Αξεσουάρ' 
    : 'Χειροποίητα Κοσμήματα';
  
  const categoryDescription = category === 'accessories'
    ? 'Εξερευνήστε τη συλλογή των χειροποίητων αξεσουάρ μας, κάθε κομμάτι φτιαγμένο με υψηλής ποιότητας υλικά και παραδοσιακές τεχνικές.'
    : 'Ανακαλύψτε τη συλλογή των χειροποίητων κοσμημάτων μας, όπου η παραδοσιακή τεχνική συναντά το σύγχρονο σχέδιο.';
    
  // Common materials for each category to use as filter options
  const commonMaterials = category === 'accessories' 
    ? ['all', 'leather', 'cotton', 'wool', 'linen', 'wood']
    : ['all', 'silver', 'copper', 'brass', 'ceramic', 'glass'];
    
  const materialLabels = {
    'all': 'Όλα τα υλικά',
    'leather': 'Δέρμα',
    'cotton': 'Βαμβάκι',
    'wool': 'Μαλλί',
    'linen': 'Λινό',
    'wood': 'Ξύλο',
    'silver': 'Ασήμι',
    'copper': 'Χαλκός', 
    'brass': 'Ορείχαλκος',
    'ceramic': 'Κεραμικό',
    'glass': 'Γυαλί'
  };
    
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-28 pb-20">
        <div className="container mx-auto px-4 md:px-6">
          {/* Hero Section */}
          <div className="text-center mb-12 md:mb-16">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-semibold mb-4">
              {categoryTitle}
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              {categoryDescription}
            </p>
          </div>
          
          {/* Filters Section */}
          <div className="mb-8">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
              <button 
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center gap-2 text-foreground mb-4 md:mb-0 border px-4 py-2 rounded-md hover:bg-accent transition-colors"
              >
                <Filter size={18} />
                <span>Φίλτρα</span>
                <ChevronDown size={18} className={`transform transition-transform ${showFilters ? 'rotate-180' : ''}`} />
              </button>
              
              <Select 
                value={filters.sortBy} 
                onValueChange={(value) => setFilters({...filters, sortBy: value})}
              >
                <SelectTrigger className="w-[200px]">
                  <SelectValue placeholder="Ταξινόμηση κατά" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="default">Προεπιλογή</SelectItem>
                  <SelectItem value="price-low-high">Τιμή (Αύξουσα)</SelectItem>
                  <SelectItem value="price-high-low">Τιμή (Φθίνουσα)</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            {showFilters && (
              <div className="bg-accent/50 p-6 rounded-lg mb-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="space-y-2">
                  <h3 className="font-medium mb-2">Τιμή (€)</h3>
                  <Slider 
                    defaultValue={[0, 100]} 
                    max={100} 
                    step={1}
                    value={filters.priceRange}
                    onValueChange={(value) => setFilters({...filters, priceRange: value as [number, number]})}
                    className="mb-2"
                  />
                  <div className="flex justify-between">
                    <span>€{filters.priceRange[0]}</span>
                    <span>€{filters.priceRange[1]}</span>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <h3 className="font-medium mb-2">Υλικό</h3>
                  <Select 
                    value={filters.materialFilter} 
                    onValueChange={(value) => setFilters({...filters, materialFilter: value})}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Επιλέξτε υλικό" />
                    </SelectTrigger>
                    <SelectContent>
                      {commonMaterials.map((material) => (
                        <SelectItem key={material} value={material}>
                          {materialLabels[material as keyof typeof materialLabels]}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2 flex items-center">
                  <label className="flex items-center space-x-2 cursor-pointer">
                    <input 
                      type="checkbox" 
                      checked={filters.newOnly} 
                      onChange={(e) => setFilters({...filters, newOnly: e.target.checked})}
                      className="w-4 h-4 rounded border-gray-300 text-primary focus:ring-primary"
                    />
                    <span>Μόνο νέα προϊόντα</span>
                  </label>
                </div>
                
                <div className="flex items-end">
                  <button 
                    className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors"
                    onClick={() => setFilters({
                      sortBy: 'default',
                      priceRange: [0, 100],
                      materialFilter: 'all',
                      newOnly: false
                    })}
                  >
                    Επαναφορά φίλτρων
                  </button>
                </div>
              </div>
            )}
          </div>
          
          {/* Results count */}
          <div className="mb-8">
            <p className="text-muted-foreground">
              {sortedProducts.length === 0 
                ? 'Δεν βρέθηκαν προϊόντα'
                : `Εμφάνιση ${Math.min(startIndex + 1, sortedProducts.length)}-${Math.min(startIndex + itemsPerPage, sortedProducts.length)} από ${sortedProducts.length} προϊόντα`
              }
            </p>
          </div>
          
          {/* Products Grid */}
          {paginatedProducts.length === 0 ? (
            <div className="text-center py-12">
              <h3 className="text-lg font-medium mb-2">Δεν βρέθηκαν προϊόντα</h3>
              <p className="text-muted-foreground">Δοκιμάστε να αλλάξετε τα φίλτρα σας</p>
            </div>
          ) : (
            <div className="product-grid">
              {paginatedProducts.map((product, index) => (
                <div 
                  key={product.id}
                  className="animate-fade-in" 
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <ProductCard product={product} />
                </div>
              ))}
            </div>
          )}
          
          {/* Pagination */}
          {totalPages > 1 && (
            <Pagination className="mt-12">
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious 
                    onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                    className={currentPage === 1 ? 'pointer-events-none opacity-50' : 'cursor-pointer'}
                    aria-disabled={currentPage === 1}
                  />
                </PaginationItem>
                
                {[...Array(totalPages)].map((_, i) => (
                  <PaginationItem key={i}>
                    <PaginationLink 
                      isActive={currentPage === i + 1}
                      onClick={() => setCurrentPage(i + 1)}
                    >
                      {i + 1}
                    </PaginationLink>
                  </PaginationItem>
                ))}
                
                <PaginationItem>
                  <PaginationNext 
                    onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                    className={currentPage === totalPages ? 'pointer-events-none opacity-50' : 'cursor-pointer'}
                    aria-disabled={currentPage === totalPages}
                  />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Products;
