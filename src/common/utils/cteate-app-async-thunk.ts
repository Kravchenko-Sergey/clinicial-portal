import { createAsyncThunk } from '@reduxjs/toolkit'
import { AppDispatch, RootState } from '@/services'

export const createAppAsyncThunk = createAsyncThunk.withTypes<{
	state: RootState
	dispatch: AppDispatch
	rejectValue: unknown
}>()
