import React from 'react';
import RecipeTag from './RecipeTag';

interface IRecipeTagListProps {
    tagList: string[];
    onSelectTag: (tagName: string) => void;
}

const RecipeTagList: React.FC<IRecipeTagListProps> = ({ tagList, onSelectTag }) => {
    if (!tagList || tagList.length === 0)
         { return <p> Loading tags... </p>; }
    return (
        <div className='recipe-tag-list'>
            {tagList.map((tag, index) => (
                <RecipeTag key={tag} tagName={tag} onSelectTag={onSelectTag} />
            ))}
        </div>
    );
};

export default RecipeTagList;

