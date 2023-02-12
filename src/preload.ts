import { contextBridge, ipcRenderer } from 'electron';
import { applicationTitleBarActionTypes } from './preloadActions/preloadActionTypes';

const applicationTitleBarAPI: applicationTitleBarActionTypes = {
   close: () => ipcRenderer.send('close'),
   maximize: () => ipcRenderer.send('maximize'),
   hide: () => ipcRenderer.send('hide'),
};

contextBridge.exposeInMainWorld('applicationTitleBar', applicationTitleBarAPI);
