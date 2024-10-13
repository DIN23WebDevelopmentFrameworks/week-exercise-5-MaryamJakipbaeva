import React from 'react';
import { IRecipe } from './types';
import Recipe from './Recipe';

interface IRecipeListProps {
    recipes: IRecipe[];
    onBack: () => void;
}

const RecipeList: React.FC<IRecipeListProps> = ({ recipes }) => {
    return (
        <div>
            {recipes.map(recipe => (
                <Recipe key={recipe.id} recipeData={recipe} />
            ))}
        </div>
    );
};

export default RecipeList;


