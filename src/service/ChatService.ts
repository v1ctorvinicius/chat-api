import { MessageDTO } from "../controller/dto/message";
import Chat from "../model/chat";
import Message from "../model/message";
import { userService } from "./UserService";
import { io } from "../index";

class ChatService {
  private _chats: Chat[] = [];

  public getChatById(id: string): Chat | undefined {
    return this._chats.find((chat) => {
      if (id === chat.id) {
        return chat;
      }
    });
  }

  public getChats() {
    return this._chats;
  }

  public createChat(name: string) {
    if (name === "" || name === undefined) name = "Chat " + this.chatCount();
    let newChat = new Chat(name);
    this._chats.push(newChat);
    io.emit("chatCreated", newChat);
    return newChat;
  }

  public chatCount() {
    return this._chats.length;
  }

  public connect(chatId: string, userId: string) {
    let chat = this.getChatById(chatId);
    let user = userService.getUserById(userId);

    if (!chat) {
      console.error("ChatRoom not found for chatId: ", chatId);
      return;
    }

    if (!user) {
      console.error("User not found for userId in this chat: ", userId);
      return;
    }

    chat.users.push(user);
  }

  public getChatMessagesById(chatId: string) {
    return this.getChatById(chatId)?.getMessages();
  }
}

export const chatService = new ChatService();
