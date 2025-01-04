// Get the documentElement (<html>) to display the page in fullscreen
var elem = document.documentElement;

/* View in fullscreen */
function openFullscreen() {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.webkitRequestFullscreen) { /* Safari */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { /* IE11 */
    elem.msRequestFullscreen();
  }
}

/* Close fullscreen */
function closeFullscreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.webkitExitFullscreen) { /* Safari */
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) { /* IE11 */
    document.msExitFullscreen();
  }
}

/* Toggle fullscreen */
function toggleFullscreen() {
  if (!document.fullscreenElement &&    // alternative standard method
      !document.webkitFullscreenElement && // alternative webkit method
      !document.msFullscreenElement) {  // alternative ms method
    openFullscreen();
  } else {
    closeFullscreen();
  }
}
