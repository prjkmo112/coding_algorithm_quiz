var fs = require('fs');

function inputs() {
    return fs.readFileSync('/dev/stdin').toString();
}


let T = parseInt(inputs().trim());

let results = [];
let res_inputs = [];
for (let i=0; i<T; i++) {
    let _inputs = inputs().split(" ").map((v) => parseInt(v.trim()));
    res_inputs.push({ x1: _inputs[0], y1: _inputs[1], r1: _inputs[2], x2: _inputs[3], y2: _inputs[4], r2: _inputs[5] });
}

for (let i in res_inputs) {
    let _i = res_inputs[i];

    let v = Math.sqrt((_i.x2 - _i.x1) ** 2 + (_i.y2 - _i.y1) ** 2);
    
    if ( (v == 0 && _i.r1 !== _i.r2) || (v > _i.r1 + _i.r2) || (v < Math.abs(_i.r1 - _i.r2)) )
        results.push(0);
    else if (v == 0 && _i.r1 === _i.r2)
        results.push(-1);
    else if (v < _i.r1 + _i.r2 && v > Math.abs(_i.r1 - _i.r2))
        results.push(2);
    else if ( (v == _i.r1 + _i.r2) || (v === Math.abs(_i.r1 - _i.r2)) )
        results.push(1);
}

console.log(results.join("\n"));