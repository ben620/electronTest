
// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// No Node.js APIs are available in this process because
// `nodeIntegration` is turned off. Use `preload.js` to
// selectively enable features needed in the rendering
// process.

document.getElementById('btn').addEventListener('click', function (){
    console.log("btn clicked...");
    ipcRenderer.send('btnClick', [1, 2, 3 ])
})

ipcRenderer.on('btnReply', function(event, args){
    console.log(args);
    
    document.getElementById('output').innerText = args;
})