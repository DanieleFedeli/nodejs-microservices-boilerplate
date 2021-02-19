import { DataTypes, Model } from "sequelize";
import sequelize from "./connection";

type ModelOneType = {
	id?: number;
	createdAt?: Date;
	updatedAt?: Date;
	deletedAt?: Date;
};

export class ModelOne extends Model<ModelOneType, ModelOneType> {}
ModelOne.init({}, { modelName: "modelOne", sequelize });
