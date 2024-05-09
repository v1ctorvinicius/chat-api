import { userService } from "../service/UserService";
import { Request, Response } from "express";

class UserController {
  private static instance: UserController;

  private constructor() {}

  public static getInstance(): UserController {
    if (!UserController.instance) {
      UserController.instance = new UserController();
    }
    return UserController.instance;
  }

  public createUser(req: Request, res: Response) {
    let name = req.body.name;
    return res.json(userService.createUser(name)).status(201);
  }

  public getUsers(req: Request, res: Response) {
    return res.json(userService.getUsers()).status(200);
  }

  public getUserById(id: string) {
    return userService.getUserById(id);
  }
}

export const userController = UserController.getInstance();