// src/RecipeTagList.tsx

import React from 'react';
import RecipeTag from './RecipeTag';
import { IRecipeTagListProps } from './types';

const RecipeTagList: React.FC<IRecipeTagListProps> = ({ tagList, onSelectTag }) => {
  return (
    <div>
      {tagList.map((tag) => (
        <RecipeTag key={tag} tagName={tag} onSelectTag={onSelectTag} />
      ))}
    </div>
  );
};

export default RecipeTagList;
