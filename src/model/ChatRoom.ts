import User from "./User";
import Message from "./Message";

export default class ChatRoom {
  public id: number;
  public name: string;
  public users: User[];
  public messages: Message[];

  constructor(name: string) {
    this.name = name;
    this.id = Math.floor(Math.random() * 1000);
    this.users = [];
    this.messages = [];
  }
}