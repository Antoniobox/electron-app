const { ipcMain, BrowserWindow } = require('electron')
const {Paciente} = require('./paciente.js')
const path = require('node:path')

/** 
  * Inicializa los handlers relaciones con los pacientes
 */
function initPacientesHandlers() {
	ipcMain.handle("getPacientes", async (event, args)=>{
		const {Paciente} = require('./paciente.js')
		const pacientes = await Paciente.getRows()
		return pacientes
	})
	ipcMain.handle("getMedico", async (event, args)=>{
		const {Paciente} = require('./paciente.js')
		const medico = await Paciente.getMedico(args)
		return medico
	})
	ipcMain.handle("editar", async (event, args)=>{
		const ventanaEditar = new BrowserWindow({
			width: 800,
			height: 600,
			webPreferences: {
				preload: path.join(__dirname, "../preloads/p_editar_paciente.js")
			}
		})
		ventanaEditar.loadFile('../views/edit/edit.html')
		ventanaEditar.openDevTools()

		let paciente = new Paciente(true, args)
		await paciente.init(args)
		console.log("Desde el handler: "+JSON.stringify(paciente))
		ventanaEditar.webContents.send('paciente-a-editar', paciente)
	})
}

module.exports = {initPacientesHandlers}