import React, { useState, useEffect } from 'react';
import RecipeTagList from './RecipeTagList';
import RecipeList from './RecipeList';

function App() {
  const [tags, setTags] = useState([]);
  const [selectedTag, setSelectedTag] = useState(null);
  const [recipes, setRecipes] = useState([]);

  // Fetch the recipe tags when the component loads
  useEffect(() => {
    fetch('https://dummyjson.com/recipes/tags')
      .then((res) => res.json())
      .then((data) => setTags(data))
      .catch((err) => console.error(err));
  }, []);

  // Fetch recipes based on selected tag
  useEffect(() => {
    if (selectedTag) {
      fetch(`https://dummyjson.com/recipes/tag/${selectedTag}`)
        .then((res) => res.json())
        .then((data) => setRecipes(data.recipes))
        .catch((err) => console.error(err));
    }
  }, [selectedTag]);

  const handleTagClick = (tag) => {
    setSelectedTag(tag);
  };

  const handleBackClick = () => {
    setSelectedTag(null);
  };

  return (
    <div>
      <h1>ACME Recipe O'Master</h1>
      {selectedTag ? (
        <div>
          <button onClick={handleBackClick}>Back to Tags</button>
          <RecipeList recipes={recipes} />
        </div>
      ) : (
        <RecipeTagList tagList={tags} onSelectTag={handleTagClick} />
      )}
    </div>
  );
}

export default App;
