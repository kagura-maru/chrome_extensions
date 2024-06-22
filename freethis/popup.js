document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('bypass').addEventListener('click', openDuplicateTab);
});

function openDuplicateTab() {
  chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
    let tab = tabs[0];
    let modifiedurl = `https://freedium.cfd/${tab.url}`
    chrome.tabs.create({ url: modifiedurl });
  });
}
