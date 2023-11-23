import { Router } from "express";
import { healthController } from "../controller/HealthController";
import ChatService from "../service/ChatService";

const router: Router = Router();
const service = new ChatService();

router
  .route("/chats")
  .get((req, res) => {
    res.status(200);
    res.send(service.getChats());
  })
  .post((req, res) => {
    const newChat = service.createChat(req.body.name);
    res.status(201);
    res.send(newChat);
  });

router.get("/chats/count", (req, res) => {
  res.send({ count: service.chatCount() });
});

router.get("/health", healthController.health);

export { router };
