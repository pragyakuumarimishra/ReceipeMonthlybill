import React, { createContext, useContext, useState, ReactNode } from 'react';

interface MealPlan {
    id: number;
    userId: number;
    recipeId: number;
    date: string;
}

interface MealPlanContextType {
    mealPlans: MealPlan[];
    addMealPlan: (mealPlan: MealPlan) => void;
    removeMealPlan: (id: number) => void;
}

const MealPlanContext = createContext<MealPlanContextType | undefined>(undefined);

export const MealPlanProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [mealPlans, setMealPlans] = useState<MealPlan[]>([]);

    const addMealPlan = (mealPlan: MealPlan) => {
        setMealPlans((prev) => [...prev, mealPlan]);
    };

    const removeMealPlan = (id: number) => {
        setMealPlans((prev) => prev.filter((mealPlan) => mealPlan.id !== id));
    };

    return (
        <MealPlanContext.Provider value={{ mealPlans, addMealPlan, removeMealPlan }}>
            {children}
        </MealPlanContext.Provider>
    );
};

export const useMealPlan = () => {
    const context = useContext(MealPlanContext);
    if (context === undefined) {
        throw new Error('useMealPlan must be used within a MealPlanProvider');
    }
    return context;
};