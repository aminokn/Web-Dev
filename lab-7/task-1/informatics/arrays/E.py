n = int(input())
a = list(map(int, input().split()))
flag = False
for i in range(1, n):
    if a[i] > 0 and a[i-1] > 0 or a[i] < 0 and a[i-1] < 0:
        flag = True

if flag == True:
    print("YES")
else:
    print('NO')