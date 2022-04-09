// confirm extension is running
chrome.runtime.onInstalled.addListener(() => {
  console.log('Extension is running!');

  // set default values to storage
  fullAddress = "No address available.";
  price = "No price available.";
  chrome.storage.local.set({fullAddress});
  chrome.storage.local.set({price});
});

// inject content script and scrape webpage
chrome.tabs.onUpdated.addListener( function (tabId, changeInfo, tab) {
  if (changeInfo.url && tab.active) {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      files: ['content.js']
    });
  }
});

// on storage variables change, report new values
chrome.storage.onChanged.addListener((changes, areaName) => {
  let changedItems = Object.keys(changes);
  for (let item of changedItems){
    console.log("-----------------");
    console.log(item + " has changed");
    console.log("Old Value: " + changes[item].oldValue);
    console.log("New value: " + changes[item].newValue);
  }
});