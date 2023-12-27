import { instance } from '@/services'

export const patientsAPI = {
	getPatients() {
		return instance.get<any>('patients')
	}
}
