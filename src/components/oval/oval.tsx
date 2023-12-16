type OvalProps = {
	width?: number
	height?: number
	borderRadius?: number
	color: string
}

export const Oval = ({ width = 8, height = 8, borderRadius = 4, color }: OvalProps) => {
	return <div style={{ width: width, height: height, background: color, borderRadius: borderRadius }}></div>
}
