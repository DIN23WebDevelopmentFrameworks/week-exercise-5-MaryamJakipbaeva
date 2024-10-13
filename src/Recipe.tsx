import React from 'react';

function Recipe({ recipeData }) {
  const {
    name,
    ingredients,
    instructions,
    prepTimeMinutes,
    cookTimeMinutes,
    servings,
    difficulty,
    cuisine,
    caloriesPerServing,
    image,
    rating,
    reviewCount,
    mealType
  } = recipeData;

  return (
    <div className="recipe-card">
      <h3>{name}</h3>
      <img src={image} alt={name} />
      <p><strong>Prep Time:</strong> {prepTimeMinutes} mins</p>
      <p><strong>Cook Time:</strong> {cookTimeMinutes} mins</p>
      <p><strong>Servings:</strong> {servings}</p>
      <p><strong>Difficulty:</strong> {difficulty}</p>
      <p><strong>Cuisine:</strong> {cuisine}</p>
      <p><strong>Calories per Serving:</strong> {caloriesPerServing}</p>
      <p><strong>Rating:</strong> {rating} ({reviewCount} reviews)</p>
      <p><strong>Meal Type:</strong> {mealType.join(', ')}</p>
      <h4>Ingredients:</h4>
      <ul>
        {ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <h4>Instructions:</h4>
      <ol>
        {instructions.map((instruction, index) => (
          <li key={index}>{instruction}</li>
        ))}
      </ol>
    </div>
  );
}

export default Recipe;
