const tabsList = {}

chrome.action.onClicked.addListener(async (tab) => {
  const isInvert = tabsList[tab.id];

  if (!isInvert) {
    await chrome.scripting.insertCSS({
      files: ['invert.css'],
      target: { tabId: tab.id },
    });

    tabsList[tab.id] = true;
  }
  else {
    await chrome.scripting.removeCSS({
      files: ['invert.css'],
      target: { tabId: tab.id },
    });

    tabsList[tab.id] = false;
  }
})