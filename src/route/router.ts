import { Router } from "express";
import { healthController } from "../controller/HealthController";
import { chatRoomController } from "../controller/ChatRoomController";
import { diceController } from "../controller/DiceController";

const router: Router = Router();

router.get("/chats", chatRoomController.getChats);
router.post("/chats", chatRoomController.create);
router.get("/chats/count", chatRoomController.count);
router.post("/chats/connect", chatRoomController.connect); //TODO: put chatId in param, erase from body
// router.get("/chats/messages", chatRoomController.getMessages);
router.post("/chats/messages/:chatId/:userId", chatRoomController.post);


// router.get("/dices/:expression", diceController.rollDices);
router.get("/dices/2d6", diceController.roll2d6);

router.get("/health", healthController.health);

export { router };
