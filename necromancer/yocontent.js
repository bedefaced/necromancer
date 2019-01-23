var elem = document.activeElement;

if (elem && elem.isContentEditable) {
		
	var start = elem.selectionStart;
	var end = elem.selectionEnd;

	var sel = window.getSelection();
	
	var newValue = insectText(sel.toString());
	
	var newNode = document.createTextNode(newValue);

    sel.deleteFromDocument();
	
    if (sel.rangeCount === 0) {
        sel.addRange(document.createRange());
        sel.getRangeAt(0).collapse(elem, 1);
    }
    var range = sel.getRangeAt(0);
    range.insertNode(newNode);
    sel.collapse(newNode, newValue.length);

	elem.selectionStart = start + newValue.length;
	elem.selectionEnd = elem.selectionStart;
	
}

function insectText(inputText) {
	var insectedText = '';
	
	var chars = ['а', 'у', 'е', 'о', 'и', 'я', 'ю', 'э', 'ы', 'a', 'e', 'u', 'i', 'o', 'y']
	
	for (var i = 0; i < inputText.length; i++) {
		var ch = inputText[i];
		if (chars.indexOf(ch) >= 0) {
			insectedText = insectedText + 'ё';
		} else {
			insectedText = insectedText + ch;
		}
	}
	
	return insectedText;
}
