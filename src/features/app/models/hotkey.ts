export default class Hotkey {
  constructor(
    private _id: number,
    private _name: string,
    private _userId: number,
  ) {}

  get id() {
    return this._id
  }
  get name() {
    return this._name
  }
  get userId() {
    return this._userId
  }
}
