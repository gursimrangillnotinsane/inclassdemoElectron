//required imports
const { app, ipcMain } = require('electron');
const path = require('path')
const fs = require('fs')

//function to create txt files
// IPC (Inter-Process Communication) handler
ipcMain.handle('create-file', async (event, data) => {
    if (!data || !data.title || !data.content) return false;
    // to store data in UserData
    //C:\Users\hp\AppData\Roaming
    const folderName = path.join(app.getPath('userData'), 'note');
    try {
        if (!fs.existsSync(folderName)) {
            fs.mkdirSync(folderName);
        }
    }
    catch (err) {
        console.log(err.message)
    }
    const filePath = path.join(folderName, `${data.title}.txt`)
    fs.writeFileSync(filePath, data.content);
    return { success: true, filePath }
})