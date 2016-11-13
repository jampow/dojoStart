var conv = require('../../lib/exercicio.js');

window.convertNumber = function() {
	var phone = document.getElementById('phone').value;
	var convertedNumber = conv.getNumber(phone);
	document.getElementById('result').innerText = convertedNumber;
}
