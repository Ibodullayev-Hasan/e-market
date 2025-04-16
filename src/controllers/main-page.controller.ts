import { Request, Response } from "express";

export const MainPageController = (req: Request, res: Response): void => {
	try {

		res.render("home")
	} catch (error: any) {
		if (error instanceof Error) {
			throw error
		}
		throw new Error(error.message)
	}
}