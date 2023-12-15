import { Header } from '../../components/header'
import { Notifications } from '../../assets/icons/notifications.tsx'
import { HelpCenter } from '../../assets/icons/help-center.tsx'
import s from './patients.module.scss'
import { Table } from '../../components/table/table.tsx'
import { Actions } from '../../assets/icons/actions.tsx'
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
		Cell: ({ value }: { value: ReactNode }) => value
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
			viewDetails: (
				<div>
					<Actions />
				</div>
			)
		},
		{
			id: 12,
			name: 'Marvin McKinney',
			medication: 'Acalabrutinib',
			symptoms: 'Fatigue',
			physicalWellbeing: 8.1,
			mood: 5.5,
			medicationAdherence: 78,
			viewDetails: (
				<div>
					<Actions />
				</div>
			)
		},
		{
			id: 13,
			name: 'Cameron Williamson',
			medication: 'Ibrutinib',
			symptoms: 'Diarrhea',
			physicalWellbeing: 5.5,
			mood: 4.8,
			medicationAdherence: 70,
			viewDetails: (
				<div>
					<Actions />
				</div>
			)
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
