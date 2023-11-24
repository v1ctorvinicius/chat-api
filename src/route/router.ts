import { Router } from "express";
import { healthController } from "../controller/HealthController";
import { chatRoomController } from "../controller/ChatRoomController";
import { diceController } from "../controller/DiceController";

const router: Router = Router();

router.get("/chats", chatRoomController.getChats);
router.get("/chats/count", chatRoomController.count);
router.post("/chats", chatRoomController.create);
// router.get("/dices/:expression", diceController.rollDices);
router.get("/dices/2d6", diceController.roll2d6);

router.get("/health", healthController.health);

export { router };
