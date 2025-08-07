import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import { fetchFavorites } from '../api';

const Favorites = () => {
    const { user } = useContext(AuthContext);
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        const getFavorites = async () => {
            if (user) {
                const data = await fetchFavorites(user.id);
                setFavorites(data);
            }
        };
        getFavorites();
    }, [user]);

    return (
        <div className="favorites-page">
            <h1>Your Favorite Recipes</h1>
            {favorites.length === 0 ? (
                <p>You have no favorite recipes yet.</p>
            ) : (
                <ul>
                    {favorites.map((recipe) => (
                        <li key={recipe.id}>
                            <h2>{recipe.title}</h2>
                            <p>{recipe.ingredients.join(', ')}</p>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Favorites;