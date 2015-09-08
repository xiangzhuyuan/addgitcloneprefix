'use strict';

function onWebNav(details) {
    if (details.frameId === 0) {
        // Top-level frame
        chrome.pageAction.show(details.tabId);
    }
}
var filter = {
    url: [{
        hostEquals: 'github.com'
    }]
};
chrome.webNavigation.onCommitted.addListener(onWebNav, filter);
console.log('\'Allo \'Allo! Event Page for Browser Action');