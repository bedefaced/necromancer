chrome.contextMenus.create({
            'title': 'Nectomancer encode',
            'contexts': [ 'selection' ],
            'onclick': function(info, tab) {
				chrome.tabs.executeScript(tab.id, { file: 'content.js', frameId: info.frameId });
			}
});