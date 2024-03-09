
import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'
import { createServer as createViteServer } from 'vite'

const port = 3000

const currentDirname = path.dirname(fileURLToPath(import.meta.url))



async function createServer() {
	const app = express()
	const createPathHtml = (page) => path.join(currentDirname, '../public', `${page}.html`)
	const allStaticPath = (directory) => path.join(currentDirname, '../public', `${directory}`)
	const scriptPath = (pathJs) => path.join(currentDirname, '../src', `${pathJs}`)

	const vite = await createViteServer({
		server: { middlewareMode: true },
		appType: 'custom'
	})


	app.use(vite.middlewares)

	// JavaScript
	// app.use('/js', express.static(scriptPath('js')))

	//Fonts static
	app.use('/fonts', express.static(allStaticPath('fonts')))

	//Styles static
	app.use('/style', express.static(allStaticPath('styles')))

	//Images static
	app.use('/images', express.static(allStaticPath('images')))


	app.get('/', (req, res) => {
		res.sendFile(createPathHtml('index'))
	})


	app.listen(port)
}

createServer()



