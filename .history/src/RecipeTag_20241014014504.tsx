import React from 'react';

function RecipeTag({ tagName, onSelectTag }) {
  return (
    <button onClick={() => onSelectTag(tagName)}>{tagName}</button>
  );
}

export default RecipeTag;


