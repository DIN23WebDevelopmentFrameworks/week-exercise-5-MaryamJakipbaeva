import React from 'react';
import RecipeTag from './RecipeTag';

function RecipeTagList({ tagList, onSelectTag }) {
  return (
    <div>
      <h2>Select a Recipe Tag</h2>
      <div>
        {tagList.map((tag) => (
          <RecipeTag key={tag} tagName={tag} onSelectTag={onSelectTag} />
        ))}
      </div>
    </div>
  );
}

export default RecipeTagList;
