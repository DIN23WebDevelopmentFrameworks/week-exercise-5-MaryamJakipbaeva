// src/Recipe.tsx

import React from 'react';
import { IRecipeProps } from './types';

const Recipe: React.FC<IRecipeProps> = ({ recipeData }) => {
  const { name, ingredients, instructions } = recipeData;

  return (
    <div style={{ border: '1px solid black', margin: '10px', padding: '10px' }}>
      <h2>{name}</h2>
      <h3>Ingredients:</h3>
      <ul>
        {ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <h3>Instructions:</h3>
      <ol>
        {instructions.map((instruction, index) => (
          <li key={index}>{instruction}</li>
        ))}
      </ol>
    </div>
  );
};

export default Recipe;

