import User from "./User";
import Message from "./Message";

export default class ChatRoom {
  public id: number;
  public name: string;
  public users: User[];
  private _messages: Message[];

  constructor(name: string) {
    this.name = name;
    this.id = Math.floor(Math.random() * 1000);
    this.users = [];
    this._messages = [];
  }

  get messages() : Message[]{
    return this._messages;
  }
}
