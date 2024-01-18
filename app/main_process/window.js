const {BrowserWindow, app} = require('electron')
const path = require('path')

/**
 * Medidas de la ventana principal
 */
const WINDOW_SIZE = {
	WIDTH: 800,
	HEIGHT: 600
}

const PACIENTE_PRELOAD = "../preloads/p_paciente.js"

/**
 * Instancia la ventana principal
 */
function createMainWindow() {
	const win = new BrowserWindow({
		width: WINDOW_SIZE.WIDTH,
		height: WINDOW_SIZE.HEIGHT,
		webPreferences: {
			preload: path.join(__dirname, PACIENTE_PRELOAD)
		}
	})

	win.loadFile("../views/index/index.html")
	win.openDevTools()
}

/**
 * Agrega los eventos básicos para las ventanas
 */
function setEventsForWindow() {
	app.on("activate", ()=>{
		if(BrowserWindow.getAllWindows().length===0) createMainWindow()
	})	

	app.on("window-all-closed", ()=>{
		if(process.platform!=="darwin") app.quit()
	})
}

module.exports = {createMainWindow, setEventsForWindow}