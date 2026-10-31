const {app,BrowserWindow,session}=require('electron');
app.whenReady().then(()=>{
  session.defaultSession.setPermissionRequestHandler((w,p,cb)=>cb(['midi','midiSysex'].includes(p)));
  session.defaultSession.setPermissionCheckHandler((w,p)=>['midi','midiSysex'].includes(p));
  new BrowserWindow({width:1280,height:800,autoHideMenuBar:true}).loadFile('index.html');
});
app.on('window-all-closed',()=>app.quit());
