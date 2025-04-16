import { Router } from "express";
import { MainPageController } from "../controllers";

const mainRouter = Router();

mainRouter.get("/main", MainPageController);

export default mainRouter;
