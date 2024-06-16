import { router } from "./route/router";

import express from "express";
import http from "http";
import { Server } from "socket.io";
import cors from "cors";
import dotenv from "dotenv";
import { chatService } from "./service/ChatService";
import Message from "./model/message";

dotenv.config();
const port = process.env.PORT;

const app = express();
const server = http.createServer(app);

app.use(cors());
app.use(express.json());
app.use(router);

export const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  socket.on("message", (data) => {
    chatService.getChatById(data.chatId)?.addMessage(data);
    io.emit("chatupdated", chatService.getChatById(data.chatId));
  });
});

io.on("disconnect", (socket) => {
  console.info(`User disconnected: ${socket.id}`);
});

server.listen(port, () => {
  console.info(`Server running on port ${port}`);
});
