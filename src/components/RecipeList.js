import React from 'react';
import RecipeCard from './RecipeCard';

function RecipeList({ recipes }) {
  return (
    <div className="recipe-list">
      {recipes.map((item, index) => (
        <RecipeCard key={index} recipe={item.recipe} />
      ))}
    </div>
  );
}

export default RecipeList;
