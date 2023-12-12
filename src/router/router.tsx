import { createBrowserRouter } from 'react-router-dom'

import { Home } from '../pages/home/home.tsx'
import { Patients } from '../pages/patients/patients.tsx'
import { Layout } from '../components/layout'
import { Patient } from '../pages/patient/patient.tsx'

export const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		children: [
			{
				path: 'home',
				element: <Home />
			},
			{
				path: 'patients',
				element: <Patients />
			},
			{
				path: 'patients/:id',
				element: <Patient />
			}
		]
	}
])
