var numWindows = 5;
var windows = [];

for (var i = 0; i < numWindows; i++) {
  windows[i] = window.open("", "", "width=200, height=200");
  if (i === 3) {
    windows[i].location.href = "https://www.youtube.com/watch?v=XjvaJH8aRc0&ab_channel=AnimeOST";
  }
  windows[i].moveTo(Math.random() * window.screen.width, Math.random() * window.screen.height);
}

setInterval(function() {
  for (var i = 0; i < windows.length; i++) {
    if (!windows[i].closed) { // check if window is closed before trying to move it
      windows[i].moveTo(Math.random() * window.screen.width, Math.random() * window.screen.height);
    }
  }
}, 1000);

window.onbeforeunload = function() {
  return "Are you sure you want to navigate away from this page?";
}

for (var i = 0; i < windows.length; i++) {
  windows[i].onclick = function() {
    window.open("", "", "width=200, height=200");
  }
}

window.onunload = function() {
  for (var i = 0; i < windows.length; i++) {
    if (windows[i].closed) {
      windows[i] = window.open("", "", "width=200, height=200");
    }
  }
}
