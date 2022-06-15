export default class Video {
  constructor(
    private _url: string,
    private _runtime: number,
    private _duration: Nullable<number>,
    private _fps: number,
  ) {}

  get url() {
    return this._url
  }

  get runtime() {
    return this._runtime
  }

  get duration() {
    return this._duration
  }

  get fps() {
    return this._fps
  }
}
