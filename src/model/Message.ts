export default class Message {

  private _id: number;
  private _userId : number;
  private _text: string;
  private _timestamp: Date;

  constructor(text: string, userId: number) {
    this._text = text;
    this._userId = userId;
    this._id = Math.floor(Math.random() * 1000);
    this._timestamp = new Date();
  }

  get text(): string {
    return this._text;
  }

  get timestamp(): string {
    return this._timestamp.toLocaleString();
  }

  get id(): number {
    return this._id;
  }

  get userId(): number {
    return this._userId;
  }

}