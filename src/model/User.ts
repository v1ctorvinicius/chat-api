export default class User {
  private _name: string;
  private _id: number;

  constructor(name: string) {
    this._name = name;
    this._id = Math.floor(Math.random() * 1000);
  }

  get id(): number {
    return this._id;
  }

  get name(): string {
    return this._name;
  }
}
