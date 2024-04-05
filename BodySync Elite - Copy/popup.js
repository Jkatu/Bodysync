document.getElementById('searchButton').addEventListener('click', function() {
  var searchTerm = document.getElementById('searchInput').value;
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, {searchTerm: searchTerm});
  });
});
