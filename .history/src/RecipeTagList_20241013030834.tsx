// RecipeTagList.tsx
import React from 'react';
import RecipeTag from './RecipeTag';

interface RecipeTagListProps {
  tagList: string[];
  onSelectTag: (tag: string) => void;
}

const RecipeTagList: React.FC<RecipeTagListProps> = ({ tagList, onSelectTag }) => {
  if (!tagList) return null; // Add a null check to prevent the error
  return (
    <div>
      {tagList.map((tag) => (
        <RecipeTag key={tag} tagName={tag} onSelectTag={onSelectTag} />
      ))}
    </div>
  );
};

export default RecipeTagList;


export default RecipeTagList;
