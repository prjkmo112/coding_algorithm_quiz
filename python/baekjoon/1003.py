testcase = int(input())

result = []


def fibonacci_cnt(n):
    n = int(n)

    if n == 0:
        return {"zero": 1, "one": 0}
    elif n == 1:
        return {"zero": 0, "one": 1}
    elif n == 2:
        return {"zero": 1, "one": 1}
    elif n == 3:
        return {"zero": 1, "one": 2}
    else:
        return plus_fibonacci_cnt(n - 1, n - 2)


def plus_fibonacci_cnt(n, n2):
    zero_val = fibonacci_cnt(n)["zero"] + fibonacci_cnt(n2)["zero"]
    one_val = fibonacci_cnt(n)["one"] + fibonacci_cnt(n2)["one"]

    return {"zero": zero_val, "one": one_val}


for i in range(testcase):
    _input = input()
    fib_result = fibonacci_cnt(_input)

    _result = f'{fib_result["zero"]} {fib_result["one"]}'
    result.append(_result)

if result.__len__() > 0:
    list(map(print, result))