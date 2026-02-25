chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "openPeriodicTable",
    title: "Periodic Table",
    contexts: ["all"]
  });
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "openPeriodicTable") {
    chrome.windows.create({
      url: chrome.runtime.getURL("periodic_table.html"),
      type: "popup",
      width: 1280,
      height: 780
    });
  }
});
