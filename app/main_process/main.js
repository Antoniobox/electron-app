const {createMainWindow, setEventsForWindow} = require('./window.js')
const {initPacientesHandlers} = require('./handlers.js')
const {app} = require('electron')

/**
 * Crea la ventana principal e inicializa los eventos de la ventana
 */
function initMainWindow() {
	app.whenReady().then(()=>{
		createMainWindow()
		setEventsForWindow()
		initPacientesHandlers()
	})
}


initMainWindow()