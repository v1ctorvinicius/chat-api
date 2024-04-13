import ChatRoom from "../model/Chat";
import Message from "../model/Message";
import User from "../model/User";
import { userService } from "./UserService";

class ChatService {
  private _chats: ChatRoom[] = [];

  public getChatById(id: number): ChatRoom | undefined {
    let chat = this._chats.find((chat) => {
      if (id === chat.id) {
        console.log("Equal: chat.id, chatId");
        return chat; // Return the chat room when found
      }
      return; // Continue searching
    });
    return chat;
  }

  public getChats() {
    return this._chats;
  }

  public createChat(name: string) {
    if (name === "" || name === undefined) name = "Chat " + this.chatCount();
    let newChat = new ChatRoom(name);
    this._chats.push(newChat);
    return newChat;
  }

  public chatCount() {
    return this._chats.length;
  }

  public connect(chatId: number, userId: number) {
    let chat = this.getChatById(chatId);
    let user = userService.getUserById(userId);

    if (!chat) {
      console.log("ChatRoom not found for chatId: ", chatId);
      return;
    }

    if (!user) {
      console.log("User not found for userId in this chat: ", userId);
      return;
    }

    // Chat room found, add the user
    chat.users.push(user);
  }

  public newMessage(chatId: number, userId: number, message: string) {
    let chat = this.getChatById(chatId);
    let user = userService.getUserById(userId);

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
    console.log("newMessage: ", newMessage);

    chat.messages.push(newMessage);
    console.log("chat.messages: ", chat.messages);

    console.log("Final chat: ", chat);
  }
}

export const chatService = new ChatService();
