import { Header } from '../../components/header'
import { ImageLogo } from '../../assets/images/image-logo.tsx'
import { LineLogo } from '../../assets/images/line-logo.tsx'
import { TextLogo } from '../../assets/images/text-logo.tsx'
import s from './home.module.scss'
import {
	Bar,
	BarChart,
	CartesianGrid,
	Cell,
	LabelList,
	Pie,
	PieChart,
	ResponsiveContainer,
	XAxis,
	YAxis
} from 'recharts'
import { Group } from '../../assets/icons/group.tsx'
import { CircularProgress, Typography } from '@mui/joy'
import { useCountUp } from 'use-count-up'
import { Face } from '../../assets/icons/face.tsx'
import { Man } from '../../assets/icons/man.tsx'

type CustomizedLabelProps = {
	cx: number
	cy: number
	midAngle: number
	innerRadius: number
	outerRadius: number
	percent: number
}

export const Home = () => {
	const data = [
		{
			gender: 'Male',
			number: 45
		},
		{
			gender: 'Female',
			number: 55
		}
	]

	const data2 = [
		{ name: 'Diarrhea', value: 37 },
		{ name: 'Heart palpitations', value: 25 },
		{ name: 'Muscle aches', value: 15 },
		{ name: 'Bruising', value: 13 },
		{ name: 'Fatigue', value: 10 }
	]

	const COLORS = ['#6960D7', '#C08EFF', '#52B793', '#2FBFDE', '#4EAAFF']

	const RADIAN = Math.PI / 180
	const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }: CustomizedLabelProps) => {
		const radius = innerRadius + (outerRadius - innerRadius) * 0.5
		const x = cx + radius * Math.cos(-midAngle * RADIAN)
		const y = cy + radius * Math.sin(-midAngle * RADIAN)

		return (
			<text x={x} y={y} fill='white' textAnchor={x > cx ? 'start' : 'end'} dominantBaseline='central'>
				{`${(percent * 100).toFixed(0)}%`}
			</text>
		)
	}

	const { value: value1 } = useCountUp({
		isCounting: true,
		duration: 1,
		start: 0,
		end: 71
	})

	const { value: value2 } = useCountUp({
		isCounting: true,
		duration: 1,
		start: 0,
		end: 82
	})

	const { value: value3 } = useCountUp({
		isCounting: true,
		duration: 1,
		start: 0,
		end: 85
	})

	return (
		<>
			<Header>
				<div className={s.text}>Hi, Edward, welcome back!</div>
				<div className={s.logo}>
					<ImageLogo />
					<LineLogo />
					<TextLogo />
				</div>
			</Header>
			<div className={s.gridContainer}>
				<div className={s.gridItem}>
					<div className={s.properties}>
						<div className={s.title}>
							<div className={s.iconBox}>
								<Group />
							</div>
							<p>Patients</p>
						</div>
						<div className={s.description}>
							This statistic shows the total number of patients and the sex distribution
						</div>
						<div className={s.countBox}>
							<div className={s.countValue}>20</div>
							<div className={s.countText}>Total number</div>
						</div>
						<div className={s.legend}>
							<div className={s.legendItem}>
								<div className={s.oval}></div>
								<div>Male</div>
								<div>45%</div>
							</div>
							<div className={s.legendItem}>
								<div className={s.oval}></div>
								<div>Female</div>
								<div>55%</div>
							</div>
						</div>
					</div>
					<div className={s.tinyBarChart}>
						<ResponsiveContainer width={242} height={176}>
							<BarChart width={150} height={54} data={data} barSize={56} barCategoryGap={42}>
								<CartesianGrid strokeDasharray={'3 3'} />
								<XAxis dataKey={'gender'}></XAxis>
								<YAxis dataKey={'number'}></YAxis>
								<Bar dataKey='number' fill='#6960D7' />
							</BarChart>
						</ResponsiveContainer>
					</div>
				</div>
				<div className={s.gridMiniContainer}>
					<div className={s.gridMiniItem}>
						<div className={s.gridItemBox}>
							<div className={s.iconBox}>
								<Man />
							</div>
							<div>
								<div>Physical Wellbeing</div>
								<div>17 patients reported</div>
							</div>
						</div>
						<div className={s.gridItemBox}>
							<div>
								<CircularProgress size='lg' determinate value={value1 as number}>
									<Typography>{value1 && `${[...String(value1)][0]},${[...String(value1)][1]}`}</Typography>
								</CircularProgress>
							</div>
							<div>Average score</div>
						</div>
					</div>
					<div className={s.gridMiniItem}>
						<div className={s.gridItemBox}>
							<div className={s.iconBox}>
								<Face />
							</div>
							<div>
								<div>Mood</div>
								<div>17 patients reported</div>
							</div>
						</div>
						<div className={s.gridItemBox}>
							<div>
								<CircularProgress size='lg' determinate value={value2 as number}>
									<Typography>{value2 && `${[...String(value2)][0]},${[...String(value2)][1]}`}</Typography>
								</CircularProgress>
							</div>
							<div>Average score</div>
						</div>
					</div>
					<div className={s.gridMiniItemMedication}>
						<div>Medication</div>
						<div className={s.linearProgressLegend}>
							<div className={s.linearProgressLegendItem}>
								<div className={s.oval}></div>
								<div>Ibrutinib</div>
								<div>40%</div>
							</div>
							<div className={s.linearProgressLegendItem}>
								<div className={s.oval}></div>
								<div>Аcalabrutinib</div>
								<div>37%</div>
							</div>
							<div className={s.linearProgressLegendItem}>
								<div className={s.oval}></div>
								<div>Zanubrutinib</div>
								<div>13%</div>
							</div>
							<div className={s.linearProgressLegendItem}>
								<div className={s.oval}></div>
								<div>Other</div>
								<div>10%</div>
							</div>
						</div>
					</div>
				</div>
				<div className={s.gridItem}>
					<div className={s.properties}>
						<div className={s.title}>Patient Response Rate</div>
						<div className={s.description2}>
							This statistic shows the percentage of patients who sent a report at least once in the last 7 days
						</div>
						<div>17 patients reported</div>
						<div>from 20 patients</div>
					</div>
					<div>
						<div className={s.bigPie}>
							<CircularProgress size='lg' determinate value={value3 as number}>
								<Typography>{`${value3}%`}</Typography>
							</CircularProgress>
						</div>
						<div className={s.legend}>
							<div className={s.legendItem}>
								<div className={s.oval}></div>
								<div>Reported</div>
							</div>
							<div className={s.legendItem}>
								<div className={s.oval}></div>
								<div>Not reported</div>
							</div>
						</div>
					</div>
				</div>
				<div className={s.gridItem}>
					<div style={{ width: '100%' }}>
						<span>Symptom Summary</span>
						<ResponsiveContainer width='100%' height='100%'>
							<PieChart width={160} height={160}>
								<Pie
									data={data2}
									cx='50%'
									cy='43%'
									labelLine={false}
									label={renderCustomizedLabel}
									outerRadius={80}
									fill='#8884d8'
									dataKey='value'
								>
									{data.map((_, index) => (
										<Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
									))}
									<LabelList dataKey='name' position='outside' stroke='#55517A' offset={24} />
								</Pie>
							</PieChart>
						</ResponsiveContainer>
					</div>
				</div>
			</div>
		</>
	)
}
