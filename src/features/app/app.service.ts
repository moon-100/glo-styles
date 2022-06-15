import { createAsyncThunk } from '@reduxjs/toolkit'
import MOCK_DATA from 'src/assets/data/task.json'

export const initApp = createAsyncThunk('app/initApp', async () => {
  return {
    data: MOCK_DATA,
  }
})
