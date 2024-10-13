import React, { useState, useEffect } from 'react';
import RecipeTagList from './RecipeTagList';
import RecipeList from './RecipeList';

const App = () => {
  const [tags, setTags] = useState([]);
  const [selectedTag, setSelectedTag] = useState('');
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch('https://dummyjson.com/recipes/tags')
      .then(response => response.json())
      .then(data => setTags(data.tags));
  }, []);

  useEffect(() => {
    if (selectedTag) {
      fetch(`https://dummyjson.com/recipes/tag/${selectedTag}`)
        .then(response => response.json())
        .then(data => setRecipes(data.recipes));
    }
  }, [selectedTag]);

  const handleSelectTag = (tagName) => {
    setSelectedTag(tagName);
  };

  const handleBack = () => {
    setSelectedTag('');
    setRecipes([]);
  };

  return (
    <div>
      {selectedTag ? (
        <div>
          <button onClick={handleBack}>Back to Tags</button>
          <RecipeList recipes={recipes} />
        </div>
      ) : (
        <RecipeTagList tagList={tags} onSelectTag={handleSelectTag} />
      )}
    </div>
  );
};



export default App;
