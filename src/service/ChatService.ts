import ChatRoom from "../model/ChatRoom";
import User from "../model/User";


class ChatService {
  private chats: ChatRoom[] = [];

  public getChat() {}

  public getChats() {
    return this.chats;
  }

  public createChat(name: string) {
    if (name === "" || name === undefined) name = "Chat " + this.chatCount();
    let newChat = new ChatRoom(name);
    this.chats.push(newChat);
    return newChat;
  }

  public chatCount() {
    return this.chats.length;
  }

  public connect(chatId: number, user: User) {


    let chat = this.chats.find((chat) => {
      if (chatId === chat.id) {
        console.log("Equal: chat.id, chatId");
        return chat; // Return the chat room when found
      }
      return; // Continue searching
    });

    if (chat) {
      // Chat room found, add the user
      chat.users.push(user);
      console.log("Final chat: ", chat);
      
    } else {
      console.log("Chat room not found for chatId: ", chatId);
    }
  }
}

export const chatService = new ChatService();
