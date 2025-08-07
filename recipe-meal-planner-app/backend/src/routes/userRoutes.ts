import { Router } from 'express';
import { getUserFavorites, updateUserFavorites } from '../controllers/userController';
import { authenticate } from '../middleware/authMiddleware';

const router = Router();

// Route to get user favorites
router.get('/favorites', authenticate, getUserFavorites);

// Route to update user favorites
router.post('/favorites', authenticate, updateUserFavorites);

export default router;