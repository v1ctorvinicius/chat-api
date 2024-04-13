import express from "express";
import { router } from "./route/router";
const cors = require("cors");

export class App {
  public server: express.Application;

  constructor() {
    this.server = express();
    this.server.use(cors());
    this.middleware();
    this.router();
  }

  private router() {
    this.server.use(router);
  }

  private middleware() {
    this.server.use(cors());
    this.server.use(express.json());
  }
}
