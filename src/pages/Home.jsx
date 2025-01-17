import { useProducts } from "../context/ProductsContext";
import ProductCard from "../components/ProductCard"


function Home() {
  const { products, fetchProductsByCategory, fetchProducts, categories, error, activeCategory, setActiveCategory } = useProducts();

  const handleCategorySelect = (category) => {
    if (activeCategory === category) {
      setActiveCategory(null);
      fetchProducts(); 
    } else {
      setActiveCategory(category);
      fetchProductsByCategory(category); 
    }
  };
  
  return (
    <div className="flex flex-col w-10/12 mx-auto">
      <div className="flex my-24 bg-[#f2f2f2] w-fit mx-auto rounded-lg">
      {categories.map(category => (
        <button
        key={category}
        className={`btn ${
          activeCategory === category ? "btn-primary" : ""
        }`}
        onClick={() => handleCategorySelect(category)}
      >
        {category}
      </button>
      ))}
      </div>
      {error && (
        <div style={{ color: "red", marginBottom: "20px" }}>
          <strong>Error:</strong> {error}
        </div>
      )}
      
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-32">
        {products.map((product) => 
        <ProductCard key={product.id} product={product} handleCategorySelect={handleCategorySelect} />
        )}
        </div>
     
    </div>
  );
}

export default Home;