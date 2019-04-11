const {
    app,
    BrowserWindow,
    ipcMain,
} = require("electron");

let win;

let winHeight = 600;
let winWidth = 1000;
let originalBounds;

function createWindow() {
    win = new BrowserWindow({
        width: winWidth,
        height: winHeight
    });
    win.loadFile("app/html/index.html");
    //win.webContents.openDevTools();
    win.setMenu(null);

    win.on("closed", () => {
        win = null;
    })
}

app.on("ready", createWindow);
app.on("window-all-closed", () => {
    if (process.platform !== "darwin")
        app.quit()
});

app.on("activate", function () {
    if (win === null)
        createWindow();
    originalBounds = win.getBounds();
});

ipcMain.on("app-path", (e, arg) => {
    e.returnValue = app.getAppPath();
});