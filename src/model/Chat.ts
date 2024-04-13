import Message from "./Message";
import User from "./User";
import Message from "./Message";

export default class ChatRoom {
  public id: number;
  public name: string;
  public users: User[];
  private messages: Message[];

  constructor(name: string) {
    this.name = name;
    this.id = Math.floor(Math.random() * 1000);
    this.users = [];
    this.messages = [];
  }

  public getMessages(): Message[] {
    return this.messages;
  }

  public addMessage(message: Message) {
    this.messages.push(message);
  }
}
