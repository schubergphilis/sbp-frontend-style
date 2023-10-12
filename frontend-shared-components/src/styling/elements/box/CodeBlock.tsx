import reactElementToJsxString from 'react-element-to-jsx-string'
import xml from 'react-syntax-highlighter/dist/cjs/languages/hljs/xml'
import SyntaxHighlighter from 'react-syntax-highlighter/dist/cjs/light'
import github from 'react-syntax-highlighter/dist/cjs/styles/hljs/atom-one-dark'

SyntaxHighlighter.registerLanguage('xml', xml)

interface Props {
	children: JSX.Element
}

const CodeBlock = ({ children }: Props) => {
	return (
		<SyntaxHighlighter language="xml" style={github} showLineNumbers={true}>
			{reactElementToJsxString(children)
				//.replace(/(class=[\"\-\w\s]+")/gim, '')
				.replace(/(<[\w\s]+><\/\w+>)/gim, '')
				.replace(/(\w+)(="")/gim, `$1`)
				.replace(/(Styled\()(\w+)(\))/gim, '$2')
				.replace(/(styled\.)(\w+)/gim, '$2')
				.replace(/({function[\w\s(){}]+})/gim, '{function{}}')}
		</SyntaxHighlighter>
	)
}

export default CodeBlock
