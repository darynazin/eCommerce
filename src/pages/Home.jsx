import { useProducts } from '../context/ProductsContext';

function Home() {
  const { products, fetchProductsByCategory, error } = useProducts();

  const handleCategorySelect = (category) => {
    fetchProductsByCategory(category);
  };

  console.log(products)

  return (
    <div>
      <button onClick={() => handleCategorySelect('electronics')}>electronics</button>
      <button onClick={() => handleCategorySelect('jewelery')}>jewelery</button>
      <button onClick={() => handleCategorySelect("men's clothing")}>men's clothing</button>
      <button onClick={() => handleCategorySelect("women's clothing")}>women's clothing</button>
      {error && (
        <div style={{ color: 'red', marginBottom: '20px' }}>
          <strong>Error:</strong> {error}
        </div>
      )}
      <ul>
        {products.map((product) => (
          <li key={product.id}>{product.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
