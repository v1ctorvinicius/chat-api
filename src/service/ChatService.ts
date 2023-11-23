import ChatRoom from "../model/ChatRoom";

class ChatService {
  private chats: ChatRoom[] = [];

  public getChat() {}

  public getChats() {
    return this.chats.map((chat) => chat.name);
  }

  public createChat(name: string) {
    let newChat = new ChatRoom(name);
    this.chats.push(newChat);
  }

  public chatCount() {
    return this.chats.length;
  }
}

export default ChatService;
