b=list(map(float, input().split()))[:2]

def power(a, n):
    return pow(a, n)

# def power(a, n):
#     res = 1
#     for i in range(abs(n)):
#         if n < 0:
#             res *= 1/a
#         else:
#             res *= a
#     return res

print(power(b[0], b[1]))