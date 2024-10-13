// src/RecipeList.js

import React from 'react';
import Recipe from './Recipe';

const RecipeList = ({ recipes, onBack }) => {
  return (
    <div>
      <button onClick={onBack}>Back to Tag List</button>
      {recipes.map(recipe => (
        <Recipe key={recipe.id} recipeData={recipe} />
      ))}
    </div>
  );
};

export default RecipeList;


