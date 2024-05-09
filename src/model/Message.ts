import User from "./User";

export default class Message {

  public id: string;
  public chatId: string;
  public userId : number;
  public username: string
  public content: string;
  public timestamp: string;

  constructor(content: string, chatId: string, userId: number,  username: string, timestamp: string) {
    this.id = Math.floor(Math.random() * 1000).toString();
    this.chatId = chatId;
    this.content = content;
    this.userId = userId;
    this.username = username;
    // this._timestamp = new Date().toLocaleString('pt-br');
    this.timestamp = timestamp;
  }


}