import { Router } from "express";
import { healthController } from "../controller/HealthController";
import chatService from "../service/ChatService";

const router: Router = Router();

router.get("/chats", (req, res) => {
  res.send("chats: ");
});

router.get("/create-chat", (req, res) => {
  chatService.createChat();
  res.send("chat created");
});

// router.get("/chat",);

router.get("/health", healthController.health);


export { router };
