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
    return res
      .json(chatService.connect(req.body.chatId, req.body.user))
      .status(200);
  }

  public post(req: Request, res: Response) {
    let chatId = parseInt(req.params.chatId);
    let userId = parseInt(req.params.userId);
    return res
      .json(chatService.newMessage(chatId, userId, req.body.message))
      .status(200);
  }
}

export const chatRoomController = new ChatRoomController();
