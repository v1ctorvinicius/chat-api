import { chatService } from "../../service/ChatService";

function getChatMessages(chatId: number) {
  console.log("asdadadsadsasdad");
  
  const chat = chatService.getChatById(chatId);
  return chat?.getMessages();
}

export const chatUseCases = {
  getChatMessages,
}
