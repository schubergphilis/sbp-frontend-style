import Accordion from 'components/organisms/Accordion'
import ComponentOptionModel from 'models/ComponentOptionModel'
import ComponentBox from 'styling/elements/box/ComponentBox'

const AccordionComponentBox = () => {
	const options: ComponentOptionModel[] = [
		{
			title: 'Controlled',
			name: 'isControlled',
			type: 'boolean',
			defaultValue: false,
			value: null
		},
		{
			title: 'Show selected',
			name: 'showSelected',
			type: 'boolean',
			defaultValue: false,
			value: null
		},
		{
			title: 'Default expand',
			name: 'expand[0]',
			type: 'number',
			defaultValue: null,
			value: 1
		}
	]
	return (
		<ComponentBox
			title="Accordion"
			description="The Accordion component lets users show and hide sections of related content on a page."
			options={options}>
			<Accordion
				list={[
					{
						title: 'Can AI popstars make it in the real world?',
						content:
							'They sing, they dance, they model, but they do not exist in real life - virtual influencers are trying to break out of the metaverse and into the charts. From Alvin and The Chipmunks to Gorillaz, and Hatsune Miku to Polar, the music industry is no stranger to virtual characters as popstars.'
					},
					{
						title: 'Is natural gas heavier or lighter than air?',
						content:
							'Lighter-than-air natural gas (methane) should not be confused with liquefied petroleum gas. This gas is more commonly called L.P., bottle gas, propane, butane and various other trade names. Liquefied petroleum gases are all heavier than air and will collect in low places when not confined.'
					},
					{
						title: 'Who is on the one thousand dollar bill?',
						content:
							'The $1,000 bill featured Grover Cleveland on the obverse and the words "One Thousand Dollars" on the reverse. It was printed as a small-size Federal Reserve Note in 1918, 1934 and 1934A, and a small-size Gold Certificate in 1928 and 1934.'
					}
				]}
			/>
		</ComponentBox>
	)
}

export default AccordionComponentBox
