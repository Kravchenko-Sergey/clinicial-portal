import { ReactNode } from 'react'

import s from './sidebar.module.scss'

type SidebarProps = {
	children: ReactNode
	className?: string
}

export const Sidebar = ({ children, className }: SidebarProps) => {
	return <aside className={`${s.root} ${className}`}>{children}</aside>
}
