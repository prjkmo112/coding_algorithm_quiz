var fs = require('fs');

// function splitArr(arr) {
//     for (let i=0; i<T; i++) {
//         arr
//     }
// }

let inputs = fs.readFileSync('/dev/stdin').toString().trim().split("\n");
let T = parseInt(inputs[0]);
inputs.splice(0,1);


let inputsArr = [];
let curIdx = 0;
for (let i=0; i<T; i++) {
    let N = parseInt(inputs[curIdx].split(" ")[0]);
    let K = parseInt(inputs[curIdx].split(" ")[1]);
    curIdx++;
    let times_arr = inputs[curIdx].split(" ").map((v) => parseInt(v));
    curIdx++;

    let orders = [];
    for (let _i=curIdx; _i<curIdx+K+1; _i++) {
        let v = inputs[_i].split(" ");
        orders.push({ x: parseInt(v[0]), y: parseInt(v[1]) });
    }
    curIdx += K+1;

    inputsArr.push({ N, K, times_arr, buildingCnt: times_arr.length, orders });
}

for (let i in inputsArr) {
    let totalTime = 0;
    let data = inputsArr[i];

    // 1번째는 무조건 그냥 추가
    totalTime += data['times_arr'][0];

    // 2번째부터는 동시 시행
    for (let j=1; j<data.buildingCnt-1; j++) {
        let list = data['orders'].filter((v) => v.x == j).map((v) => data['times_arr'][v.y-1]);
        totalTime += Math.max.apply(null, list) || 0;

        console.log(j, list, Math.max.apply(null, list) || 0);
    }

    console.log(totalTime);
}