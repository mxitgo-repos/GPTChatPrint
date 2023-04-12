chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.tagHtml) {
      var htmlData = encodeURIComponent(message.tagHtml);
      var dataUrl = `data:text/html;charset=utf-8,${htmlData}`;
  
      chrome.downloads.download({
        url: dataUrl,
        filename: 'tag.html',
        saveAs: true,
      });
    }
  });
  
  chrome.action.onClicked.addListener((tab) => {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      files: ['content.js'],
    });
  });
  