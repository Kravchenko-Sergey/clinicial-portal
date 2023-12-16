import { ReactNode } from 'react'

type IconBoxProps = {
	children?: ReactNode
	className?: string
	width?: number
	height?: number
	color?: string
}

export const IconBox = ({ children, className, width = 32, height = 32, color }: IconBoxProps) => {
	return (
		<div className={className && className} style={{ width: width, height: height, background: color }}>
			{children}
		</div>
	)
}
