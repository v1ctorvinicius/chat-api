import User from "../model/User";

class UserService {
  private _users: User[] = [];

  public getUserById(id: number) {
    return this._users.find((user) => user.id === id);
  }

}

export const userService = new UserService();