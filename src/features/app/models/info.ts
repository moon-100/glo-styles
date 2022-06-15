import * as Type from '@glocalize-inc/glo-languages'
export type TaskType = 'TRANSLATION' | 'TRANSCRIPTION'
export type SubtaskType = 'WORK' | 'QC' | 'CONFIRM' | 'FINALIZE'
export default class Info {
  constructor(
    private _projectId: number,
    private _projectName: string,
    private _taskId: number,
    private _taskType: TaskType,
    private _subtaskId: number,
    private _subtaskType: SubtaskType,
    private _sourceLanguageCode: Type.GloLanguageCode,
    private _sourceLanguageName: string,
    private _targetLanguageCode: Type.GloLanguageCode,
    private _targetLanguageName: string,
    private _genre: Nullable<string>,
    private _dueAt: Date,
    private _isSelf: boolean,
  ) {}

  get projectId() {
    return this._projectId
  }
  get projectName() {
    return this._projectName
  }
  get taskId() {
    return this._taskId
  }
  get taskType() {
    return this._taskType
  }
  get subtaskId() {
    return this._subtaskId
  }
  get subtaskType() {
    return this._subtaskType
  }
  get sourceLanguageCode() {
    return this._sourceLanguageCode
  }
  get sourceLanguageName() {
    return this._sourceLanguageName
  }
  get targetLanguageCode() {
    return this._targetLanguageCode
  }
  get targetLanguageName() {
    return this._targetLanguageName
  }
  get genre() {
    return this._genre
  }
  get dueAt() {
    return this._dueAt
  }
  get isSelf() {
    return this._isSelf
  }
}
