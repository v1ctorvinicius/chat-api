import { router } from "./route/router";

import express from "express";
import http from "http";
import { Server } from "socket.io";
import cors from "cors";
import dotenv from "dotenv";

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
  console.log(`User connected: ${socket.id}`);
  socket.on("message", (data) => {
    console.log(data);
  });
});

io.on("disconnect", (socket) => {
  console.log(`User disconnected: ${socket.id}`);
});

server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
