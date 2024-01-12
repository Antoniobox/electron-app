const {BrowserWindow, app} = require('electron')
const path = require('path')

/**
 * Instancia la ventana principal
 */
function createMainWindow() {
	const win = new BrowserWindow({
		width: 800,
		height: 600,
		webPreferences: {
			preload: path.join(__dirname, "../preloads/p_paciente.js")
		}
	})

	win.loadFile("../views/index/index.html")
	win.openDevTools()
}

/**
 * Controla todos los eventos que tiene la ventana principal
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