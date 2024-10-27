import React, { useState, useEffect } from 'react';

// Mock API endpoint URL
const API_URL = 'https://example.com/api/products';

const App = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  // Fetch products from the API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) throw new Error('Failed to fetch products');
        
        const data = await response.json();
        setProducts(data);
      } catch (err) {
        setError(err.message);
      }
    };
    
    fetchProducts();
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h1 style={{ textAlign: 'center' }}>Product List</h1>
      
      {error ? (
        <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>
      ) : (
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '20px',
        }}>
          {products.map((product) => (
            <div key={product.id} style={{
              border: '1px solid #ddd',
              borderRadius: '8px',
              padding: '20px',
              textAlign: 'center',
            }}>
              <h2>{product.name}</h2>
              <p>{product.description}</p>
              <p><strong>${product.price.toFixed(2)}</strong></p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default App;
