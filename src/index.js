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
        let wordArr = expr.toString().split('**********');
    let letterArr = [];
    let key = '';
    let res = '';
  
    wordArr.forEach(item => {
      letterArr = []
      for(let i = 0; i < item.length / 10; i++) {
        letterArr.push(item.substring(i * 10,(i + 1) * 10));
      };
      for (let elem of letterArr){
        elem = elem.slice(elem.indexOf('1'), elem.length);
        key = '';
        for (let j = 0; j < elem.length / 2; j++){
            key += (elem[2 * j + 1] === '0') ? '.':'-';
        }
        res += MORSE_TABLE[key];
      }
      res += ' ';
    })
    
    return res.trim();
}

module.exports = {
    decode
}
