var fs = require('fs');

/**
 * 배열 값들 중에서 띄움이 3개 있는 index를 배열로 만들어 return 한다.
 * 
 * @param {array} arr 대상 배열
 */
function splitArr(arr) {
    let result = new Array;

    arr.filter(function(el, idx) {
        if (el.split(' ').length == 4)
            result.push(idx);
    })

    return result;
}


let inputs = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
inputs.splice(0, 1);

// caseArr[i] : 0 => 위치, 1 => 행성계 개수, 2~ => 행성계의 중점과 반지름
var caseIdx, caseArr = new Array;

caseIdx = splitArr(inputs);  // [0, 9]
for (let i=0; i<=caseIdx.length-1; i++) {
    if (i != caseIdx.length)
        caseArr.push(inputs.slice(caseIdx[i], caseIdx[i+1]));
    else
        caseArr.push(inputs.slice(caseIdx[i], inputs.length));
}


// case1 : 시작점이나 끝점을 둘러싸고 있는 원의 갯수
for (let i in caseArr) {
    let answer = 0;
    let testcase = caseArr[i].slice(2, caseArr[i].length);  // 행성 정보 
    let regex = new RegExp(/([0-9-]+\s[0-9-]+)\s([0-9-]+\s[0-9-]+)/);
    let match = regex.exec(caseArr[i][0]);
    let stpoint = match[1], endpoint = match[2];
    
    for (let i in testcase) {
        // 예외: 시작점, 종점 모두 행성계(원) 내부에 있는 경우
        let stpointArr = stpoint.split(" ").map((v) => parseInt(v));
        let endpointArr = endpoint.split(" ").map((v) => parseInt(v));
        let circleArr = testcase[i].split(" ").map((v) => parseInt(v));
        
        // 행성계(원) 반지름
        let r = circleArr[2];
        // 중점과 시작점 거리
        let distance_st = Math.sqrt((stpointArr[0] - circleArr[0])**2 + (stpointArr[1] - circleArr[1])**2);
        // 중점과 종점 거리
        let distance_end = Math.sqrt((endpointArr[0] - circleArr[0])**2 + (endpointArr[1] - circleArr[1])**2);

        if ((distance_st > r && distance_end < r) || (distance_st < r && distance_end > r))
            answer++;
        else
            continue;
    }

    console.log(answer);
}