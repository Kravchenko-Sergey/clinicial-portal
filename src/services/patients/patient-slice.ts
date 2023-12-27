import { createSlice } from '@reduxjs/toolkit'
import { patientsAPI } from '@/services/patients/patients-api.ts'
import { createAppAsyncThunk } from '@/common/utils/cteate-app-async-thunk.ts'
import { thunkTryCatch } from '@/common/utils/thunk-try-catch.ts'

const THUNK_PREFIXES = {
	GET_PATIENTS: 'auth/getPatients'
}

const getPatients = createAppAsyncThunk<any, any>(THUNK_PREFIXES.GET_PATIENTS, async (arg: any, thunkAPI: any) => {
	return thunkTryCatch(thunkAPI, async () => {
		const res = await patientsAPI.getPatients()
		console.log(res)
		return {
			patients: res.data.patients
		}
	})
})

const slice = createSlice({
	name: 'patients',
	initialState: {
		patients: [] as any
	},
	reducers: {},
	extraReducers: builder => {
		builder.addCase(getPatients.fulfilled, (state, action) => {
			state.patients = action.payload.patients
		})
	}
})

export const patientsReducer = slice.reducer
export const patientsActions = slice.actions
export const patientsThunks = {
	getPatients
}
