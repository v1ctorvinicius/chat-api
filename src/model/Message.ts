import User from "./User";

export default class Message {

  public id: number;
  public userId : number;
  public content: string;
  public timestamp: string;
  public sender: User;

  constructor(text: string, userId: number, timestamp: string, sender: User) {
    this.id = Math.floor(Math.random() * 1000);
    this.content = text;
    this.userId = userId;
    // this._timestamp = new Date().toLocaleString('pt-br');
    this.timestamp = timestamp;
    this.sender = sender;
  }


}