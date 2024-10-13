// src/RecipeTag.tsx

import React from 'react';
import { IRecipeTagProps } from './types';

const RecipeTag: React.FC<IRecipeTagProps> = ({ tagName, onSelectTag }) => {
  return (
    <div onClick={() => onSelectTag(tagName)} style={{ cursor: 'pointer', margin: '5px', padding: '5px', border: '1px solid black', display: 'inline-block' }}>
      {tagName}
    </div>
  );
};

export default RecipeTag;

