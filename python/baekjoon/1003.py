def getFiboZeroOneFaster(fiboIdx:int):
    if fiboIdx == 0:
        return { "zero": 1, "one": 0 }
    elif fiboIdx == 1:
        return { "zero": 0, "one": 1 }
    
    prev = getFiboZeroOneFaster(fiboIdx-1)
    return { "zero": prev['one'], "one": prev['zero'] + prev['one'] }


T = int(input()) # 테스트 케이스
inputs = [int(input()) for i in range(0, T)]

result = []
if T == len(inputs) and T > 0:
    for i in range(0, T):
        result.append(getFiboZeroOneFaster(inputs[i]))

for v in result:
    print(f'{v["zero"]} {v["one"]}')