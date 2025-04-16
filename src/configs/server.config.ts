import { Application } from "express";
import { dbConfig } from "./database.config";
import cors from "cors"
import path from "path";
import fs from "fs";
import * as YAML from "yaml";
import swaggerUi from "swagger-ui-express"


export const serverConfig = async (app: Application) => {

	app.use(cors({
		origin: false,
		credentials: true,
		allowedHeaders: ['Content-Type', 'Authorization']
	}))

	dbConfig.initialize()
		.then(() => { console.log(`Successfully connected database`) })
		.catch((err) => { console.log(`Typeorm:  ${err}`) })

	const swaggerFilePath = path.resolve(__dirname, "../../swagger.yaml")
	const swaggerDocument = YAML.parse(fs.readFileSync(swaggerFilePath, "utf-8"))
	app.use("api/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

}