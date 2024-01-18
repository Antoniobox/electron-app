const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('api', {
	getPacientes: async () => await ipcRenderer.invoke("getPacientes"),
	getMedico: async (id) => await ipcRenderer.invoke("getMedico", id)
})