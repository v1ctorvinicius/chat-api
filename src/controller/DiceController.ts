import { Request, Response } from "express";
import DiceService from "../service/dice/DiceService";

class DiceController {
  public async rollDices(req: Request, res: Response) {
    const { expression } = req.params;

    res.json(DiceService.rollDices(expression));
  }

  public async rollDice() {}

  public roll2d6(req: Request, res: Response) {
    return res.json(DiceService.roll2d6());
  }

  private evaluate(expression: string): boolean {
    const regex = /^\d+d\d+$/;
    return regex.test(expression);
  }
}

interface RollDiceResponse {
  dices: number[];
  total: number;
}

export const diceController = new DiceController();
