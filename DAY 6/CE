// reactapp/src/App.js
import React from 'react';

// ProductList component that displays a list of products
const ProductList = ({ products }) => {
  return (
    <div>
      <h2>Product List</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {products.map((product, index) => (
          <div key={index} style={{ border: '1px solid #ccc', padding: '10px', margin: '10px', width: '150px' }}>
            <img src={product.imageUrl} alt={product.name} style={{ width: '100%', height: '100px' }} />
            <h4>{product.name}</h4>
            <p>Price: ${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

// Higher-Order Component (HOC) that provides the product list to ProductList
const withProducts = (WrappedComponent, productList) => {
  return (props) => <WrappedComponent products={productList} {...props} />;
};

// Sample product data
const electronics = [
  { name: 'Laptop', price: 1000, imageUrl: 'https://via.placeholder.com/150' },
  { name: 'Headphones', price: 100, imageUrl: 'https://via.placeholder.com/150' },
];

const groceries = [
  { name: 'Apple', price: 2, imageUrl: 'https://via.placeholder.com/150' },
  { name: 'Banana', price: 1, imageUrl: 'https://via.placeholder.com/150' },
];

// Wrapped components using the HOC
const ElectronicsProductList = withProducts(ProductList, electronics);
const GroceryProductList = withProducts(ProductList, groceries);

// Main App component
const App = () => {
  return (
    <div>
      <h1>Product Store</h1>
      <ElectronicsProductList />
      <GroceryProductList />
    </div>
  );
};

export default App;
