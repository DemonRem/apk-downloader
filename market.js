chrome.extension.onRequest.addListener(function(b, c, a) {
    "getHtml" == b.action ? a({
        html: document.documentElement.outerHTML
    }) : a({})
});
