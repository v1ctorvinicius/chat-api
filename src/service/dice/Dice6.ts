export default class Dice6 {
  public static roll(): number {
    return Math.floor(Math.random() * 6);
  }
}
