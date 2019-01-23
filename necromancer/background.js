chrome.contextMenus.create(
	{
		'title': 'Necromancer encode',
		'contexts': [ 'selection' ],
		'onclick': function(info, tab) {
			chrome.tabs.executeScript(tab.id, { file: 'necrocontent.js', frameId: info.frameId });
		}
	}
);

chrome.contextMenus.create(
	{
		'title': 'Ё encode',
		'contexts': [ 'selection' ],
		'onclick': function(info, tab) {
			chrome.tabs.executeScript(tab.id, { file: 'yocontent.js', frameId: info.frameId });
		}
	}
);