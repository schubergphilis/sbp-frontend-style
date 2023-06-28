interface Props {
	width?: number
	height?: number
}
const LogoIcon = ({ width = 128, height = 128 }: Props) => {
	return (
		<svg
			version="1.1"
			width={width}
			height={height}
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 256 256">
			<circle cx="128" cy="128" r="127.5" fill="#1E80ED" />
			<path
				id="Fill-16_00000121980988982740644460000000857136976438615438_"
				fill="#020C17"
				d="M85,34.3c-0.3-1.5,0.6-2.1,1.8-2.1h12
	c5,0,7.6,1.5,9.7,7.6l62.5,181.9c0.3,1.2,0,2.1-1.2,2.1h-12.3c-4.4,0-7.6-1.5-9.7-7.6L85,34.3"
			/>
		</svg>
	)
}

export default LogoIcon
