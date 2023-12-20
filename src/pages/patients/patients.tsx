import { Header } from 'components/header'
import { ContentPaste, Info, Notifications } from 'assets/icons'
import { HelpCenter } from 'assets/icons'
import s from './patients.module.scss'
import { Table } from 'components/table'
import { Oval } from 'components/oval'
import { Tooltip } from '@mui/material'

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
					<p>medication</p>
					<p>Dose / frequency</p>
				</div>
			)
		},
		accessorKey: 'medication',
		cell: ({ row }: { row: any }) => {
			return (
				<div className={s.medicationCell}>
					<p>{row.original.medication}</p>
					<p>(560mg / QD)</p>
				</div>
			)
		}
	},
	{
		header: () => {
			return (
				<div className={s.symptomsHeaderCell}>
					<div>symptoms</div>
					<div>
						<p>Severity</p>
						<Tooltip
							title={
								<div className={s.symptomsTooltip}>
									<div>
										<Oval color='#FF0000' />
										<p>Very Severe</p>
									</div>
									<div>
										<Oval color='#FF8A00' />
										<p>Severe</p>
									</div>
									<div>
										<Oval color='#F3CE4D' />
										<p>Moderate</p>
									</div>
									<div>
										<Oval color='#4ABF7A' />
										<p>Mild</p>
									</div>
								</div>
							}
						>
							<div style={{ cursor: 'pointer' }}>
								<Info />
							</div>
						</Tooltip>
					</div>
				</div>
			)
		},
		accessorKey: 'symptoms',
		cell: ({ row }: { row: any }) => {
			return (
				<div className={s.symptomsCell}>
					<div>
						<Oval color='#F3CE4D' />
						<p>{row.original.symptoms}</p>
					</div>
					<div>
						<Oval color='#4ABF7A' />
						<p>{row.original.symptoms}</p>
					</div>
					<div>
						<Oval color='#FF1010' />
						<p>{row.original.symptoms}</p>
					</div>
				</div>
			)
		}
	},
	{
		header: () => {
			return (
				<div className={s.physicalWellbeingHeaderCell}>
					<p>Physical Wellbeing</p>
					<p>In the last 7 days</p>
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
					<p>mood</p>
					<p>In the last 7 days</p>
				</div>
			)
		},
		accessorKey: 'mood',
		sortable: true,
		cell: ({ row }: { row: any }) => {
			return (
				<div className={s.moodCell}>
					<p>{row.original.mood}</p>
				</div>
			)
		}
	},
	{
		header: () => {
			return (
				<div className={s.medicationAdherenceHeaderCell}>
					<p>Medication Adherence</p>
					<p>In the last 7 days</p>
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
		cell: () => (
			<div className={s.viewDetailsCell}>
				<ContentPaste />
			</div>
		)
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
			medicationAdherence: 78
		},
		{
			id: 12,
			name: 'Marvin McKinney',
			medication: 'Acalabrutinib',
			symptoms: 'Heart palpitations (Mild)',
			physicalWellbeing: 8.1,
			mood: 5.5,
			medicationAdherence: 78
		},
		{
			id: 13,
			name: 'Cameron Williamson',
			medication: 'Ibrutinib',
			symptoms: 'Diarrhea (Severe)',
			physicalWellbeing: 5.5,
			mood: 4.8,
			medicationAdherence: 70
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
