// src/Recipe.js

import React from 'react';

const Recipe = ({ recipeData }) => {
  return (
    <div>
      <h2>{recipeData.name}</h2>
      <img src={recipeData.image} alt={recipeData.name} />
      <p><strong>Ingredients:</strong></p>
      <ul>
        {recipeData.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <p><strong>Instructions:</strong></p>
      <ol>
        {recipeData.instructions.map((instruction, index) => (
          <li key={index}>{instruction}</li>
        ))}
      </ol>
    </div>
  );
};

export default Recipe;


