import { Header } from '../../components/header'
import { Notifications } from '../../assets/icons/notifications.tsx'
import { HelpCenter } from '../../assets/icons/help-center.tsx'
import s from './patients.module.scss'

export const Patients = () => {
	return (
		<div>
			<Header>
				<div className={s.text}>Patients</div>
				<div className={s.icons}>
					<Notifications />
					<HelpCenter />
				</div>
			</Header>
		</div>
	)
}
