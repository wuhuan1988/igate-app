const { app, BrowserWindow } = require('electron')

function createWindow() {
  // 创建浏览器窗体
  let win = new BrowserWindow({
    title: '智能闸口系统',
    width: 800,
    height: 600,
    backgroundColor: '#FFFFFF',
    maximizable: true,
    icon: 'favicon.ico',
    show: false,
    paintWhenInitiallyHidden: false,
    autoHideMenuBar: true,
    darkTheme: true,
    webPreferences: {
      nodeIntegration: true
    }
  })

  // 最大
  win.maximize()

  // 加载index.html文件
  // win.loadFile(`${__dirname}/prj/index.html`)
  win.loadURL("http://192.168.1.113:8080/")
  // win.loadURL("https://wx.fylogistics.cn/logisticsOms/toLogin.do")

  win.once('ready-to-show', () => {
    win.show()
  })

  win.on('close', () => {
    // win.webContents.session.clearStorageData({
    //   storages: "localstorage"
    // })
  })

  // 打开开发者工具
  // win.webContents.openDevTools()
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// 部分 API 在 ready 事件触发后才能使用。
app.whenReady().then(createWindow)

// 添加窗口关闭事件
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

// 添加激活事件
app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})