const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('api', {
	getPacientes: async () => await ipcRenderer.invoke("getPacientes"),
	getMedico: async (dni) => await ipcRenderer.invoke("getMedico", dni)
})