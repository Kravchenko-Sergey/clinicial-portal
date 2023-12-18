import { Header } from 'components/header'
import { Actions, Notifications } from 'assets/icons'
import { HelpCenter } from 'assets/icons'
import s from './patients.module.scss'
import { Table } from 'components/table'
import { Oval } from 'components/oval'

const columns: any = [
	{
		header: 'name',
		accessorKey: 'name',
		sortable: true,
		cell: ({ row }: { row: any }) => {
			return <div className={s.nameCell}>{row.original.name}</div>
		}
	},
	{
		header: () => {
			return (
				<div className={s.medicationHeaderCell}>
					<div>medication</div>
					<div>Dose / frequency</div>
				</div>
			)
		},
		accessorKey: 'medication',
		cell: ({ row }: { row: any }) => {
			return (
				<div className={s.medicationCell}>
					<div>{row.original.medication}</div>
					<div>(560mg / QD)</div>
				</div>
			)
		}
	},
	{
		header: () => {
			return (
				<div className={s.symptomsHeaderCell}>
					<div>symptoms</div>
					<div>Severity</div>
				</div>
			)
		},
		accessorKey: 'symptoms',
		cell: ({ row }: { row: any }) => {
			return (
				<div className={s.symptomsCell}>
					<div>
						<Oval color='#F3CE4D' />
						<div>{row.original.symptoms}</div>
					</div>
					<div>
						<Oval color='#4ABF7A' />
						<div>{row.original.symptoms}</div>
					</div>
					<div>
						<Oval color='#FF1010' />
						<div>{row.original.symptoms}</div>
					</div>
				</div>
			)
		}
	},
	{
		header: () => {
			return (
				<div className={s.physicalWellbeingHeaderCell}>
					<div>Physical Wellbeing</div>
					<div>In the last 7 days</div>
				</div>
			)
		},
		accessorKey: 'physicalWellbeing',
		sortable: true,
		cell: ({ row }: { row: any }) => {
			return <div className={s.physicalWellbeingCell}>{row.original.physicalWellbeing}</div>
		}
	},
	{
		header: () => {
			return (
				<div className={s.moodHeaderCell}>
					<div>mood</div>
					<div>In the last 7 days</div>
				</div>
			)
		},
		accessorKey: 'mood',
		sortable: true,
		cell: ({ row }: { row: any }) => {
			return (
				<div className={s.moodCell}>
					<div>{row.original.mood}</div>
				</div>
			)
		}
	},
	{
		header: () => {
			return (
				<div className={s.medicationAdherenceHeaderCell}>
					<div>Medication Adherence</div>
					<div>In the last 7 days</div>
				</div>
			)
		},
		accessorKey: 'medicationAdherence',
		sortable: true,
		cell: ({ row }: { row: any }) => {
			return <div className={s.medicationAdherenceCell}>{row.original.medicationAdherence}</div>
		}
	},
	{
		header: 'View Details',
		accessorKey: 'viewDetails',
		cell: ({ row }: { row: any }) => {
			return <div className={s.viewDetailsCell}>{row.original.viewDetails}</div>
		}
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
			symptoms: 'Heart palpitations (Mild)',
			physicalWellbeing: 8.1,
			mood: 5.5,
			medicationAdherence: 78,
			viewDetails: <Actions />
		},
		{
			id: 13,
			name: 'Cameron Williamson',
			medication: 'Ibrutinib',
			symptoms: 'Diarrhea (Severe)',
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
