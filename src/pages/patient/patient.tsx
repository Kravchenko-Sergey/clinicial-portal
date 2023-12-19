import { Header } from 'components/header'
import {
	Bar,
	BarChart,
	CartesianGrid,
	Label,
	Line,
	LineChart,
	ResponsiveContainer,
	XAxis,
	YAxis,
	Tooltip
} from 'recharts'
import { Calendar, Size } from 'assets/icons'
import s from './patient.module.scss'
import { ArrowForward } from 'assets/icons'
import { useNavigate, useParams } from 'react-router-dom'
import { useState } from 'react'
import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material'
import { PATH } from '@/router'
import { Oval } from 'components/oval'

export const Patient = () => {
	const [selectValue, setSelectValue] = useState('')
	const navigate = useNavigate()
	const { id } = useParams()

	const data = [
		{
			name: 'Diarrhea',
			number: 77
		},
		{
			name: 'Bruising',
			number: 45
		},
		{
			name: 'Muscle Aches',
			number: 43
		},
		{
			name: 'Fatigue',
			number: 40
		},
		{
			name: 'Heart Palpitations',
			number: 30
		}
	]

	const data2 = [
		{
			date: 'Nov 7',
			symptomSeverity: 'Very Severe',
			uv: 4000,
			pv: 2400,
			amt: 2400
		},
		{
			date: 'Nov 8',
			symptomSeverity: 'Severe',
			uv: 3000,
			pv: 1398,
			amt: 2210
		},
		{
			date: 'Nov 9',
			symptomSeverity: 'Moderate',
			uv: 2000,
			pv: 9800,
			amt: 2290
		},
		{
			date: 'Nov 10',
			symptomSeverity: 'Mild',
			uv: 2780,
			pv: 3908,
			amt: 2000
		},
		{
			date: 'Nov 11',
			symptomSeverity: 'None',
			uv: 1890,
			pv: 4800,
			amt: 2181
		},
		{
			date: 'Nov 12',
			uv: 2390,
			pv: 3800,
			amt: 2500
		},
		{
			date: 'Nov 13',
			uv: 3490,
			pv: 4300,
			amt: 2100
		}
	]

	const data3 = [
		{
			date: 'Nov 7',
			uv: 8,
			pv: 6
		},
		{
			date: 'Nov 8',
			uv: 7.1,
			pv: 6.8
		},
		{
			date: 'Nov 9',
			uv: 6,
			pv: 8.3
		},
		{
			date: 'Nov 10',
			uv: 7.2,
			pv: 7.9
		},
		{
			date: 'Nov 11',
			uv: 10,
			pv: 8.8
		},
		{
			date: 'Nov 12',
			uv: 8.2,
			pv: 6.2
		},
		{
			date: 'Nov 13',
			uv: 7.1,
			pv: 8
		}
	]

	const handleChange = (event: SelectChangeEvent) => {
		setSelectValue(event.target.value)
	}

	const handleAllPatientsBtn = () => navigate(PATH.PATIENTS)

	return (
		<>
			<div className={s.nav}>
				<div className={s.allPatients} onClick={handleAllPatientsBtn}>
					All Patients
				</div>
				<ArrowForward />
				<div className={s.patientName}>{id}</div>
			</div>
			<Header>
				<h2 className={s.text}>Symptoms</h2>
				<Calendar />
			</Header>
			<div className={s.gridContainer}>
				<div className={`${s.gridItem} ${s.gridItem1}`}>
					<div className={s.gridItemTitleBox}>
						<div className={s.gridItemTitle}>Patient Symptoms</div>
						<Size />
					</div>
					<ResponsiveContainer width={'70%'} height={154}>
						<BarChart width={542} height={154} data={data} barSize={18} barCategoryGap={'20%'}>
							<CartesianGrid strokeDasharray={'5 5'} vertical={false} />
							<XAxis dataKey={'name'} axisLine={false} tickLine={false}></XAxis>
							<YAxis
								dataKey={'number'}
								tickCount={6}
								tickMargin={8}
								domain={[0, 100]}
								axisLine={false}
								tickLine={false}
							>
								<Label value='Number of Times Reported' offset={0} position='center' angle={-90} />
							</YAxis>
							<Bar dataKey='number' fill='#6960D7' />
						</BarChart>
					</ResponsiveContainer>
				</div>
				<div className={`${s.gridItem} ${s.gridItem2}`}>
					<div className={s.gridItemTitleBox}>
						<div className={s.gridItemTitle}>Symptom Severity</div>
						<div className={s.select}>
							<FormControl>
								<InputLabel id='demo-simple-select-label'>Symptom</InputLabel>
								<Select
									labelId='demo-simple-select-label'
									id='demo-simple-select'
									value={selectValue}
									label='Age'
									onChange={handleChange}
									size={'small'}
									sx={{ width: '126px', height: '32px', justifyContent: 'end' }}
								>
									<MenuItem value={'Fatigue'}>Fatigue</MenuItem>
									<MenuItem value={'Diarrhea'}>Diarrhea</MenuItem>
									<MenuItem value={'Bruising'}>Bruising</MenuItem>
								</Select>
							</FormControl>
							<Size />
						</div>
					</div>
					<ResponsiveContainer width='70%' height='100%'>
						<LineChart width={500} height={100} data={data2}>
							<Line type='monotone' dataKey='pv' stroke='#8884d8' strokeWidth={2} />
							<CartesianGrid strokeDasharray='5 5' vertical={false} />
							<XAxis dataKey='date' axisLine={false} tickLine={false} tickMargin={4} />
							<YAxis axisLine={false} tickLine={false} tickMargin={8} />
							<Tooltip
								content={
									<div className={s.tooltipContent}>
										<div>
											<p>November 10</p>
										</div>
										<div>
											<p>Severity:</p>
											<p>Moderate</p>
										</div>
										<div>
											<p>Symptoms:</p>
											<p>Fatigue</p>
										</div>
									</div>
								}
							/>
						</LineChart>
					</ResponsiveContainer>
				</div>
				<div className={s.gridItem3}>
					<div className={s.gridItem3TitleBox}>
						<h2 className={s.text}>Patient Scores</h2>
						<Calendar />
					</div>
					<div className={s.gridItem3Content}>
						<div className={s.gridItem3Chart}>
							<div className={s.gridItemTitleBox}>
								<div className={s.gridItemTitle}>Physical Wellbeing and Mood</div>
								<div className={s.legend}>
									<div className={s.legendItem}>
										<Oval color='#FF5193' />
										<p>Physical Wellbeing</p>
									</div>
									<div className={s.legendItem}>
										<Oval color='#FCBD63' />
										<p>Mood</p>
									</div>
								</div>
							</div>
							<ResponsiveContainer width='100%' height='100%'>
								<LineChart
									width={500}
									height={300}
									data={data3}
									margin={{
										top: 5,
										right: 55,
										left: 20,
										bottom: 5
									}}
								>
									<CartesianGrid strokeDasharray='5 5' vertical={false} />
									<XAxis dataKey='date' axisLine={false} tickLine={false} tickMargin={8} />
									<YAxis tickCount={6} domain={[0, 10]}>
										<Label value='Score' offset={0} position='center' angle={-90} />
									</YAxis>
									<Line type='monotone' dataKey='pv' stroke='#FF5492' activeDot={{ r: 8 }} />
									<Line type='monotone' dataKey='uv' stroke='#FFAE63' />
									<Tooltip
										content={
											<div className={s.tooltipContent}>
												<div>
													<p>November 10</p>
												</div>
												<div>
													<p>Mental State:</p>
													<p>7 / 10</p>
												</div>
												<div>
													<p>Symptoms:</p>
													<p>Fatigue</p>
												</div>
											</div>
										}
									/>
								</LineChart>
							</ResponsiveContainer>
						</div>
						<div className={s.gridItem3Info}>
							<div className={s.gridItem3InfoItem}>
								<p className={s.gridItem3InfoItemTitle}>Physical Wellbeing</p>
								<p className={s.gridItem3InfoItemSubtitle}>Average score</p>
								<p className={s.gridItem3InfoItemValue1}>7.1</p>
							</div>
							<div className={s.gridItem3InfoItem}>
								<p className={s.gridItem3InfoItemTitle}>Mood</p>
								<p className={s.gridItem3InfoItemSubtitle}>Average score</p>
								<p className={s.gridItem3InfoItemValue2}>8.2</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
