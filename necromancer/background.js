chrome.contextMenus.create({
            'title': 'Necromancer encode',
            'contexts': [ 'selection' ],
            'onclick': function(info, tab) {
				chrome.tabs.executeScript(tab.id, { file: 'content.js', frameId: info.frameId });
			}
});
