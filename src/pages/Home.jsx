import { useProducts } from "../context/ProductsContext";
import ProductCard from "../components/ProductCard"


function Home() {
  const { products, fetchProductsByCategory, error } = useProducts();

  const handleCategorySelect = (category) => {
    fetchProductsByCategory(category);
  };

  console.log(products);

  return (
    <div className="flex flex-col w-11/12 mx-auto mt-16">
      <div className="flex gap-5 my-5">
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
      
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
        {products.map((product) => 
        <ProductCard key={product.id} product={product} />
        )}
        </div>
     
    </div>
  );
}

export default Home;
