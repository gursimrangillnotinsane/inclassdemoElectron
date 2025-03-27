# ELECTRON NOTE APP

A simple note-taking application built with **Electron.js**. This app allows users to create and save notes locally on their system.

---

## Step-by-Step Guide
### 1. Initialize the nodejs app in a new directory
    npm init
### 2. Add electron using npm
    npm install electron --save-dev
### 3. Modify package.jsnon
    "scripts":{
      "start":"electron ."
    }
the dist command is to run electron-builder which we will use to compile our app and have a startup executable file.
### 4. Create a main entry point (index.js)
      const { app, BrowserWindow } = require('electron');
      function createWindow() {
          const win = new BrowserWindow({
              width: 720,
              height: 1080,
          })
          win.loadFile('src/index.html')
      }
      app.whenReady().then(createWindow);
      app.on('window-all-closed', () => {
          if (process.platform !== 'darwin') app.quit();
      })
this is the bare-minimum required in the main entry point to start the app
### 5. Create an index.html File
Create a file called index.html in the src/ folder, which will contain the app’s UI.

    <!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=<device-width>, initial-scale=1.0">
            <title>Document</title>
             <!-- tailwind css -->
            <script
                src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
        </head>
        <body class="p-4">
            <nav class="p-4">
                <a href="anotherPage.html">Another page</a>
            </nav>
            <section class="p-4">
                <div class="flex justify-center">
                    <h1 id="title" class="text-2xl font-bold ">Notes App</h1>
                </div>
                <div class="my-4">
                    <div>
                        <label for="notetitle">Title</label>
                        <input type="text" id="notetitle" />
    
                    </div>
                    <div>
                        <label for="content">Content</label>
                        <input type="text" id="content" />
    
                    </div>
                    <button id="submit"
                        class="mt-8 bg-zinc-700 p-2 rounded-xl text-white">Submit
                        note</button>
                </div>
            </section>
        </body>

    </html>

### 6. Run your first app
    npm start
this will run the app and you will see a new app

---

## Packaging the App
### 1. Intall electron-builder using npm
    npm install --save-dev electron-builder
### 2. Add a script and build details in your package.json
    "scripts": {
    "start": "electron .",
    "dist": "electron-builder"
    },
    "build": {
      "appId": "com.example.myelectronapp",
      "productName": "MyElectronApp",
      "win": {
        "target": "nsis",
        "icon": "assets/icon.ico"
      }
    },
 For mac, add the following build entries instead of win
  
     "mac": {     
       "target": ["dmg", "zip"], 
       "icon": "assets/icon.icns"
       }
  ### 4. Give your terminal the necessary permissions
  Run your vs-code or any other IDE as administrator to ensure it has the necessary permissions for packaging.
  ### 5. Run the script
      npm run dist
  Now your startup.exe will be availabe in dist/ folder.

