import { Router } from 'express';
import { createMealPlan, getMealPlans, deleteMealPlan } from '../controllers/mealPlanController';
import authenticate from '../middleware/authMiddleware';

const router = Router();

// Route to create a new meal plan
router.post('/', authenticate, createMealPlan);

// Route to get all meal plans for the authenticated user
router.get('/', authenticate, getMealPlans);

// Route to delete a meal plan by ID
router.delete('/:id', authenticate, deleteMealPlan);

export default router;