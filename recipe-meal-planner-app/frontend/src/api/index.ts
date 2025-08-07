import axios from 'axios';

const API_URL = 'http://localhost:5000/api'; // Adjust the URL as needed

// User authentication
export const registerUser = async (userData) => {
    const response = await axios.post(`${API_URL}/register`, userData);
    return response.data;
};

export const loginUser = async (credentials) => {
    const response = await axios.post(`${API_URL}/login`, credentials);
    return response.data;
};

// Recipe management
export const fetchRecipes = async () => {
    const response = await axios.get(`${API_URL}/recipes`);
    return response.data;
};

export const saveRecipe = async (recipeData) => {
    const response = await axios.post(`${API_URL}/recipes`, recipeData);
    return response.data;
};

// Meal plan management
export const fetchMealPlan = async (userId) => {
    const response = await axios.get(`${API_URL}/mealplan/${userId}`);
    return response.data;
};

export const saveMealPlan = async (mealPlanData) => {
    const response = await axios.post(`${API_URL}/mealplan`, mealPlanData);
    return response.data;
};

// User favorites
export const fetchUserFavorites = async (userId) => {
    const response = await axios.get(`${API_URL}/user/favorites/${userId}`);
    return response.data;
};

export const saveUserFavorite = async (favoriteData) => {
    const response = await axios.post(`${API_URL}/user/favorites`, favoriteData);
    return response.data;
};