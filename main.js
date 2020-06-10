function getSelectionText() {
  var text = "";
  if (window.getSelection) {
    text = window.getSelection().toString();
  } else if (document.selection && document.selection.type != "Control") {
    text = document.selection.createRange().text;
  }
  return text;
}

function replaceSelectedText(text) {
  var txtArea = document.activeElement;
  if (txtArea.tagName === "INPUT" || txtArea.tagName === "TEXTAREA") {
    if (txtArea.selectionStart != undefined) {
      var startPos = txtArea.selectionStart;
      var endPos = txtArea.selectionEnd;
      selectedText = txtArea.value.substring(startPos, endPos);
      txtArea.value =
        txtArea.value.slice(0, startPos) + text + txtArea.value.slice(endPos);
      txtArea.dispatchEvent(new Event("input", { bubbles: true }));
    }
  } else {
    txtArea.dispatchEvent(
      new InputEvent("textInput", { data: text, bubbles: true })
    );
  }
}

chrome.runtime.onMessage.addListener(function (msg) {
  if (msg.text === "space-it-called") {
    var selectedText = getSelectionText();
    if (selectedText.trim()) {
      replaceSelectedText(spacer(selectedText));
    }
  }
});
