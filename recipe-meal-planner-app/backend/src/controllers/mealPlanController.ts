import { Request, Response } from 'express';
import { MealPlan } from '../models/mealPlan';

// Create a new meal plan
export const createMealPlan = async (req: Request, res: Response) => {
    const { userId, recipeId, date } = req.body;

    try {
        const newMealPlan = await MealPlan.create({ userId, recipeId, date });
        res.status(201).json(newMealPlan);
    } catch (error) {
        res.status(500).json({ message: 'Error creating meal plan', error });
    }
};

// Get meal plans for a user
export const getMealPlans = async (req: Request, res: Response) => {
    const { userId } = req.params;

    try {
        const mealPlans = await MealPlan.findAll({ where: { userId } });
        res.status(200).json(mealPlans);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving meal plans', error });
    }
};

// Delete a meal plan
export const deleteMealPlan = async (req: Request, res: Response) => {
    const { id } = req.params;

    try {
        const deletedMealPlan = await MealPlan.destroy({ where: { id } });
        if (deletedMealPlan) {
            res.status(204).send();
        } else {
            res.status(404).json({ message: 'Meal plan not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error deleting meal plan', error });
    }
};