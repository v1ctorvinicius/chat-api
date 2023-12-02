import { Request, Response } from "express";
import { chatService } from "../service/ChatService";

class ChatRoomController {
  public getChats(req: Request, res: Response) {
    return res.json(chatService.getChats()).status(200);
  }

  public create(req: Request, res: Response) {
    const newChat = chatService.createChat(req.body.name);
    return res.json(newChat).status(201);
  }

  public count(req: Request, res: Response) {
    return res.json(chatService.chatCount()).status(200);
  }

  public connect(req: Request, res: Response) {
    return res.json(chatService.connect(req.body.chatId, req.body.user)).status(200);
  }
}

export const chatRoomController = new ChatRoomController();
