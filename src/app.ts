import express from "express";
import { Server } from "socket.io";
import { router } from "./route/router";
import cors from "cors";

import http from "http";

export class App {
  public app: express.Application;
  private io: Server;
  private server: http.Server;

  constructor() {
    this.app = express();
    this.server = http.createServer(this.app);
    this.middleware();
    this.router();
    this.io = new Server();
  }

  private router() {
    this.app.use(router);
  }

  private middleware() {
    this.app.use(cors());
    this.app.use(express.json());
  }
}
