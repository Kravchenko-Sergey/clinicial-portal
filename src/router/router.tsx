import { createBrowserRouter } from 'react-router-dom'

import { Home } from 'pages/home'
import { Patients } from 'pages/patients'
import { Layout } from 'components/layout'
import { Patient } from 'pages/patient'
import {PATH} from "./route-paths.ts";

export const router = createBrowserRouter([
	{
		path: PATH.HOME,
		element: <Layout />,
		children: [
			{
				path: PATH.HOME,
				element: <Home />
			},
			{
				path: PATH.PATIENTS,
				element: <Patients />
			},
			{
				path: `${PATH.PATIENTS}/:id`,
				element: <Patient />
			}
		]
	}
])
