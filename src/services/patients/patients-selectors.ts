import { RootState } from '@/services'

export const patientsSelectors = {
	selectPatients: (state: RootState) => state.patients
}
