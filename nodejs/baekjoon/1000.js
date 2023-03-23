var fs = require('fs');

var [a,b] = fs.readFileSync('/dev/stdin').toString().split(' ').map((v) => parseInt(v));
console.log(a+b);