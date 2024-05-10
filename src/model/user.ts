export default class User {
  private _name: string;
  private _id: string;

  constructor(name: string) {
    this._name = name;
    this._id = Math.floor(Math.random() * 1000).toString();
  }

  get id(): string {
    return this._id;
  }

  get name(): string {
    return this._name;
  }
}
