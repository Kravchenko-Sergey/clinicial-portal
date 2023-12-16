import { NavLink, Outlet } from 'react-router-dom'
import s from './layout.module.scss'
import { Sidebar } from 'components/sidebar'
import { Illustration, Printer } from 'assets/icons'
import { Acecancer } from 'assets/icons'
import { Home } from 'assets/icons'
import { People } from 'assets/icons'
import { PATH } from '@/router'

export const Layout = () => {
	return (
		<>
			<Sidebar className={s.sidebar}>
				<div className={s.itemLogo}>
					<h3>Powered By</h3>
					<Acecancer />
				</div>
				<nav className={s.navList}>
					<NavLink
						to={PATH.HOME}
						className={({ isActive }) => (isActive ? `${s.navItem} ${s.active}` : `${s.navItem}`)}
					>
						<Home />
						<h3>Home</h3>
					</NavLink>
					<NavLink
						to={PATH.PATIENTS}
						className={({ isActive }) => (isActive ? `${s.navItem} ${s.active}` : `${s.navItem}`)}
					>
						<People />
						<h3>Patients</h3>
					</NavLink>
				</nav>
				<div className={s.printer}>
					<Illustration />
					<div className={s.printerIconBox}>
						<Printer />
					</div>
				</div>
			</Sidebar>
			<main className={s.main}>
				<Outlet />
			</main>
		</>
	)
}
