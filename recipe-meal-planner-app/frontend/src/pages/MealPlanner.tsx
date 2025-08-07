import React, { useContext, useEffect } from 'react';
import { MealPlanContext } from '../context/MealPlanContext';
import MealPlanCalendar from '../components/MealPlanCalendar';
import ShoppingList from '../components/ShoppingList';

const MealPlanner = () => {
    const { mealPlans, fetchMealPlans } = useContext(MealPlanContext);

    useEffect(() => {
        fetchMealPlans();
    }, [fetchMealPlans]);

    return (
        <div className="meal-planner">
            <h1>Meal Planner</h1>
            <MealPlanCalendar mealPlans={mealPlans} />
            <ShoppingList mealPlans={mealPlans} />
        </div>
    );
};

export default MealPlanner;