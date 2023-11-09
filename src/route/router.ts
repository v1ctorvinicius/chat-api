import { Router } from "express";
import { healthController } from "../controller/HealthController";

const router: Router = Router();

router.get("/chats", (req, res) => {
  res.send("chats: ");
});

router.get("/create-chat", (req, res) => {
  res.send("create-chat");
});

router.get("/health", healthController.health);

export { router };
