import React from 'react';

const RecipeTag = ({ tagName, onSelectTag }) => {
  return (
    <div onClick={() => onSelectTag(tagName)}>
      {tagName}
    </div>
  );
};

export default RecipeTag;
