var contextMenuItem = {
  id: "space-it",
  title: "S P A C E I T",
  contexts: ["editable"],
};

chrome.contextMenus.create(contextMenuItem);

chrome.contextMenus.onClicked.addListener(function (data, tab) {
  if (data.menuItemId === "space-it")
    chrome.tabs.sendMessage(tab.id, { text: "space-it-called" });
});
