import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header: React.FC = () => {
    return (
        <header className="header">
            <h1 className="header-title">Recipe and Meal Planner</h1>
            <nav className="header-nav">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/recipes">Recipes</Link></li>
                    <li><Link to="/favorites">Favorites</Link></li>
                    <li><Link to="/meal-planner">Meal Planner</Link></li>
                    <li><Link to="/shopping-list">Shopping List</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;