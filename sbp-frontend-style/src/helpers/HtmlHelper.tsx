import parse, { Element } from 'html-react-parser'

export const parser = (input: string) =>
	parse(input, {
		replace: (domNode) => {
			if (domNode instanceof Element && domNode.attribs.class === 'remove') {
				return <></>
			}
		}
	}) as JSX.Element
