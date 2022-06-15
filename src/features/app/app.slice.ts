import { GloLanguageCode } from '@glocalize-inc/glo-languages'
import { createSelector, createSlice } from '@reduxjs/toolkit'
import { RootState } from 'src/app/store'
import { initApp } from './app.service'

export interface User {
  id: number
  firstName: string
  lastName: string
}

export interface Video {
  url: string
  runtime: number
  duration: Nullable<number>
  fps: number // DEFAULT 24
}

export interface Task {
  id: number
  type: 'TRANSLATION' | 'TRANSCRIPTION'
}

export interface Subtask {
  id: number
  type: 'WORK' | 'QC' | 'CONFIRM' | 'FINALIZE'
}

export interface Info {
  projectId: number
  projectName: string
  sourceLanguageCode: GloLanguageCode
  sourceLanguageName: string
  targetLanguageCode: GloLanguageCode
  targetLanguageName: string
  genre: Nullable<string>
  dueAt: Nullable<Date> // self task인 경우에는 null
  isSelf: boolean
}

export interface Subtitle {
  start: number
  end: number
  text: string
  praise: boolean
}

export interface QcSubtitle extends Subtitle {}

export interface ConfirmSubtitle extends Subtitle {}

export interface Subtitles {
  source: Nullable<Subtitle[]>
  work: Subtitle[]
  qc: Nullable<QcSubtitle[]>
  confirm: Nullable<ConfirmSubtitle[]>
  focusedId: Nullable<number>
}

export interface Hotkey {
  id: number
  name: string
}

export interface AppState {
  user: Nullable<User>
  video: Nullable<Video>
  info: Nullable<Info>
  task: Nullable<Task>
  subtask: Nullable<Subtask>
  subtitle: Nullable<Subtitles>
  hotkey: Nullable<Hotkey[]>
  isLoading: boolean
  isError: boolean
}

const initialState: AppState = {
  user: null,
  video: null,
  info: null,
  task: null,
  subtask: null,
  subtitle: null,
  hotkey: null,
  isLoading: false,
  isError: false,
}

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(initApp.pending, (state) => {
        state.isLoading = true
      })
      .addCase(initApp.fulfilled, (state, { payload }) => {
        console.log(1, payload.data)
        console.log(2, typeof payload.data.info.dueAt)
        return {
          ...state,
          ...(payload.data as any), // @todo dueAt types
          isLoading: false,
        }
      })
      .addCase(initApp.rejected, (state) => {
        state.isLoading = false
        state.isError = true
      })
  },
})

// actions
export const {} = appSlice.actions

// selectors
const selfState = (state: RootState) => state.app

export const getAppData = createSelector(selfState, (data) => {
  return data
})

export const getAppStatus = createSelector(selfState, (data) => {
  return {
    isLoading: data.isLoading,
    isError: data.isError,
  }
})

export const getUser = createSelector(selfState, (data) => data.user)
export const getVideo = createSelector(selfState, (data) => data.video)
export const getTask = createSelector(selfState, (data) => data.task)
export const getSubtask = createSelector(selfState, (data) => data.subtask)
export const getInfo = createSelector(selfState, (data) => data.info)
export const getSourceSubtitles = createSelector(
  selfState,
  (data) => data.subtitle.source,
)
export const getWorkSubtitles = createSelector(
  selfState,
  (data) => data.subtitle.work,
)
export const getQcSubtitles = createSelector(
  selfState,
  (data) => data.subtitle.qc,
)
export const getConfirmSubtitles = createSelector(
  selfState,
  (data) => data.subtitle.confirm,
)
export const getFocusedSubtitleId = createSelector(
  selfState,
  (data) => data.subtitle.focusedId,
)
export const getHotkeys = createSelector(selfState, (data) => data.hotkey)

export default appSlice.reducer
