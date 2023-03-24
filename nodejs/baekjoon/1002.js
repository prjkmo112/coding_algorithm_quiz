var fs = require('fs');


let _inputs = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let T = parseInt(_inputs[0]);
_inputs.splice(0,1);

let results = [];
for (let i in _inputs) {
    // res_inputs.push({ x1: _inputs[0], y1: _inputs[1], r1: _inputs[2], x2: _inputs[3], y2: _inputs[4], r2: _inputs[5] });

    let [x1, y1, r1, x2, y2, r2] = _inputs[i].split(" ").map((v) => parseInt(v));
    let distance12 = ((x1 - x2)**2 + (y1 - y2)**2)**0.5;

    if (distance12 > r1 && distance12 > r2) {
        if (distance12 < r1 + r2) results.push(2);
        else if (distance12 > r1 + r2) results.push(0);
        else if (distance12 == r1 + r2) results.push(1);
    } else {
        if (distance12 == Math.abs(r1-r2)) {
            if (distance12 == 0) results.push(-1);
            else results.push(1);
        } else if (distance12 < Math.abs(r1-r2)) {
            results.push(0);
        } else if (distance12 > Math.abs(r1 - r2)) {
            results.push(2);
        }
    }
}

console.log(results.join("\n"));