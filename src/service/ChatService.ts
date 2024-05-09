import { MessageDTO } from "../controller/dto/message";
import Chat from "../model/Chat";
import Message from "../model/Message";
import { userService } from "./UserService";
import { io } from "../index";

class ChatService {
  private _chats: Chat[] = [];

  public getChatById(id: number): Chat | undefined {
    return this._chats.find((chat) => {
      if (id === chat.id) {
        return chat; // Return the chat room when found
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
    io.emit("chatCreated", this._chats);
    return newChat;
  }

  public chatCount() {
    return this._chats.length;
  }

  public connect(chatId: number, userId: string) {
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

  public getChatMessagesById(chatId: number) {
    console.log(this.getChatById(chatId)?.getMessages());

    return this.getChatById(chatId)?.getMessages();
  }

//   public addMessage(chatId: number, messageDTO: MessageDTO) {
//     // console.log("message: ", messageDTO);
//     const message = new Message(
//       messageDTO.text,
//       messageDTO.user_id,
//       messageDTO.timestamp
//     );

//     let chat = this.getChatById(chatId);
//     if (!chat) {
//       console.log("Chat not found for chatId: ", chatId);
//       return;
//     }
//     chat.addMessage(message);

//     console.log("chat.messages: ", chat.getMessages());
//     // console.log("Final chat: ", chat);
//   }
}

export const chatService = new ChatService();
