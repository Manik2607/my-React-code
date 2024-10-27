import React, { useState, useEffect, createContext, useContext } from 'react';
import axios from 'axios';

// Create the ProductContext
const ProductContext = createContext();

// Custom hook to use the ProductContext
const useProductContext = () => useContext(ProductContext);

// Main App Component
const App = () => {
  return (
    <ProductProvider>
      <div style={{ textAlign: 'center', padding: '20px' }}>
        <h1>Fictional Online Store</h1>
        <CategoryFilter />
        <PriceFilter />
        <ProductList />
      </div>
    </ProductProvider>
  );
};

// Provider component to manage the context state
const ProductProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [priceRange, setPriceRange] = useState([0, 1000]);

  // Fetch categories from an API endpoint
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        // Replace with an actual API call
        const response = await axios.get('https://fakestoreapi.com/products/categories');
        setCategories(['All', ...response.data]);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };
    fetchCategories();
  }, []);

  // Fetch products from an API endpoint
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        // Replace with an actual API call
        const response = await axios.get('https://fakestoreapi.com/products');
        setProducts(response.data);
        setFilteredProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
    fetchProducts();
  }, []);

  // Filter products based on category and price range
  useEffect(() => {
    let filtered = products;

    if (selectedCategory !== 'All') {
      filtered = filtered.filter((product) => product.category === selectedCategory);
    }

    filtered = filtered.filter(
      (product) => product.price >= priceRange[0] && product.price <= priceRange[1]
    );

    setFilteredProducts(filtered);
  }, [selectedCategory, priceRange, products]);

  return (
    <ProductContext.Provider
      value={{
        categories,
        filteredProducts,
        selectedCategory,
        setSelectedCategory,
        priceRange,
        setPriceRange,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

// Component to display category filter
const CategoryFilter = () => {
  const { categories, selectedCategory, setSelectedCategory } = useProductContext();

  return (
    <div>
      <h3>Filter by Category</h3>
      <select
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
      >
        {categories.map((category) => (
          <option key={category} value={category}>
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </option>
        ))}
      </select>
    </div>
  );
};

// Component to display price range filter
const PriceFilter = () => {
  const { priceRange, setPriceRange } = useProductContext();

  const handlePriceChange = (min, max) => {
    setPriceRange([min, max]);
  };

  return (
    <div style={{ marginTop: '20px' }}>
      <h3>Filter by Price</h3>
      <label>
        Min Price:
        <input
          type="number"
          value={priceRange[0]}
          onChange={(e) => handlePriceChange(Number(e.target.value), priceRange[1])}
          style={{ marginLeft: '10px', width: '80px' }}
        />
      </label>
      <label style={{ marginLeft: '20px' }}>
        Max Price:
        <input
          type="number"
          value={priceRange[1]}
          onChange={(e) => handlePriceChange(priceRange[0], Number(e.target.value))}
          style={{ marginLeft: '10px', width: '80px' }}
        />
      </label>
    </div>
  );
};

// Component to display list of products
const ProductList = () => {
  const { filteredProducts } = useProductContext();

  return (
    <div style={{ marginTop: '30px' }}>
      <h3>Products</h3>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            style={{
              border: '1px solid #ddd',
              borderRadius: '5px',
              padding: '10px',
              margin: '10px',
              width: '200px',
              textAlign: 'left',
            }}
          >
            <img
              src={product.image}
              alt={product.title}
              style={{ width: '100%', height: '150px', objectFit: 'cover' }}
            />
            <h4>{product.title}</h4>
            <p>Category: {product.category}</p>
            <p>Price: ${product.price.toFixed(2)}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
