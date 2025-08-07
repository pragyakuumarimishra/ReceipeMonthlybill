import React, { useContext } from 'react';
import { MealPlanContext } from '../context/MealPlanContext';

const ShoppingList: React.FC = () => {
    const { mealPlan } = useContext(MealPlanContext);

    const generateShoppingList = () => {
        const shoppingList: { [key: string]: number } = {};

        mealPlan.forEach(item => {
            item.ingredients.forEach(ingredient => {
                if (shoppingList[ingredient]) {
                    shoppingList[ingredient] += 1;
                } else {
                    shoppingList[ingredient] = 1;
                }
            });
        });

        return shoppingList;
    };

    const shoppingList = generateShoppingList();

    return (
        <div>
            <h2>Shopping List</h2>
            <ul>
                {Object.entries(shoppingList).map(([ingredient, quantity]) => (
                    <li key={ingredient}>
                        {ingredient} - {quantity}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ShoppingList;