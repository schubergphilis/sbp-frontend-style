import DeviceSizeModel from '../models/DeviceSizeModel'

export const deviceSize: DeviceSizeModel = {
	mobile: '360px',
	tablet: '768px',
	laptop: '1024px',
	desktop: '1445px'
}

export const device: DeviceSizeModel = {
	mobile: `(min-width: ${deviceSize.mobile})`,
	tablet: `(min-width: ${deviceSize.tablet})`,
	laptop: `(min-width: ${deviceSize.laptop})`,
	desktop: `(min-width: ${deviceSize.desktop})`
}
