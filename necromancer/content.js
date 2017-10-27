var elem = document.activeElement;

if (elem && elem.isContentEditable) {
		
	var start = elem.selectionStart;
	var end = elem.selectionEnd;

	var sel = window.getSelection();
	
	var newValue = slayText(sel.toString());
	
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

function slayText(inputText) {
	var slayedText = '';
	
	var dictionary = {
		'Й' : 'Г,|', 'Ц' : '^Г|', 'У' : 'h', 'К' : '>|', 'Е' : 'а', 
		'Г' : '_|', 'Ш' : '|||', 'Щ' : '\'|||', 'З' : 'Е', 'Ъ' : '\'',
		'Ф' : 'Ф', 'Ы' : 'PI', 'В' : '8I', 'А' : ']o', 'П' : 'I_I', 'Р' : 'd',
		'О' : 'O', 'Л' : 'V', 'Д' : '<|', 'Ж' : ']|[', 'Э' : '~}', 'Я' : 'b/',
		'Ч' : '|-,', 'С' : ')', 'М' : 'VV', 'И' : 'Г|', 'Т' : '_|_', 'Ь' : '*|',
		'Б' : '9', 'Ю' : 'O-|', 'Ё' : '@', 
		
		'Q' : '`O', 'W' : 'M', 'E' : '3', 'R' : '\\d', 'T' : '_|_', 'Y' : 'h',
		'U' : 'П', 'P' : 'd', 'A' : ']o', 'S' : '5',
		'D' : '<|', 'F' : '_-I', 'G' : '9', 'H' : 'H', 'J' : 'Г', 'K' : '>|',
		'L' : ']', 'C' : ')', 'V' : '/\\', 'B' : '8I',
		'M' : 'VV', 
		
		'1' : 'I', '2' : 'II', '3' : 'III', '4' : '/\I', '5' : '/\\', '6' : 'I/\\',
		'7' : 'II/\\', '8' : 'III/\\', '9' : 'XI',
		
		' ' : '....', '!' : '__.', '?' : 'C\\_.', '\"' : '=', ',' : '`', '\'' : ','
	};
	
	var splitString = inputText.toUpperCase().split("");
	var reverseString = splitString.reverse();
	
	for (var i = reverseString.length - 1; i >= 0; i--) {
		var ch = reverseString[i];
		if (dictionary.hasOwnProperty(ch)) {
			 slayedText = dictionary[ch] + ' ' + slayedText;
		} else {
			slayedText = ch + ' ' + slayedText;
		}
	}
	
	return slayedText;
}
