var fs = require('fs');


// /**
//  * 피보나치 수열에서 n번째의 0과 1의 개수를 가져온다
//  * 
//  * @param {number} fiboIdx 피보나치 {fiboIdx} 번째
//  * @returns {object} JSON 형태로 리턴 ({zero: 0의 개수, one: 1의 개수})
//  */
// function getFiboZeroOne(fiboIdx) {
//     if (fiboIdx===0) return {zero: 1, one: 0}
//     else if (fiboIdx===1) return {zero: 0, one: 1}
//     else if (fiboIdx>1) return {zero: fibonacci(fiboIdx-1), one: fibonacci(fiboIdx)};
// }

// /**
//  * 피보나치 수 구하는 함수
//  * 
//  * @param {number} num 구할 피보나치 수열의 인덱스값
//  */
// function fibonacci(num) {
//     if (num == 0) return 0;
//     else if (num == 1) return 1;
//     else return fibonacci(num-1) + fibonacci(num-2);
// }


function getFiboZeroOneFaster(fiboIdx) {
    if (fiboIdx===0) return {zero: 1, one: 0}
    else if (fiboIdx===1) return {zero: 0, one: 1}

    let prev = getFiboZeroOneFaster(fiboIdx-1)
    return { zero: prev.one, one: prev.zero + prev.one };
}


var _inputs = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let caseCnt = _inputs[0], req = _inputs.slice(1);

let result = [];
if (caseCnt == req.length && caseCnt > 0) {
    for (let i=0; i<caseCnt; i++) {
        // timeout..
        // result.push(getFiboZeroOne(parseInt(req[i])));

        // timeout 해결
        result.push(getFiboZeroOneFaster(parseInt(req[i])));
    }
} else console.log(`Error: 개수가 맞지 않음`);

for (let i in result) {
    console.log(`${result[i].zero} ${result[i].one}`);
}