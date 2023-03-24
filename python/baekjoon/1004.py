import math

def splitArr(arr):
    result = []
    for i,v in enumerate(arr):
        if len(v.split(' ')) == 4:
            result.append(i)
    return result

T = int(input()) # 테스트 케이스
# inputs = [input() for i in range(0, T)]

res = []
for i in range(0,T):
    answer = 0
    point = list(map(int, input().split(" ")))
    stpoint = point[:2]
    endpoint = point[2:]

    N = int(input())

    for val in range(0, N):
        circleArr = list(map(int, input().split(" ")))

        # 행성계(원) 반지름
        r = circleArr[2]
        # 중점과 시작점 거리
        distance_st = math.sqrt((stpoint[0] - circleArr[0])**2 + (stpoint[1] - circleArr[1])**2)
        # 중점과 종점 거리
        distance_end = math.sqrt((endpoint[0] - circleArr[0])**2 + (endpoint[1] - circleArr[1])**2)

        if (distance_st > r and distance_end < r) or (distance_st < r and distance_end > r):
            answer += 1
        else:
            continue

    res.append(f'{answer}')

# for i in res:
#     print(i)

print('\n'.join(res))