let state = false;

chrome.browserAction.onClicked.addListener(function(tab) {
  console.log('user clicked extension');
  if (!state) {
    console.log('...loading dark mode');
    chrome.tabs.insertCSS(null, { file: "dark_mode.css" });
    state = !state;
    return;
  }
  chrome.tabs.insertCSS(null, { file: "light_mode.css" });
  state = !state;
});