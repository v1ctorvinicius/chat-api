import { chatService } from "../../service/ChatService";

function getChatMessages(chatId: string) {
  const chat = chatService.getChatById(chatId);
  return chat?.getMessages();
}

export const chatUseCases = {
  getChatMessages,
};
