import reactElementToJSXString from 'react-element-to-jsx-string'
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter'
import tsx from 'react-syntax-highlighter/dist/esm/languages/hljs/typescript'
import html from 'react-syntax-highlighter/dist/esm/languages/hljs/xml'
import github from 'react-syntax-highlighter/dist/esm/styles/hljs/atom-one-dark'

SyntaxHighlighter.registerLanguage('tsx', tsx)
SyntaxHighlighter.registerLanguage('html', html)

interface Props {
	children: JSX.Element
}

const CodeBlock = ({ children }: Props) => {
	return (
		<SyntaxHighlighter language="html" style={github} showLineNumbers={true}>
			{reactElementToJSXString(children)
				//.replace(/(class=[\"\-\w\s]+")/gim, '')
				.replace(/(<[\w\s]+\><\/\w+\>)/gim, '')
				.replace(/(\w+)(="")/gim, `$1`)}
		</SyntaxHighlighter>
	)
}

export default CodeBlock
