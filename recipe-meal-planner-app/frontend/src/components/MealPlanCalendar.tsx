import React, { useContext } from 'react';
import { MealPlanContext } from '../context/MealPlanContext';

const MealPlanCalendar: React.FC = () => {
    const { mealPlan, addMeal, removeMeal } = useContext(MealPlanContext);

    const handleAddMeal = (date: string, recipeId: number) => {
        addMeal(date, recipeId);
    };

    const handleRemoveMeal = (date: string, recipeId: number) => {
        removeMeal(date, recipeId);
    };

    return (
        <div className="meal-plan-calendar">
            <h2>Meal Plan Calendar</h2>
            <div className="calendar-grid">
                {Object.keys(mealPlan).map(date => (
                    <div key={date} className="calendar-day">
                        <h3>{date}</h3>
                        <ul>
                            {mealPlan[date].map(meal => (
                                <li key={meal.id}>
                                    {meal.title}
                                    <button onClick={() => handleRemoveMeal(date, meal.id)}>Remove</button>
                                </li>
                            ))}
                        </ul>
                        <button onClick={() => handleAddMeal(date, /* recipeId to add */)}>Add Meal</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MealPlanCalendar;