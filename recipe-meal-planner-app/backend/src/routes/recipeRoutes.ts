import { Router } from 'express';
import { 
    getAllRecipes, 
    getRecipeById, 
    createRecipe, 
    updateRecipe, 
    deleteRecipe 
} from '../controllers/recipeController';

const router = Router();

// Route to get all recipes
router.get('/', getAllRecipes);

// Route to get a recipe by ID
router.get('/:id', getRecipeById);

// Route to create a new recipe
router.post('/', createRecipe);

// Route to update an existing recipe
router.put('/:id', updateRecipe);

// Route to delete a recipe
router.delete('/:id', deleteRecipe);

export default router;