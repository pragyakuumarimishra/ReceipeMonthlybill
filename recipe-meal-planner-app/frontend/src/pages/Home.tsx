import React from 'react';
import Header from '../components/Header';
import RecipeCard from '../components/RecipeCard';

const Home: React.FC = () => {
    return (
        <div>
            <Header />
            <h1>Welcome to the Recipe and Meal Planner</h1>
            <p>Discover new recipes and plan your meals for the week!</p>
            <div className="recipe-list">
                {/* Example Recipe Cards - Replace with dynamic data later */}
                <RecipeCard title="Spaghetti Bolognese" />
                <RecipeCard title="Chicken Curry" />
                <RecipeCard title="Vegetable Stir Fry" />
            </div>
        </div>
    );
};

export default Home;