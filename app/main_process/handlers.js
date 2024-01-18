const { ipcMain } = require('electron')

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
}

module.exports = {initPacientesHandlers}