_input = input()
testcase = int(_input)

result = []

for i in range(testcase):
    _input = input()
    x1, y1, r1, x2, y2, r2 = list(map(int, _input.split(" ")))

    distance12 = ((x1 - x2)**2 + (y1 - y2)**2)**0.5

    _result = None

    # 중점이 서로 외부에 있는 경우
    if distance12 > r1 and distance12 > r2:
        if distance12 < r1 + r2:
            _result = 2
        elif distance12 > r1 + r2:
            _result = 0
        elif distance12 == r1 + r2:
            _result = 1
    else:
        if distance12 == abs(r1 - r2):
            if distance12 == 0:
                _result = -1
            else:
                _result = 1
        elif distance12 < abs(r1 - r2):
            _result = 0
        elif distance12 > abs(r1 - r2):
            _result = 2

    result.append(_result)

list(map(print, result))