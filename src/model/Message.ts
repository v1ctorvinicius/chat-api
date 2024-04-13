export default class Message {

  private _id: number;
  private _userId : number;
  private _text: string;
  private _timestamp: string;

  constructor(text: string, userId: number, timestamp: string) {
    this._id = Math.floor(Math.random() * 1000);
    this._text = text;
    this._userId = userId;
    // this._timestamp = new Date().toLocaleString('pt-br');
    this._timestamp = timestamp;
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