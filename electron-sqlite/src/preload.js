// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts

const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld('api', {
    executeQuery: (query) => {
        return ipcRenderer.invoke('prepareAndRun', query)
    },
    executeSelect: (query) => {
        return ipcRenderer.invoke('prepareAndAll', query)
    }
});