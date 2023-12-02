import ChatRoom from "../model/ChatRoom";
import Message from "../model/Message";
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

  public newMessage(chatId: number, userId: number, message: string) {
    let chat = this.chats.find((chat) => {
      if (chatId === chat.id) {
        return chat; // Return the chat room when found
      }
      return; // Continue searching
    });

    let user = chat?.users.find((user) => {
      if (userId === user.id) {
        return user; // Return the user when found
      }
      return; // Continue searching
    });

    if (!chat) {
      console.log("Chat not found for chatId: ", chatId);
      return;
    }

    if (!user) {
      console.log("User not found for userId in this chat: ", userId);
      return;
    }

    // Chat room found, add the message
    let newMessage = new Message(message, userId);
    chat.messages.push(newMessage);
    console.log("Final chat: ", chat);
  }
}

export const chatService = new ChatService();
