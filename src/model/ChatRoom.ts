import User from "./User";

export default class ChatRoom {
  public id: number;
  public name: string;
  public users: User[] = [];

  constructor(name: string) {
    this.name = name;
    this.id = Math.floor(Math.random() * 1000);
  }
}