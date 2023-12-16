import { Header } from 'components/header'
import {Actions, Notifications} from 'assets/icons'
import { HelpCenter } from 'assets/icons'
import s from './patients.module.scss'
import { Table } from 'components/table'

import { ReactNode } from 'react'

const columns: any = [
	{
		header: 'name',
		accessorKey: 'name'
	},
	{
		header: 'medication',
		accessorKey: 'medication'
	},
	{
		header: 'symptoms',
		accessorKey: 'symptoms'
	},
	{
		header: 'physical Wellbeing',
		accessorKey: 'physicalWellbeing'
	},
	{
		header: 'mood',
		accessorKey: 'mood'
	},
	{
		header: 'Medication Adherence',
		accessorKey: 'medicationAdherence'
	},
  {
    header: 'View Details',
    accessorKey: 'viewDetails',
    Cell: ({value}: { value: ReactNode }) => <div>{value}</div>
  }
]

export const Patients = () => {
	const data = [
		{
			id: 11,
			name: 'Dianne Russell',
			medication: 'Ibrutinib',
			symptoms: 'Muscle aches (Moderate)',
			physicalWellbeing: 7.1,
			mood: 8,
			medicationAdherence: 78,
			viewDetails: <Actions />
		},
		{
			id: 12,
			name: 'Marvin McKinney',
			medication: 'Acalabrutinib',
			symptoms: 'Fatigue',
			physicalWellbeing: 8.1,
			mood: 5.5,
			medicationAdherence: 78,
			viewDetails: <Actions />
		},
		{
			id: 13,
			name: 'Cameron Williamson',
			medication: 'Ibrutinib',
			symptoms: 'Diarrhea',
			physicalWellbeing: 5.5,
			mood: 4.8,
			medicationAdherence: 70,
			viewDetails: <Actions />
    }
	]

	return (
		<>
			<Header>
				<div className={s.text}>Patients</div>
				<div className={s.icons}>
					<Notifications />
					<HelpCenter />
				</div>
			</Header>
			<Table data={data} columns={columns} />
		</>
	)
}
