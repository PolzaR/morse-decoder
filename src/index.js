const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
	let arr = expr.split('');
	let startPoint = 0;
	let endPoint = 10; 
	let subArr;
	let generalArr = [];
	let subArr2 = [];
	let result;
	let filterArr;
	let symbolStr = '';
	let letterStr = '';
	let noUse;
	while(endPoint <= arr.length) {
		subArr = arr.slice(startPoint,endPoint);
		startPoint += 10;
		endPoint +=10;
		generalArr.push(subArr);
	}
	for (let i = 0; i < generalArr.length; i++) {
		subArr2 = generalArr[i];
		if (subArr2[0] != 0) {
			result = subArr2.join('')
		} else {
			for(let j = 0; j < subArr2.length; j++) {
				if(subArr2[j] == '0') {
					subArr2[j] = ' ';
				} else if(subArr2[j] == '1') {
					break;
				}
				filterArr = subArr2.filter(elem => elem !== ' ');
			}
			result = filterArr.join('');
		}

		

		let sum = [];
		let start = 0;
		let end = 2;
		let subArr3;
		let arr = result.split('');
		while(end <= arr.length) {
				subArr3 = arr.slice(start,end);
				start += 2;
				end +=2;
		        sum.push(subArr3.join(''));
			}
		for(let j = 0; j < sum.length; j++) {
			if(sum[j] == '10') {
				sum[j] = '.';
			} else if(sum[j] == '11') {
				sum[j] = '-';
			}
		}
		let letterStrMaterial = sum.join('');
		
		if(MORSE_TABLE[letterStrMaterial] != undefined) {
			letterStr += MORSE_TABLE[letterStrMaterial];
		} else {
			letterStr += ' ';
		}
	}
	return letterStr;
}

module.exports = {
    decode
}
