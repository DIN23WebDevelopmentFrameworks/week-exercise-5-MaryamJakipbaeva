// src/App.tsx

import React, { useEffect, useState } from 'react';
import RecipeTagList from './RecipeTagList';
import RecipeList from './RecipeList';
import { IRecipe } from './types';

const App: React.FC = () => {
    const [tags, setTags] = useState<string[]>([]);
    const [recipes, setRecipes] = useState<IRecipe[]>([]);
    const [selectedTag, setSelectedTag] = useState<string | null>(null);

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

    const handleSelectTag = (tagName: string) => {
        setSelectedTag(tagName);
    };

    const handleBackToTags = () => {
        setSelectedTag(null);
    };

    return (
        <div>
           <h1>ACME Recipe O'Master</h1>
            {selectedTag ? (
                <div>
                    <button onClick={handleBackToTags}>Back to Tags</button>
                    <RecipeList recipes={recipes} />
                </div>
            ) : (
                <RecipeTagList tagList={tags} onSelectTag={handleSelectTag} />
            )}
        </div>
    );
};

export default App;
