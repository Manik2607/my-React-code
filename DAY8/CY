import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

// Custom Hook to manage favorites
const useFavorites = () => {
  const [favorites, setFavorites] = useState(() => {
    // Load favorites from local storage on initial render
    const savedFavorites = localStorage.getItem('favorites');
    return savedFavorites ? JSON.parse(savedFavorites) : [];
  });

  const addFavorite = (recipe) => {
    setFavorites((prevFavorites) => {
      const updatedFavorites = [...prevFavorites, recipe];
      localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
      return updatedFavorites;
    });
  };

  const removeFavorite = (recipeId) => {
    setFavorites((prevFavorites) => {
      const updatedFavorites = prevFavorites.filter(recipe => recipe.id !== recipeId);
      localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
      return updatedFavorites;
    });
  };

  return { favorites, addFavorite, removeFavorite };
};

// Recipe component
const Recipe = ({ recipe, onAddFavorite }) => (
  <div>
    <h3>{recipe.name}</h3>
    <button onClick={() => onAddFavorite(recipe)}>Add to Favorites</button>
  </div>
);

// Favorites component
const Favorites = ({ favorites, onRemoveFavorite }) => (
  <div>
    <h2>Your Favorites</h2>
    {favorites.length === 0 ? (
      <p>No favorite recipes yet.</p>
    ) : (
      <ul>
        {favorites.map(recipe => (
          <li key={recipe.id}>
            {recipe.name}
            <button onClick={() => onRemoveFavorite(recipe.id)}>Remove</button>
          </li>
        ))}
      </ul>
    )}
  </div>
);

// App component
const App = () => {
  const { favorites, addFavorite, removeFavorite } = useFavorites();
  const [recipes] = useState([
    { id: 1, name: 'Spaghetti Bolognese' },
    { id: 2, name: 'Chicken Curry' },
    { id: 3, name: 'Vegetable Stir Fry' }
  ]);

  return (
    <div>
      <h1>Recipe Finder</h1>
      <h2>Available Recipes</h2>
      {recipes.map(recipe => (
        <Recipe key={recipe.id} recipe={recipe} onAddFavorite={addFavorite} />
      ))}
      <Favorites favorites={favorites} onRemoveFavorite={removeFavorite} />
    </div>
  );
};

// Render the App
const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
