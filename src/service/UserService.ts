import User from "../model/user";

export default class UserService {
  private static instance: UserService;
  private _users: User[];

  private constructor() {
    this._users = [];
  }

  public static getInstance(): UserService {
    if (!UserService.instance) {
      UserService.instance = new UserService();
    }
    return UserService.instance;
  }

  public createUser(name: string) {
    let newUser = new User(name);
    this._users.push(newUser);
  }

  public getUserById(id: string) {
    return this._users.find((user) => user.id === id);
  }

  public getUsers(): User[] {
    return UserService.getInstance()._users;
  }
}

export const userService = UserService.getInstance();
