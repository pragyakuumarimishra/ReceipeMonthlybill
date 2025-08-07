import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../db';

class MealPlan extends Model {
  public id!: number;
  public userId!: number;
  public recipeId!: number;
  public date!: Date;
}

MealPlan.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    recipeId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: 'mealPlans',
  }
);

export default MealPlan;