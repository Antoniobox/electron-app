const { app, BrowserWindow, ipcMain } = require('electron')
const path = require('path')

const createWindow = ()=>{
	var win = new BrowserWindow({
		width: 800,
		heigth: 600,
		webPreferences: {
			preload: path.join(__dirname, "../preloads/p_paciente.js")
		}
	})

	win.loadFile("../views/index/index.html")
	win.openDevTools()
}

ipcMain.handle("getPacientes", async (event, args)=>{
	const {Paciente} = require('./paciente.js')
	const pacientes = await Paciente.getRows()
	return pacientes
})

app.whenReady().then(()=>{
	createWindow()

	app.on("activate", ()=>{
		if(BrowserWindow.getAllWindows.length===0) createWindow()
	})	

	app.on("window-all-closed", ()=>{
		if(process.platform!=="darwin") app.quit()
	})
})