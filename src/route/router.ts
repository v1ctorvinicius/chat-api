import { Router } from "express";
import { healthController } from "../controller/HealthController";

const router: Router = Router();

//rotas
router.get("/health", healthController.health);

export { router };
