import { Router } from "express";
import { healthController } from "../controller/HealthController";
import { chatRoomController } from "../controller/ChatRoomController";

const router: Router = Router();

router.get("/chats", chatRoomController.getChats);
router.get("/chats/count", chatRoomController.count);
router.post("/chats", chatRoomController.create);

router.get("/health", healthController.health);

export { router };
