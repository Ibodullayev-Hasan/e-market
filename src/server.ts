import "reflect-metadata"
import express, { Application } from "express"
import "dotenv/config"
import { serverConfig } from "./configs"
import path from "path"
import router from "./routes"

const server = async () => {
	try {
		const app: Application = express()
		const port = Number(process.env.SERVER_PORT) || 3000

		app.set("view engine", "ejs");
		app.set("views", path.join(process.cwd(), "src", "views"));

		app.use(express.json())
		app.use(express.urlencoded({ extended: true }))
		app.use(express.static(path.join(process.cwd(), "public")))


		serverConfig(app)

		app.use(router)

		app.listen(port, () => {
			console.log(`🚀 Server running on http://localhost:${port}`)
		})
	} catch (error) {
		if (error instanceof Error) {
			console.error("Startup error:", error.message)
		} else {
			console.error("Unknown error:", error)
		}
	}
}

server()
