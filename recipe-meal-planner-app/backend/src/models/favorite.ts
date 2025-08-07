import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../db'; // Adjust the path as necessary

class Favorite extends Model {}

Favorite.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  recipeId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
}, {
  sequelize,
  modelName: 'Favorite',
  tableName: 'favorites',
  timestamps: true,
});

export default Favorite;