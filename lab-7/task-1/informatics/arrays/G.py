n = int(input())
a = list(map(int, input().split()))
for i in range(0, n)[::-1]:
    print(a[i], end=' ')