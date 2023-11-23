import ChatRoom from "../model/ChatRoom";

class ChatService {
  private chats: ChatRoom[] = [];

  public getChat() {}

  public getChats() {
    return this.chats.map((chat) => chat.name);
  }

  public createChat(name: string) {
    if(name === "" || name === undefined) name = "Chat " + this.chatCount();
    let newChat = new ChatRoom(name);
    this.chats.push(newChat);
    return newChat;
  }

  public chatCount() {
    return this.chats.length;
  }
}

export default ChatService;
