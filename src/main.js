const electron = require('electron');
const { app, BrowserWindow, session } = electron;



let mainWindow;






app.on('ready', () => {
    mainWindow = new BrowserWindow({
        width: 400,
        height: 400
    });

    mainWindow.setTitle('Web Wrapper APP');
    mainWindow.loadURL('http://something.some');

    mainWindow.on('closed', () => {
        mainWindow = null;
    });


    //Changing Downloads locaiton

    // mainWindow.openDevTools();
	const ses = session.fromPartition('persist:name');
	let contents = mainWindow.webContents.session;
 	contents.setDownloadPath(app.getPath('downloads'));



});
