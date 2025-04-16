import { DataSource } from "typeorm"
import "dotenv/config"
import { User } from "../models"

export const dbConfig = new DataSource({
	type: "postgres",
	url: process.env.DATABASE_URL,
	synchronize: true,
	logging: false,
	entities: [User]
})
