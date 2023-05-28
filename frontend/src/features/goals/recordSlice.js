import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const initialState = {
    records: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ''
}

export const recordSlice = createSlice({
    name: 'record',
    initialState,
    reducers: {
        reset: (state) => initialState
    }
})

export const { reset } = recordSlice.actions
export default recordSlice.reducer