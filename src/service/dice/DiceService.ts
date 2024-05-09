import Dice6 from "./Dice6";

let result: RollDiceResponse;

class DiceService {
  public static rollDices(expression: string) {
    const [quantidade, lados] = expression.split("d").map(Number);

    let dice1 = Dice6.roll();
    let dice2 = Dice6.roll();

    result = { dices: [dice1, dice2], total: dice1 + dice2 };

    return result;
  }

  public static roll2d6() {
    const dice1 = Dice6.roll();
    const dice2 = Dice6.roll();
    result = { dices: [dice1, dice2], total: dice1 + dice2 };
		
    return result;
  }

  private evaluate(expression: string) {}
}

interface Request {
  expression: string;
}

interface RollDiceResponse {
  dices: number[];
  total: number;
}

export default DiceService;
