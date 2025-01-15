import { useProducts } from "../context/ProductsContext";
import ProductCard from "../components/ProductCard"


function Home() {
  const { products, fetchProductsByCategory, error } = useProducts();

  const handleCategorySelect = (category) => {
    fetchProductsByCategory(category);
  };

  console.log(products);

  return (
    <div className="flex flex-col ">
      <div>
      <button className="btn btn-outline btn-secondary" onClick={() => handleCategorySelect("electronics")}>electronics</button>
      <button className="btn btn-outline btn-secondary" onClick={() => handleCategorySelect("jewelery")}>jewelery</button>
      <button className="btn btn-outline btn-secondary" onClick={() => handleCategorySelect("men's clothing")}>men's clothing</button>
      <button className="btn btn-outline btn-secondary" onClick={() => handleCategorySelect("women's clothing")}>women's clothing</button>
      </div>
      {error && (
        <div style={{ color: "red", marginBottom: "20px" }}>
          <strong>Error:</strong> {error}
        </div>
      )}
      
        {products.map((product) => 
        <ProductCard key={product.id} product={product} />
        )}
     
    </div>
  );
}

export default Home;
