import { Router } from "express";
import { MainPageController } from "../controllers";

const mainRouter = Router();

mainRouter.get("/", MainPageController);

export default mainRouter;
