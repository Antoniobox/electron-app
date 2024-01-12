const { ipcMain } = require('electron')

function initPacientesHandlers() {
	ipcMain.handle("getPacientes", async (event, args)=>{
		const {Paciente} = require('./paciente.js')
		const pacientes = await Paciente.getRows()
		return pacientes
	})
	ipcMain.handle("getMedico", async (event, args)=>{
		const {Paciente} = require('./paciente.js')
		console.log("ARGS: "+args)
		const medico = await Paciente.getMedico(args)
		return medico
	})
}

module.exports = {initPacientesHandlers}