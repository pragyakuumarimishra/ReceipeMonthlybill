import React from 'react';

interface RecipeCardProps {
    title: string;
    ingredients: string[];
    instructions: string;
    imageUrl: string;
}

const RecipeCard: React.FC<RecipeCardProps> = ({ title, ingredients, instructions, imageUrl }) => {
    return (
        <div className="recipe-card">
            <img src={imageUrl} alt={title} className="recipe-image" />
            <h2 className="recipe-title">{title}</h2>
            <h3>Ingredients:</h3>
            <ul className="ingredients-list">
                {ingredients.map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                ))}
            </ul>
            <h3>Instructions:</h3>
            <p className="recipe-instructions">{instructions}</p>
        </div>
    );
};

export default RecipeCard;