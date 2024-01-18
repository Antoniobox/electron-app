const {contextBridge, ipcRenderer} = require('electron')

contextBridge.exposeInMainWorld('api', {
    onEditPaciente: (callback)=>ipcRenderer.on('paciente-a-editar', (_event, args)=>callback(args))
})