import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import AppReducer from 'src/features/app/app.slice'

export const store = configureStore({
  reducer: {
    app: AppReducer,
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
