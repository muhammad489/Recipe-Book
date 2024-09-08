import React, { useState } from 'react';
import axios from 'axios';
import SearchForm from './components/SearchForm';
import RecipeList from './components/RecipeList';
import './App.css';

const API_ID = '57148102';
const API_KEY = '4960b59ac07bcfe6a35170b3b3fd6c9a';
const API_URL = `https://api.edamam.com/search?q=`;

function App() {
  const [recipes, setRecipes] = useState([]);
  const [query, setQuery] = useState('');

  const fetchRecipes = async (query) => {
    try {
      const response = await axios.get(`${API_URL}${query}&app_id=${API_ID}&app_key=${API_KEY}`);
      setRecipes(response.data.hits);
    } catch (error) {
      console.error('Error fetching the recipes:', error);
    }
  };

  const handleSearch = (query) => {
    setQuery(query);
    fetchRecipes(query);
  };

  return (
    <div className="App">
      <h1>Recipe Finder</h1>
      <SearchForm onSearch={handleSearch} />
      <RecipeList recipes={recipes} />
    </div>
  );
}

export default App;
