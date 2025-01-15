import { useState } from "react"
import { useProducts } from "../context/ProductsContext";
import ProductCard from "../components/ProductCard"


function Home() {
  const { products, fetchProductsByCategory, fetchProducts, categories, error } = useProducts();
  const [activeCategory, setActiveCategory] = useState();

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
    <div className="flex flex-col w-11/12 mx-auto mt-16">
      <div className="flex gap-5 my-5">
      {categories.map(category => (
        <button
        key={category}
        className={`btn btn-outline btn-secondary ${
          activeCategory === category ? "btn-active" : ""
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
      
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-32">
        {products.map((product) => 
        <ProductCard key={product.id} product={product} />
        )}
        </div>
     
    </div>
  );
}

export default Home;