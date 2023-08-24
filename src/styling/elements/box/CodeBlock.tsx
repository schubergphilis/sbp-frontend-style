import reactElementToJsxString from 'react-element-to-jsx-string'
import SyntaxHighlighter from 'react-syntax-highlighter/dist/cjs/light'
// import typescript from 'react-syntax-highlighter/dist/esm/languages/hljs/typescript'
// import xml from 'react-syntax-highlighter/dist/esm/languages/hljs/xml'
import github from 'react-syntax-highlighter/dist/cjs/styles/hljs/atom-one-dark'

// SyntaxHighlighter.registerLanguage('tsx', typescript)
// SyntaxHighlighter.registerLanguage('html', xml)

interface Props {
	children: JSX.Element
}

const CodeBlock = ({ children }: Props) => {
	return (
		<SyntaxHighlighter language="html" style={github} showLineNumbers={true}>
			{reactElementToJsxString(children)
				//.replace(/(class=[\"\-\w\s]+")/gim, '')
				.replace(/(<[\w\s]+\><\/\w+\>)/gim, '')
				.replace(/(\w+)(="")/gim, `$1`)}
		</SyntaxHighlighter>
	)
}

export default CodeBlock
