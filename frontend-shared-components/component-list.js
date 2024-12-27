import directoryTree from 'directory-tree'
import fs from 'fs'
import { Readable } from 'stream'
import { finished } from 'stream/promises'

const start = async () => {
	const stream = fs.createWriteStream('./src/component-list.json')
	const body = directoryTree('./src/components/', {
		extensions: /\.tsx/,
		exclude: /icons|debugger/
	})
	const data = JSON.stringify(body)
	await finished(Readable.from(data).pipe(stream))
}

// Call start
start()
