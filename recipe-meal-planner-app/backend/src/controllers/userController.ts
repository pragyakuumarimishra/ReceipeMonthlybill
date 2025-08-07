import { Request, Response } from 'express';
import { User } from '../models/user';

// Get user favorites
export const getUserFavorites = async (req: Request, res: Response) => {
    const userId = req.user.id; // Assuming user ID is stored in req.user after authentication

    try {
        const favorites = await User.getFavorites(userId); // Implement this method in the User model
        res.status(200).json(favorites);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving favorites', error });
    }
};

// Other user-related functions can be added here as needed
