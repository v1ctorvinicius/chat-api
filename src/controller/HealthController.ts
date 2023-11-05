import { Request, Response } from "express";

class HealthController {
  public health(req: Request, res: Response) {
    return res.json({ response: "up" });
  }
}

export const healthController = new HealthController();
