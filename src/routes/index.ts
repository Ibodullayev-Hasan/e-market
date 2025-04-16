import { Router } from "express";
import authRouter from "./auth.route";
import mainRouter from "./main-page.route";

const router = Router();

router.use(authRouter)
router.use(mainRouter)

export default router;
