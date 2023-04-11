n = int(input())
i = 1
while i < n:
    i *= 2

k = 0
while i != 1:
    i //= 2
    k += 1

print(k)