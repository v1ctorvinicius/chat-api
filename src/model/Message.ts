export default class Message {
  public id: number;
  private _text: string;
  private _user: User;

  constructor(text: string, user: User) {
    this.text = text;
    this.user = user;
    this.id = user.id;
  }
}