import { Router } from "express";
import { healthController } from "../controller/HealthController";
import { chatController } from "../controller/ChatController";
import { diceController } from "../controller/DiceController";
import { userController } from "../controller/UserController";

const router: Router = Router();
router.use("/api", router);

router.get("/chats", chatController.getChats);
router.get("/chats/:chatId", chatController.getChatById);
router.get("/chats/count", chatController.count);
router.get("/chats/:chatId/messages", chatController.getMessages);
router.post("/chats", chatController.create);
router.post("/chats/connect", chatController.connect); //TODO: put chatId in param, erase from body
// router.post("/chats/send-message/:chatId", chatController.post);

router.get("/users", userController.getUsers);
router.post("/users", userController.createUser);

// router.get("/dices/:expression", diceController.rollDices);
router.get("/dices/2d6", diceController.roll2d6);
router.get("/dices/:expression", diceController.rollDices);

router.get("/health", healthController.health);

export { router };
