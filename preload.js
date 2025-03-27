//pre-load css, to use express functions
//has access to nodejs
const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('api', {
    title: "the note app",
    createNote: (data) => ipcRenderer.invoke('create-file', data)
})

