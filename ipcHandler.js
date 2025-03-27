//required imports
const { ipcMain } = require('electron');
const path = require('path')
const fs = require('fs')

//function to create txt files
// IPC (Inter-Process Communication) handler
ipcMain.handle('create-file', async (event, data) => {
    if (!data || !data.title || !data.content) return false;
    const filePath = path.join(__dirname, 'note', `${data.title}.txt`)
    fs.writeFileSync(filePath, data.content);
    return { success: true, filePath }
})