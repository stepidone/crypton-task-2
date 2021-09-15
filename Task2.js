const fs = require ('fs')
const util = require('util');

function massiv(N) {
    let massiv = new Array(2*N)
    for (let i = 0; i < massiv.length; i++) {
        if (i > N-1){
            massiv[i] = i - N + 1
        }
        else{
            massiv[i] = 0
        }
    }
    return massiv
}

var permArr = [],
  usedChars = [];

function permute(input) {
  var i, ch;
  for (i = 0; i < input.length; i++) {
    ch = input.splice(i, 1)[0];
    usedChars.push(ch);
    if (input.length == 0) {
      permArr.push(usedChars.slice());
    }
    permute(input);
    input.splice(i, 0, ch);
    usedChars.pop();
  }
  return permArr
};

let N = 3
let myArray = massiv(N)
let answer = permute(myArray)

let logger = fs.createWriteStream('combinations2.txt', {
    flags: 'a'
})
answer.map((item) => logger.write(item.toString()+'\n'))

let data = fs.readFileSync('combinations.txt').toString()
console.log(data.split('\n').length - 1)