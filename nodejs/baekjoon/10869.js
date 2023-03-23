var fs = require('fs');

let [a,b] = fs.readFileSync('/dev/stdin').toString().split(' ').map((v) => parseInt(v));
console.log(`${a+b}\n${a-b}\n${a*b}\n${parseInt(a/b)}\n${a%b}`);