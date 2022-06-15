export class Subtitle {
  id: number
  start: number
  end: number
  text: string

  // 기타 등등이 와야함
  praise: boolean
}

export class QcSubtitle extends Subtitle {
  error: Nullable<string[]>
  memo: string
  accept: boolean
  decline: boolean
  declineErrors: Nullable<string[]>
}

export class ConfirmSubtitle extends Subtitle {}

export default class Subtitles {
  source: Nullable<Subtitle[]>
  work: Subtitle[]
  qc: QcSubtitle[]
  confirm: ConfirmSubtitle[]
  focusedId: Nullable<number>
}
