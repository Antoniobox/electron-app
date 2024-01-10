const { ipcMain } = require('electron')

function initPacientesHandlers() {
	ipcMain.handle("getPacientes", async (event, args)=>{
		const {Paciente} = require('./paciente.js')
		const pacientes = await Paciente.getRows()
		return pacientes
	})
}

module.exports = {initPacientesHandlers}