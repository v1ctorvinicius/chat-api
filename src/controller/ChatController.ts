import { Request, Response } from "express";
import { chatService } from "../service/ChatService";

class ChatController {
  public getMessages(req: Request, res: Response) {
    let chatId = parseInt(req.params.chatId);
    return res.json(chatService.getChatMessagesById(chatId)).status(200);
  }

  public getChats(req: Request, res: Response) {
    return res.json(chatService.getChats()).status(200);
  }

  public getChatById(req: Request, res: Response) {
    let chatId = parseInt(req.params.chatId);
    return res.json(chatService.getChatById(chatId)).status(200);
  }

  public create(req: Request, res: Response) {
    const newChat = chatService.createChat(req.body.name);
    return res.json(newChat).status(201);
  }

  public count(req: Request, res: Response) {
    return res.json(chatService.chatCount()).status(200);
  }

  public connect(req: Request, res: Response) {
    let chatId = parseInt(req.body.chatId);
    let userId = req.body.userId;
    return res.json(chatService.connect(chatId, userId)).status(200);
  }

  // public post(req: Request, res: Response) {
  //   let chatId = parseInt(req.params.chatId);
  //   let messageDTO = req.body;
  //   return res.json(chatService.addMessage(chatId, messageDTO)).status(200);
  // }
}



export const chatController = new ChatController();
