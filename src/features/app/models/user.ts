export default class User {
  constructor(
    private _id: number,
    private _firstName: string,
    private _lastName: string,
  ) {}

  get fullName() {
    if (!this._firstName || !this._lastName) return 'noname'
    return this._firstName + this._lastName
  }

  get id() {
    return this._id
  }
}
