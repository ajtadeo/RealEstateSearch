console.log("Background script running.")

chrome.webNavigation.onHistoryStateUpdated.addListener(async function(e) {
    console.log("URL change detected.")
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {bgMsg: "URL change detected"}, function(response) {
          console.log(response.contentMsg);
        });
      });
});