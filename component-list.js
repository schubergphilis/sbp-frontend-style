const fs = require('fs')
const { Readable } = require('stream')
const { finished } = require('stream/promises')
const directoryTree = require('directory-tree')

const start = async () => {
	const stream = fs.createWriteStream(`./src/component-list.json`)
	const body = directoryTree('./src/components/', {
		extensions: /\.tsx/,
		exclude: /icons|debugger/
	})
	const data = JSON.stringify(body)
	await finished(Readable.from(data).pipe(stream))
}

// Call start
start()
