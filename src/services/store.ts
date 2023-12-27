import { configureStore } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { patientsReducer } from '@/services/patients/patient-slice.ts'

export const store = configureStore({
	reducer: {
		patients: patientsReducer
	}
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
