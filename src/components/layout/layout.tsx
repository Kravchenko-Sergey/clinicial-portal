import { Outlet, useNavigate } from 'react-router-dom'
import s from './layout.module.scss'
import { Sidebar } from '../sidebar'
import { Printer } from '../../assets/icons/printer.tsx'
import { Acecancer } from '../../assets/icons/acecancer.tsx'
import { Home } from '../../assets/icons/home.tsx'
import { People } from '../../assets/icons/people.tsx'

export const Layout = () => {
	const navigate = useNavigate()

	return (
		<div className={s.wrapper}>
			<Sidebar>
				<div className={s.item}>
					<div>Powered By</div>
					<Acecancer />
				</div>
				<div className={s.item} onClick={() => navigate('/home')}>
					<Home />
					<div>Home</div>
				</div>
				<div className={s.item} onClick={() => navigate('/patients')}>
					<People />
					<div>Patients</div>
				</div>
				<div className={s.item}>
					<Printer />
				</div>
			</Sidebar>
			<main className={s.main}>
				<Outlet />
			</main>
			<footer></footer>
		</div>
	)
}
