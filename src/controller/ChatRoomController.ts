import { Request, Response } from "express";
import { chatService } from "../service/ChatService";

class ChatRoomController {
  public getChats(req: Request, res: Response) {
    res.status(200);
    return res.json(chatService.getChats());
  }

  public create(req: Request, res: Response) {
    const newChat = chatService.createChat(req.body.name);
    res.status(201);
    return res.json(newChat);
  }

  public count(req: Request, res: Response) {
    return res.json(chatService.chatCount());
  }
}

export const chatRoomController = new ChatRoomController();
