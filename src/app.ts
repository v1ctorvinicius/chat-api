import express from "express";
import { router } from "./route/router";

export class App {
  public server: express.Application;

  constructor() {
    this.server = express();
    this.middleware();
    this.router();
  }

  private router() {
    this.server.use(router);
  }

  private middleware() {
    this.server.use(express.json());
  }
}
