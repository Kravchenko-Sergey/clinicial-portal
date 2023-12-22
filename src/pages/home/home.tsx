import { Header } from 'components/header'
import { ImageLogo } from 'assets/images'
import { LineLogo } from 'assets/images'
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
import { Group, Info } from 'assets/icons'
import { CircularProgress, Typography } from '@mui/joy'
import { useCountUp } from 'use-count-up'
import { Face } from 'assets/icons'
import { Man } from 'assets/icons'
import { divideValue } from '@/helpers'
import { Oval } from 'components/oval'
import { IconBox } from 'components/icon-box/icon-box.tsx'
import { Tooltip } from '@mui/material'
import { TooltipHomeLogo } from 'assets/images/tooltip-home-logo.tsx'

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
					<img src='src/assets/images/Logo.svg' alt='text logo' />
					<Tooltip
						title={
							<div className={s.tooltipHomeLogo} style={{ backgroundColor: '#FFF' }}>
								<TooltipHomeLogo />
								<p>
									<span>UT Health San Antonio MD Anderson Cancer Center</span> is proud to offer world-renowned cancer
									care. We are the only NCI cancer center in Central and South Texas.
								</p>
							</div>
						}
						sx={{ backgroundColor: 'blue' }}
					>
						<div style={{ cursor: 'pointer', paddingTop: '8px' }}>
							<Info />
						</div>
					</Tooltip>
				</div>
			</Header>
			<div className={s.gridContainer}>
				<div className={`${s.gridItem} ${s.gridItem1}`}>
					<div className={s.properties}>
						<h3 className={s.title}>
							<IconBox className={s.iconBox}>
								<Group />
							</IconBox>
							<p>Patients</p>
						</h3>
						<div className={s.description}>
							This statistic shows the total number of patients and the sex distribution
						</div>
						<div className={s.countBox}>
							<div className={s.countValue}>20</div>
							<div className={s.countText}>Total number</div>
						</div>
						<div className={s.legend}>
							<div className={s.legendItem}>
								<Oval color={'#6960D7'} />
								<div>Male</div>
								<div>45%</div>
							</div>
							<div className={s.legendItem}>
								<Oval color={'#e0ddff'} />
								<div>Female</div>
								<div>55%</div>
							</div>
						</div>
					</div>
					<div className={s.tinyBarChart}>
						<ResponsiveContainer width='100%' height='76%'>
							<BarChart width={150} height={54} data={data} maxBarSize={56} barCategoryGap={'20%'}>
								<CartesianGrid strokeDasharray={'5 5'} vertical={false} />
								<XAxis dataKey={'gender'} axisLine={false} tickLine={false} tickMargin={8}></XAxis>
								<YAxis
									dataKey={'number'}
									tickCount={3}
									tickMargin={8}
									domain={[0, 100]}
									axisLine={false}
									tickLine={false}
								></YAxis>
								<Bar dataKey='number' fill='#6960D7' />
							</BarChart>
						</ResponsiveContainer>
					</div>
				</div>
				<div className={`${s.gridItem} ${s.gridItem2}`}>
					<div className={s.gridItemBox}>
						<IconBox color={'#FF5492'} className={s.iconBox}>
							<Man />
						</IconBox>
						<div>
							<h3 className={s.title}>Physical Wellbeing</h3>
							<div>17 patients reported</div>
						</div>
					</div>
					<div className={s.gridItemBox}>
						<div>
							<CircularProgress size='lg' determinate value={Number(value1)} className={s.customBackground1}>
								<Typography sx={{ fontSize: '22px', fontWeight: 700 }}>{divideValue(Number(value1))}</Typography>
							</CircularProgress>
						</div>
						<div>Average score</div>
					</div>
				</div>
				<div className={`${s.gridItem} ${s.gridItem3}`}>
					<div className={s.gridItemBox}>
						<IconBox color={'#FFAE63'} className={s.iconBox}>
							<Face />
						</IconBox>
						<div>
							<h3 className={s.title}>Mood</h3>
							<p>17 patients reported</p>
						</div>
					</div>
					<div className={s.gridItemBox}>
						<div>
							<CircularProgress size='lg' determinate value={Number(value2)} className={s.customBackground2}>
								<Typography sx={{ fontSize: '20px', fontWeight: 700 }}>{divideValue(Number(value2))}</Typography>
							</CircularProgress>
						</div>
						<div>Average score</div>
					</div>
				</div>
				<div className={`${s.gridItem} ${s.gridItem4}`}>
					<h3 className={s.title}>Medication</h3>
					<div className={s.linearProgressLegend}>
						<div className={s.linearProgressLegendItem}>
							<Oval color={'#6960D7'} />
							<p>Ibrutinib</p>
							<p>40%</p>
						</div>
						<div className={s.linearProgressLegendItem}>
							<Oval color={'#8593ed'} />
							<p>Аcalabrutinib</p>
							<p>37%</p>
						</div>
						<div className={s.linearProgressLegendItem}>
							<Oval color={'#c7ceff'} />
							<p>Zanubrutinib</p>
							<p>13%</p>
						</div>
						<div className={s.linearProgressLegendItem}>
							<Oval color={'#e3e4e8'} />
							<p>Other</p>
							<p>10%</p>
						</div>
					</div>
				</div>
				<div className={`${s.gridItem} ${s.gridItem5}`}>
					<div className={s.properties}>
						<h3 className={s.title}>Patient Response Rate</h3>
						<p className={s.description2}>
							This statistic shows the percentage of patients who sent a report at least once in the last 7 days
						</p>
						<p>
							<span className={s.reportedCount}>17</span> patients reported
						</p>
						<p className={s.fromPatients}>from 20 patients</p>
					</div>
					<div>
						<div className={s.bigPie}>
							<CircularProgress size='lg' determinate value={Number(value3)} className={s.customBackground3}>
								<Typography sx={{ fontSize: '20px', fontWeight: 700 }}>{`${value3}%`}</Typography>
							</CircularProgress>
						</div>
						<div className={s.legend}>
							<div className={s.legendItem}>
								<Oval color={'#6960D7'} />
								<p>Reported</p>
							</div>
							<div className={s.legendItem}>
								<Oval color={'#d2d0f1'} />
								<p>Not reported</p>
							</div>
						</div>
					</div>
				</div>
				<div className={`${s.gridItem} ${s.gridItem6}`}>
					<div style={{ width: '100%' }}>
						<h3 className={s.title}>Symptom Summary</h3>
						<ResponsiveContainer width='100%' height='100%'>
							<PieChart width={160} height={160}>
								<Pie
									data={data2}
									cx='50%'
									cy='43%'
									labelLine={false}
									label={renderCustomizedLabel}
									outerRadius={80}
									dataKey='value'
								>
									{data2.map((_, index) => (
										<Cell key={`cell-${index}`} fill={COLORS[index]} />
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
