const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const fs = require('fs');

const path = require('path');
const isDev = require('electron-is-dev');
const { ipcMain } = require('electron');

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow(
    isDev ?
      {
        width: 900,
        height: 680,
        icon: path.join(__dirname, '../assets/icon.png'),
        webPreferences: {
          nodeIntegration: true,
        }
      }
      :
      {
        width: 900,
        height: 680,
        webPreferences: {
          nodeIntegration: true,
        }
      }
  );
  mainWindow.loadURL(isDev ? 'http://localhost:3000' : `file://${path.join(__dirname, '../build/index.html')}`);

  mainWindow.once('close', function (e) {
    mainWindow.webContents.send('save-before-exit');
    e.preventDefault();
  })
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});


ipcMain.on('save', (event, arg) => {
  console.log("Saving")

  fs.writeFile(`${path.join(__dirname, '../src/data.json')}`, arg, (err) => {
    if(err)
      console.error(err)
  });

})

ipcMain.handle('saving-before-exit', async (event, arg) => {
  const result = await fs.writeFile(`${path.join(__dirname, '../src/data.json')}`, arg, (err) => {
    if (err)
      console.error(err)
    app.exit(0)
  });

  return result;
})

setInterval(() => {
  mainWindow.webContents.send('periodically-save');
}, 1000*60*10)
