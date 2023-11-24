import { Request, Response } from "express";
import DiceService from "../service/dice/DiceService";

class DiceController {
  private evaluate(expression: string): boolean {
    const regex = /^\d+d\d+$/;
    return regex.test(expression);
  }

  public async rollDices(req: Request, res: Response) {
    const { expression } = req.body;
    console.log("expression: ", expression);
    
    if (!this.evaluate(expression))
      return res.status(400).json({ error: "Invalid expression" });

    res.json(DiceService.rollDices(expression));
  }

  public async rollDice() {}

  public roll2d6(req: Request, res: Response) {
    return res.json(DiceService.roll2d6());
  }
}

interface RollDiceResponse {
  dices: number[];
  total: number;
}

export const diceController = new DiceController();