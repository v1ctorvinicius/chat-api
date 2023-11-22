import { Request, Response } from "express";

class ChatRoomController {
  public create(req: Request, res: Response) {
    return res.json({ response: "created chat" });
  }
}

export const chatRoomController = new ChatRoomController();
