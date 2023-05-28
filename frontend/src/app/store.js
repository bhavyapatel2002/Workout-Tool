import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../features/auth/authSlice'
import recordReducer from '../features/goals/recordSlice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    records: recordReducer
  },
})
