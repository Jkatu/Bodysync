chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.searchTerm) {
    var regex = new RegExp(request.searchTerm, 'gi');
    var matches = document.documentElement.innerHTML.match(regex);
    if (matches && matches.length > 0) {
      for (var i = 0; i < matches.length; i++) {
        var span = document.createElement('span');
        span.style.backgroundColor = 'yellow';
        span.textContent = matches[i];
        document.body.innerHTML = document.body.innerHTML.replace(matches[i], span.outerHTML);
      }
      alert(matches.length + ' matches found.');
    } else {
      alert('No matches found.');
    }
  }
});
