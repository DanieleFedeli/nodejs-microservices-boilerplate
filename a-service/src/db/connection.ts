import { Sequelize } from "sequelize";

import accessEnv from "~/helpers/accessEnv";

const DB_URI = accessEnv("DB_URI") as string;

const sequelize = new Sequelize({
	dialectOptions: {
		charset: "utf8",
		multipleStatements: true,
	},
	dialect: "mysql",
	logging: false,
});

export default sequelize;
