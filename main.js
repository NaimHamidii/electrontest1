const { app, BrowserWindow, ipcMain, Notification } = require('electron');

function createWindow(){
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
            // contextIsolation: true,
            // preload: path.join(__dirname, 'preload.js'),
        },
    });

    win.loadFile('index.html');

    win.webContents.openDevTools();
}

app.whenReady()
    .then(() => {
        createWindow()
    });


ipcMain.on('notify', () => {
    new Notification({title: 'Notification', body: 'Test Notification'}).show();
})