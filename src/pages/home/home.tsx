import { Header } from '../../components/header'
import { ImageLogo } from '../../assets/images/image-logo.tsx'
import { LineLogo } from '../../assets/images/line-logo.tsx'
import { TextLogo } from '../../assets/images/text-logo.tsx'
import s from './home.module.scss'
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import { Group } from '../../assets/icons/group.tsx'

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
						<div className={s.legend}></div>
					</div>
					<div className={s.tinyBarChart}>
						<ResponsiveContainer width={212} height={130}>
							<BarChart width={150} height={54} data={data}>
								<CartesianGrid strokeDasharray={'3 3'} />
								<XAxis dataKey={'gender'}></XAxis>
								<YAxis dataKey={'number'}></YAxis>

								<Tooltip />
								<Bar dataKey='number' fill='#6960D7' />
							</BarChart>
						</ResponsiveContainer>
					</div>
				</div>
				<div className={s.gridMiniContainer}>
					<div className={s.gridMiniItem}></div>
					<div className={s.gridMiniItem}></div>
					<div className={s.gridMiniItem}></div>
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
				</div>
				<div className={s.gridItem}>
					<div>Symptom Summary</div>
				</div>
			</div>
		</>
	)
}
